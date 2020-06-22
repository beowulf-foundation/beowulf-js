# Official JS BEOWULF Library

`beowulf-js` is the official Beowulf library for Javascript.  

## Main Functions Supported
1. CHAIN  
- get_block
- get_transaction
2. TRANSACTION  
- broadcast_transaction
- create transaction transfer
- create account

## Requirements
* `beowulf-js` requires npm 6.9.0 or higher. 

## Installation

```bash
npm i beowulf-js
```

## Example Usage
##### Get a block
```js
let blockNum = 232967;
beowulfjs.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```

##### Get Transaction
```js
let trxId = '60207c8e17f47bf2790c927701792d95d42e3f46';
beowulfjs.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```

##### Generate a wallet

API
```js
let wallet = beowulfjs.wallet.generateWallet();
```

Response Example
```js
{
  "owner": "5JY3sGqkfoN7U6kee9HibnG6etQgLNCMqjhPqsVDRXRjGwFNKeA",
  "ownerPubkey": "BEO7GXMArUCaxq1kPNP4JkcnshVDyfpVTfEwL8e8FVAN6BgpU8Y1k"
}
```

##### Submit Wallet to Blockchain
API
```js
beowulfjs.wallet.submitWallet({
  ownerPubkey,
  account,
  creator,
  creatorWif,
  fee
}, (err, result) => {

})
```

Params:
```js
ownerPubkey: string // wallet public key
account: string // Name of Wallet
fee: string // Fee for creating wallet
creator: string // Wallet Name of father of account
creatorWif: string // Private key of father account
```

```js
let ownerPubkey = 'BEO7GXMArUCaxq1kPNP4JkcnshVDyfpVTfEwL8e8FVAN6BgpU8Y1k';
let account = 'newwallet';
let creator = 'creatorwallet';
let creatorWif = '5Kxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // replace by your wif
let fee = '0.10000 W'; // Minimum account creation fee

beowulfjs.wallet.submitWallet({
  ownerPubkey,
  account,
  creator,
  creatorWif,
  fee
}, (err, result) => {

})
```

##### Submit Transaction
API
```js
beowulfjs.broadcast.transfer(wif, from, to, amount, fee, memo, (err, result) => {
  console.log(err, result);
});
```

Params:
```js
from: string // Wallet name of sender
wif: string // private key of sender
to: string // Wallet name of receiver
amount: string
memo: string
fee: string // Fee for submiting transaction
```

```js
let from = 'examplewallet';
let wif = '5Jxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // replace by your wif
let to = 'examplewallet2';
let amount = '4.00000 BWF';
let memo = 'example';
let fee = '0.01000 W'; // Minimum transfer fee

beowulfjs.broadcast.transfer(wif, from, to, amount, fee, memo, (err, result) => {
  console.log(err, result);
});
```
