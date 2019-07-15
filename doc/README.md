# Documentation

- [Install](#install)
- [Browser](#browser)
- [Config](#config)
- [JSON-RPC](#jsonrpc)
- [Database API](#api)
    - [Blocks and transactions](#blocks-and-transactions)
    - [Globals](#globals)
    - [Keys](#keys)
    - [Accounts](#accounts)
    - [Authority / validation](#authority--validation)
    - [Supernodes](#supernodes)
- [Broadcast API](#broadcast-api)
- [Broadcast](#broadcast)
- [Auth](#auth)
- [Formatter](#formatter)

# Install
```
$ npm install beowulf-js --save
```

# Browser 
```html 
<script src="./beowulf.min.js"></script>
<script>
beowulfjs.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## Config
Default config should work with beowulfjs, however you can change it to work with your node as  
```js
beowulfjs.api.setOptions({ url: 'wss://ws.yourdomain.com' }); // assuming websocket is work at ws.yourdomain.com
beowulfjs.config.set('address_prefix','BEO');
beowulfjs.config.set('chain_id','430b37f23cf146d42f15376f341d7f8f5a1ad6f4e63affdeb5dc61d55d8c95a7');
```
### set
```js
beowulfjs.config.set('address_prefix','BEO');
```
### get
```js
beowulfjs.config.get('chain_id');
```

## JSON-RPC
Here is how to activate JSON-RPC transport:
```js
beowulfjs.api.setOptions({ url: 'https://testnet-bw.beowulfchain.com/rpc' });
```

# API

## Blocks and transactions

### Get Block Header
```js
beowulfjs.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Block
```js
beowulfjs.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```

## Globals

### Get Config
```js
beowulfjs.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```js
beowulfjs.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```js
beowulfjs.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Version
```js
beowulfjs.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Next Scheduled Hardfork
```js
beowulfjs.api.getNextScheduledHardfork(function(err, result) {
  console.log(err, result);
});
```

## Keys

### Get Key References
```js
beowulfjs.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```

## Accounts

### Get Accounts
```js
beowulfjs.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```
### Get Account References
```js
beowulfjs.api.getAccountReferences(accountId, function(err, result) {
  console.log(err, result);
});
```
### Lookup Account Names
```js
beowulfjs.api.lookupAccountNames(accountNames, function(err, result) {
  console.log(err, result);
});
```
### Lookup Accounts
```js
beowulfjs.api.lookupAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Account Count
```js
beowulfjs.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```js
beowulfjs.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```js
beowulfjs.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```js
beowulfjs.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```js
beowulfjs.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```js
beowulfjs.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {
  console.log(err, result);
});
```

## Votes

### Get Account Votes
```js
beowulfjs.api.getAccountVotes(voter, function(err, result) {
  console.log(err, result);
});
```


## Supernodes

### Get Supernodes
```js
beowulfjs.api.getSupernodes(supernodeIds, function(err, result) {
  console.log(err, result);
});
```
### Get Supernode By Account
```js
beowulfjs.api.getSupernodesByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Supernodes By Vote
```js
beowulfjs.api.getSupernodesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```
### Lookup Supernode Accounts
```js
beowulfjs.api.lookupSupernodeAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Supernode Count
```js
beowulfjs.api.getSupernodeCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Supernodes
```js
beowulfjs.api.getActiveSupernodes(function(err, result) {
  console.log(err, result);
});
```


## Broadcast API

### Broadcast Transaction Synchronous
```js
beowulfjs.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```js
beowulfjs.api.broadcastBlock(b, function(err, result) {
  console.log(err, result);
});
```

# Broadcast

### Account Create
```js
beowulfjs.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```js
beowulfjs.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Vesting
```js
beowulfjs.broadcast.transferToVesting(wif, from, to, amount, function(err, result) {
  console.log(err, result);
});
```
### Withdraw Vesting
```js
beowulfjs.broadcast.withdrawVesting(wif, account, vestingShares, function(err, result) {
  console.log(err, result);
});
```

# Auth

### Verify
```js
beowulfjs.auth.verify(name, password, auths);
```

### Generate Keys
```js
beowulfjs.auth.generateKeys(name, password, roles);
```

### Get Private Keys
```js
beowulfjs.auth.getPrivateKeys(name, password, roles);
```

### Is Wif
```js
beowulfjs.auth.isWif(privWif);
```

### To Wif
```js
beowulfjs.auth.toWif(name, password, role);
```

### Wif Is Valid
```js
beowulfjs.auth.wifIsValid(privWif, pubWif);
```

### Wif To Public
```js
beowulfjs.auth.wifToPublic(privWif);
```

### Sign Transaction
```js
beowulfjs.auth.signTransaction(trx, keys);
```

# Formatter

### Create Suggested Password
```js
var password = beowulfjs.formatter.createSuggestedPassword();
console.log(password);
// => 'GAz3GYFvvQvgm7t2fQmwMDuXEzDqTzn9'
```

# Utils

### Validate Username
```js
var isValidUsername = beowulfjs.utils.validateAccountName('test1234');
console.log(isValidUsername);
// => 'null'

var isValidUsername = beowulfjs.utils.validateAccountName('a1');
console.log(isValidUsername);
// => 'Account name should be longer.'
```
