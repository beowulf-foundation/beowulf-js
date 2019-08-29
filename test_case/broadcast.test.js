var beowulf = require('../lib')
let url = beowulf.config.get('uri');
beowulf.api.setOptions({ url: url,useAppbaseApi: true });

let wif = '5J9EPDvAHC5bxMz1mVygrrjQeiKW4ayX8HisD7eZ9DW7Qhc8hXR';
// let wif = '5KB5QQbrvRHN6iWZWXHrwGoGzDJRbvhTeiKLq4KvdSb9Q9L73EW';

let wallet = beowulf.wallet.generateWallet();
console.log(wallet.owner)
beowulf.wallet.submitWallet({
    ownerPubkey: wallet.ownerPubkey, 
    account: "kiet290808",
    creator: 'kietwalet',
    creatorWif: wif,
    fee : "1.00000 W"
    }, function(err, result) {
    console.log(err.cause.data.message, result);  
});

// beowulf.broadcast.transfer(wif , "kietwallet", "kiet290805", "1.00000 W", "0.01000 W", "ok", function(err, result){
//     console.log(err, result);
// });

// beowulf.wallet.accountUpdate({
//     ownerPubkey: wallet.ownerPubkey, 
//     account: "kiet290805",
//     wif: wif,
//     fee : "1.00000 W"
//     }, function(err, result) {
//     console.log(err, result);
  
// });

// beowulf.broadcast.transferToVesting(wif, "kietwallet", "kietwallet", "10.00000 BWF", "0.01000 W", function(err, result){
//     console.log(err, result);
// });


// beowulf.broadcast.withdrawVesting(wif, "kietwallet", "10.00000 M", "0.01000 W", function(err, result){
//     console.log(err, result);
// });

// null { id: 'e5de09f0d6507985d8297ca8f53ddea017afe6be',
//   block_num: 274242,
//   trx_num: 0,
//   expired: false,
//   created_time: '1567066837',
//   ref_block_num: 12079,
//   ref_block_prefix: 3019013992,
//   expiration: '2019-08-29T08:30:35',
//   operations: [ [ 'withdraw_vesting', [Object] ] ],
//   extensions: [],
//   signatures:
//    [ '201c7a227e75e64a4f36a778f97c0fb0428e5f0a0b755ccff384380d9369a4132a18af185a3fc6e2ea7c9a5cfb9d068d31614dbc7fff062c630545ba71d88afd93' ] }


// beowulf.broadcast.accountSupernodeVote(wif, "kiet290806", "kietwallet","true", "5", "0.01000 W", function(err, result){
//     console.log(err, result);
// });