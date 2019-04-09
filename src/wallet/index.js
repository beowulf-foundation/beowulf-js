import Promise from 'bluebird';
import beowulfAuth from '../auth';
import beowulfBroadcast from '../broadcast';
import newDebug from 'debug';
import keygen from './keygen';
import { Aes, hash } from '../auth/ecc';

const debug = newDebug('beowulf:wallet');

const beowulfWallet = {};

beowulfWallet.generateWallet = function({
  account,
  password,
  creator,
  creatorWif,
  fee = '0.10000 W'
}) {
  let keygenPassw = keygen.getKey('ci_key');
  let privKeys = beowulfAuth.getPrivateKeys(account, keygenPassw);

  let owner = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[privKeys.ownerPubkey, 1]]
  };

  let jsonMetadata = '';
  let promise = new Promise((resolve, reject) => {
    beowulfBroadcast.accountCreate(
      creatorWif,
      fee,
      creator,
      account,
      owner,
      jsonMetadata,
      function(err, result) {
        if (err) {
          reject(err);
          return;
        }

        let encryptedPrivKeys = encryptPrivKeys(privKeys, password);
        resolve({
          result,
          privKeys,
          encryptedPrivKeys,
        });
      }
    );
  });

  // let promise = new Promise((resolve, reject) => {
  //   let encryptedPrivKeys = encryptPrivKeys(privKeys, password);
  //   let decrypted = decryptPrivKeys(encryptedPrivKeys, password);
  //   resolve({
  //     encryptedPrivKeys,
  //     decrypted
  //   });
  // });

  return promise;
};

beowulfWallet.decryptPrivKeys = decryptPrivKeys;

function encryptPrivKeys(privKeys, password) {
  let salt = keygen.keyGen(16, true, true, true, true, false);
  let hashedPassword = hash.sha512(password + salt);
  let iv = hashedPassword.slice(32).toString('hex').substr(0, 16);
  let newPassword = hashedPassword.slice(0, 32);

  let plainKeys = {
    checksum: hashedPassword,
    keys: privKeys
  };

  let strPlainKeys = JSON.stringify(plainKeys);
  let encryptedKeys = Aes.cryptoJsEncrypt(strPlainKeys, newPassword, iv);

  return {
    cipher_keys: encryptedKeys.toString('hex'),
    cipher_type: 'aes-256-cbc',
    salt: salt
  };
}

function decryptPrivKeys(encryptedWallet, password) {
  let encryptedKeys = encryptedWallet.cipher_keys;
  encryptedKeys = Buffer.from(encryptedKeys, 'hex');

  let salt = encryptedWallet.salt;
  let hashedPassword = hash.sha512(password + salt);

  let iv = hashedPassword.slice(32).toString('hex').substr(0, 16);
  let newPassword = hashedPassword.slice(0, 32);
  let strPlainKeys = Aes.cryptoJsDecrypt(encryptedKeys, newPassword, iv);
  let plainKeys = JSON.parse(strPlainKeys);

  return plainKeys.keys;
}

exports = module.exports = beowulfWallet;
