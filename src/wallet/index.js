import Promise from 'bluebird';
import beowulfAuth from '../auth';
import beowulfBroadcast from '../broadcast';
import newDebug from 'debug';
import keygen from './keygen';
import hash from '../auth/ecc/src/hash';
const debug = newDebug('beowulf:wallet');
import sjcl from 'sjcl';

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

  let active = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[privKeys.activePubkey, 1]]
  };
  let posting = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[privKeys.postingPubkey, 1]]
  };

  let jsonMetadata = '';
  let promise = new Promise((resolve, reject) => {
    beowulfBroadcast.accountCreate(
      creatorWif,
      fee,
      creator,
      account,
      owner,
      active,
      jsonMetadata,
      function(err, result) {
        if (err) {
          reject(err);
          return;
        }

        let wallet = encryptWallet(privKeys, password);
        resolve({
          result,
          wallet
        });
      }
    );
  });

  // let promise = new Promise((resolve, reject) => {
  //   let wallet = encryptWallet(privKeys, password);
  //   resolve({
  //     wallet
  //   });
  // });

  return promise;
};

beowulfWallet.decryptWallet = decryptWallet;

function encryptWallet(wallet, password) {
  let plainWallet = JSON.stringify(wallet);
  let p = {
    adata: '',
    iter: 1000,
    mode: 'ccm',
    ts: 64, // authentication tag
    ks: 256 // 256
  };

  let encryptedWallet = sjcl.encrypt(password, plainWallet, p, {});

  encryptedWallet = JSON.parse(encryptedWallet);

  return {
    ciphertext: encryptedWallet.ct,
    cipherparams: { iv: encryptedWallet.iv, ts: encryptedWallet.ts },
    cipher: 'aes-256-ccm',
    kdf: 'pbkdf2',
    kdfparams: {
      salt: encryptedWallet.salt,
      iter: encryptedWallet.iter
    }
  };
}

function decryptWallet(encryptedWallet, password) {
  let cipherText = {
    ct: encryptedWallet.ciphertext,
    iv: encryptedWallet.cipherparams.iv,
    ts: encryptedWallet.cipherparams.ts,
    v: 1,
    iter: encryptedWallet.kdfparams.iter,
    salt: encryptedWallet.kdfparams.salt,
    ks: 256,
    mode: 'ccm',
    cipher: 'aes',
    adata: '',
  };

  cipherText = JSON.stringify(cipherText);
  let decrypted = sjcl.decrypt(password, cipherText);
  decrypted = JSON.parse(decrypted);

  return decrypted;
}

exports = module.exports = beowulfWallet;
