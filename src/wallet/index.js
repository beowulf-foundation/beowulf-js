import Promise from 'bluebird';
import beowulfAuth from '../auth';
import beowulfBroadcast from '../broadcast';
import newDebug from 'debug';
import keygen from './keygen';
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
        
        // let crypto = encryptWallet(privKeys, password);
        resolve({
          result: result,
          // crypto,
        });
      }
    );
  });

  return promise;
};

function encryptWallet(wallet, password) {
  let plainWallet = JSON.stringify(wallet);
  let rp = {};
  let p = {
    adata: '',
    iter: '1000',
    mode: 'cbc',
    ts: 64, // authentication tag
    ks: 256 // 256
  };

  let encryptedWallet = sjcl
    .encrypt(password, plainWallet, p, rp)
    .replace(/,/g, ',\n');

  return {
    ciphertext: encryptedWallet,
    cipherparams: { iv: rp.iv, ts: p.ts },
    cipher: 'aes-256-cbc',
    kdf: 'pbkdf2',
    kdfparams: {
      salt: rp.salt,
      iter: p.inter
    }
  };
}

function decryptWallet(encryptedWallet, password) {}

exports = module.exports = beowulfWallet;