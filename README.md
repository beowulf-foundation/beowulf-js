# beowulf-js

beowulf-js is the official Beowulf library for Javascript.  

## Full Documentation
- Please have a look at the [Wiki](https://github.com/beowulf-foundation/beowulf-javascript/wiki) for full documentation, examples, operational details and other information.  
- The api documentation can be found in the official beowulf developers portal: https://beowulfchain.com/developer-guide/javascript  

## Main Functions Supported
1. CHAIN  
- get_block
- get_transaction
2. TRANSACTION  
- broadcast_transaction
- create transaction transfer
- create account

#### Requirements
* npm minimum version 6.9.0


#### Install

```bash
npm i beowulf-js
```

#### Configuration

```js
const beowulfjs = require('beowulf-js');
let url = beowulfjs.config.get('uri');
beowulfjs.api.setOptions({ url: url, useAppbaseApi: true });
```

#### Example Usage
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
let fee = '0.00100 W';

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
let fee = '0.00001 W';

beowulfjs.broadcast.transfer(wif, from, to, amount, fee, memo, (err, result) => {
  console.log(err, result);
});
```
