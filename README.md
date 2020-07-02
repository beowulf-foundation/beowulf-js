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

## Configuration
#### For running on Mainnet
```js
const beowulfjs = require('beowulf-js');
beowulfjs.config.set('chain_id', 'e2222eeabcf9224632c82ec86ba3d77b359e3b5cb8a089ddd45090c31c98e3f2');
beowulfjs.config.set('uri', 'https://bw.beowulfchain.com');

#### For running on Testnet
```js
const beowulfjs = require('beowulf-js');
beowulfjs.config.set('chain_id', '430b37f23cf146d42f15376f341d7f8f5a1ad6f4e63affdeb5dc61d55d8c95a7');
beowulfjs.config.set('uri', 'https://testnet-bw.beowulfchain.com');
```

#### Init

```js
const beowulfjs = require('beowulf-js');
let url = beowulfjs.config.get('uri');
beowulfjs.api.setOptions({ url: url, useAppbaseApi: true });
```

## Example Usage
##### Get block
```js
let blockNum = 232967;
beowulfjs.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```

##### Get transaction
```js
let trxId = '60207c8e17f47bf2790c927701792d95d42e3f46';
beowulfjs.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```

##### Transfer native coin
###### Transfer BWF
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
###### Transfer W
```js
let from = 'examplewallet';
let wif = '5Jxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // replace by your wif
let to = 'examplewallet2';
let amount = '4.00000 W';
let memo = 'example';
let fee = '0.01000 W'; // Minimum transfer fee

beowulfjs.broadcast.transfer(wif, from, to, amount, fee, memo, (err, result) => {
  console.log(err, result);
});
```

##### Create wallet
```js
let wallet = beowulfjs.wallet.generateWallet();

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
