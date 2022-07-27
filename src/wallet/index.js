import beowulfAuth from '../auth';
import beowulfBroadcast from '../broadcast';
import keygen from './keygen';
import { Aes, hash } from '../auth/ecc';

const beowulfWallet = {};

beowulfWallet.generateWallet = function () {
  let keygenPassw = keygen.getKey('ci_key');
  let account = keygen.getKey('ci_key');

  let wallet = beowulfAuth.getPrivateKeys(account, keygenPassw);

  return wallet;
};

beowulfWallet.generateMulWallet = function (amount) {
  var keygenPassw = keygen.getKey('ci_key');
  var account = keygen.getKey('ci_key');
  var amount = amount;

  var wallet = beowulfAuth.getMulPrivateKeys(account, keygenPassw, amount);

  return wallet;
};

beowulfWallet.generateMultipleWallet = function (amount) {
  const wallets = [];
  for (let i = 0; i < amount; i++) {
    wallets.push(this.generateWallet());
  }
  return wallets;
}
beowulfWallet.submitMultipleWallet = function (wallets, creator, creatorWif, cb) {
  // wallets = {
  //   ownerPubkey: "",
  //   name: "",
  //   fee: "",
  // }
  if (wallets.length > 50) {
    cb(new Error("Maximum amount of accounts is 50"), null);
    return;
  }
  const operations = [];
  for (let i = 0; i < wallets.length; i++) {
    const owner = {
      weight_threshold: 1,
      account_auths: [],
      key_auths: [[wallets[i].ownerPubkey, 1]]
    };
    const options = {
      fee: wallets[i].fee,
      creator: creator,
      new_account_name: wallets[i].name,
      owner: owner,
      json_metadata: ""
    }
    const operation = ["account_create"];
    operation.push(Object.assign(
      // {}, // extension
      options, // options
      // {} // permlink
    ))
    operations.push(operation);
  }

  const keys = beowulfBroadcast.accountCreateKeys(creatorWif);

  return beowulfBroadcast.send({
    extensions: [],
    operations: operations,
  }, keys, cb);
}

beowulfWallet.submitWallet = function (
  { ownerPubkey, account, creator, creatorWif, fee = '0.01000 W' },
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

beowulfWallet.transferEX = function (
  { creatorWif, from, to, amount, fee, memo, data_extension },
  cb
) {
  beowulfBroadcast.transfer(
    creatorWif,
    from,
    to,
    amount,
    fee,
    memo,
    data_extension,
    cb
  );
};

beowulfWallet.accountUpdate = function (
  { ownerPubkey, account, wif, fee = '0.01000 W' },
  cb
) {
  let jsonMetadata = '';
  let owner = {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [[ownerPubkey, 1]]
  };

  beowulfBroadcast.accountUpdate(
    wif,
    fee,
    account,
    owner,
    jsonMetadata,
    cb
  );
};


beowulfWallet.accountSupernodeVote = function (
  { wif, supernode, account, approve, votes, fee = '0.01000 W' },
  cb
) {
  beowulfBroadcast.accountSupernodeVote(
    wif,
    supernode,
    account,
    approve,
    votes,
    fee,
    cb
  );
};

beowulfWallet.supernodeUpdate = function (
  { wif, owner, block_signing_key, fee = '0.01000 W' },
  cb
) {
  beowulfBroadcast.supernodeUpdate(
    wif,
    owner,
    block_signing_key,
    fee,
    cb
  );
};

beowulfWallet.transferToVesting = function (
  { wif, from, to, amount, fee = '0.01000 W' },
  cb
) {
  beowulfBroadcast.transferToVesting(
    wif,
    from,
    to,
    amount,
    fee,
    cb
  );
};

beowulfWallet.withdrawVesting = function (
  { wif, account, vesting_shares, fee = '0.01000 W' },
  cb
) {
  beowulfBroadcast.withdrawVesting(
    wif,
    account,
    vesting_shares,
    fee,
    cb
  );
};

beowulfWallet.accountUpdateMul = function (
  { wallet, weight_threshold, account, wif, fee = '0.01000 W' },
  cb
) {
  if (weight_threshold <= 0) {
    throw new Error("weight threshold is wrong")
  } else if (weight_threshold === undefined) {
    weight_threshold = 1;
  };
  let jsonMetadata = '';
  let owner = {
    weight_threshold: weight_threshold,
    account_auths: wallet,
    key_auths: []
  };

  beowulfBroadcast.accountUpdate(
    wif,
    fee,
    account,
    owner,
    jsonMetadata,
    cb
  );
};


beowulfWallet.submitMulWallet = function (
  { wallet, weight_threshold, account, creator, creatorWif, fee = '0.01000 W' },
  cb
) {
  if (weight_threshold <= 0) {
    throw new Error("weight threshold is wrong")
  } else if (weight_threshold === undefined) {
    weight_threshold = 1;
  };
  let jsonMetadata = '';
  let owner = {
    weight_threshold: weight_threshold,
    account_auths: wallet,
    key_auths: []
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

function encryptWallet({ account, wallet }, password) {
  let salt = keygen.keyGen(16, true, true, true, true, false);
  let hashedPassword = hash.sha512(password + salt);
  let iv = hashedPassword.slice(32, 48);
  let newPassword = hashedPassword.slice(0, 32);

  let plainKeys = {
    checksum: hashedPassword.toString('hex'),
    keys: wallet
  };

  let strPlainKeys = JSON.stringify(plainKeys);
  let encryptedKeys = Aes.cryptoJsEncrypt(strPlainKeys, newPassword, iv);

  return {
    cipher_keys: encryptedKeys.toString('hex'),
    cipher_type: 'aes-256-cbc',
    salt: salt,
    name: account,
    // network, // mainnet | testnet | devnet
  };
}

function decryptWallet(encryptedWallet, password) {
  let encryptedKeys = encryptedWallet.cipher_keys;
  encryptedKeys = Buffer.from(encryptedKeys, 'hex');

  let salt = encryptedWallet.salt;
  let hashedPassword = hash.sha512(password + salt);
  let iv = hashedPassword.slice(32, 48);

  let newPassword = hashedPassword.slice(0, 32);
  let strPlainKeys = Aes.cryptoJsDecrypt(encryptedKeys, newPassword, iv);
  let plainKeys = JSON.parse(strPlainKeys);

  return {
    wallet: plainKeys.keys,
    // network: encryptedWallet.network, // mainnet | testnet | devnet
    account: encryptedWallet.name,
  };
}

exports = module.exports = beowulfWallet;
