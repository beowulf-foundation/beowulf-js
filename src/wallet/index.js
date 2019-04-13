import beowulfAuth from '../auth';
import beowulfBroadcast from '../broadcast';
import keygen from './keygen';
import { Aes, hash } from '../auth/ecc';

const beowulfWallet = {};

beowulfWallet.generateWallet = function() {
  let keygenPassw = keygen.getKey('ci_key');
  let account = keygen.getKey('ci_key');

  let wallet = beowulfAuth.getPrivateKeys(account, keygenPassw);

  return wallet;
};

beowulfWallet.submitWallet = function(
  { ownerPubkey, account, creator, creatorWif, fee = '0.10000 W' },
  cb
) {
  let jsonMetadata = '';
  let owner = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[ownerPubkey, 1]]
  };

  beowulfBroadcast.accountCreate(
    creatorWif,
    fee,
    creator,
    account,
    owner,
    jsonMetadata,
    cb
  );
};

beowulfWallet.decryptWallet = decryptWallet;
beowulfWallet.encryptWallet = encryptWallet;

function encryptWallet(account, wallet, password) {
  let salt = keygen.keyGen(16, true, true, true, true, false);
  let hashedPassword = hash.sha512(password + salt);
  let iv = hashedPassword
    .slice(32)
    .toString('hex')
    .substr(0, 16);
  let newPassword = hashedPassword.slice(0, 32);

  let plainKeys = {
    checksum: hashedPassword,
    keys: wallet
  };

  let strPlainKeys = JSON.stringify(plainKeys);
  let encryptedKeys = Aes.cryptoJsEncrypt(strPlainKeys, newPassword, iv);

  return {
    cipher_keys: encryptedKeys.toString('hex'),
    cipher_type: 'aes-256-cbc',
    salt: salt,
    account
  };
}

function decryptWallet(encryptedWallet, password) {
  let encryptedKeys = encryptedWallet.cipher_keys;
  encryptedKeys = Buffer.from(encryptedKeys, 'hex');

  let salt = encryptedWallet.salt;
  let hashedPassword = hash.sha512(password + salt);

  let iv = hashedPassword
    .slice(32)
    .toString('hex')
    .substr(0, 16);
  let newPassword = hashedPassword.slice(0, 32);
  let strPlainKeys = Aes.cryptoJsDecrypt(encryptedKeys, newPassword, iv);
  let plainKeys = JSON.parse(strPlainKeys);

  return plainKeys.keys;
}

exports = module.exports = beowulfWallet;
