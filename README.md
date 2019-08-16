#beowulf-javascript

beowulf-javascript is library javascript client for Beowulf blockchain.  

## Full Documentation
- Please have a look at the [Wiki](https://github.com/beowulf-foundation/beowulf-javascript/wiki) for full documentation, examples, operational details and other information.  
- The api documentation can be found in the official beowulf developers portal: https://beowulfchain.com/developer-guide/walletsdk  

## Main Functions Supported
1. CHAIN  
- get_block
- get_transaction
2. TRANSACTION  
- broadcast_transaction
- create transaction transfer
- create account

#### Requirements
* npm version 6.9.0


#### Install

```bash
npm i beowulf-js
```

#### Configuration

```javascript
const beowulfjs = require('beowulf-js');
let url = beowulfjs.config.get('url');
beowulfjs.api.setOptions({ url: url, useAppbaseApi: true });
```

#### Example Usage
##### Get a block
```js
let blockNum = xxxxxx;
beowulfjs.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```

##### Get Transaction
```js
let trxId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
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
  "owner": "5Jxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "ownerPubkey": "BEOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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
ownerPubkey: wallet public key
account: string // Name of Wallet
fee: string // Fee for creating wallet
creator: string // Wallet Name of father of account
creatorWif: string // Private key of father account
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