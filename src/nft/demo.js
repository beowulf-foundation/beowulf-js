// import beowulfNft from '../lib/';
// const wif = '5HujQZ8Fko8WU5V5puvdVDnTTd2VAXmHxZ8XMa64qCS3oBwuM2f'; // harriss
const wif = "5JHTf7dkpVxQNcb5NWc7URTrHDgAFEyxn2BEnMjuJ6fJrCAniCQ" // beowulf
// const wif = "5KY5Tqb6inoWG7xjtobL6DFnzWgHY555ZCP4Q3MV2zC5bkUmeR3" // beowulf

const beowulfNft = require('../../lib/nft');
const beowulfjs = require('../../lib');

const amount = 50;
const wallets = beowulfjs.wallet.generateMultipleWallet(amount);
for (let i = 120; i < 170; i++) {
  wallets[i - 120].name = "testtest" + i;
  wallets[i - 120].fee = "0.01000 W"  
}
beowulfjs.wallet.submitMultipleWallet(wallets, "beowulf", wif, (err, res) => {
  console.log(err, res);
});




// const wallets = beowulfjs.wallet.generateWallet();
// console.log(wallets)
// beowulfjs.wallet.submitWallet({
//   ownerPubkey: wallets.ownerPubkey,
//   account: "harriss",
//   creator: "beowulf",
//   creatorWif: wif,
//   fee: "0.01000 W"
// }, (err, result) => {
//   console.log(err, result);
// })




// beowulfjs.broadcast.smtCreate(wif, "beowulf", {decimals: 5, name: "TEST263"}, "cbay111958", "10.00000 W", 5, [], "1000000000", async (err, result) => {
//   console.log(err, result)
// });

// beowulfjs.api.getAccounts(['harriss'], function(err, result) {
//   console.log(err, result);
// });
// const wallet = beowulfjs.wallet.generateMultipleWallet(10);
// console.log(wallet)

// async function someFunc() {
//   const wallet = await beowulfjs.wallet.generateWallet();




// }
// someFunc();
// beowulfjs.broadcast.transfer(wif, "beowulf", "harriss", "0.10000 W", "0.01000 W", "Chuyen tien test operation", (err, result) => {
//   console.log(err, result);
// });

// beowulfjs.api.getConfig(function(err, result) {
//   console.log(err, result);
// });

// beowulfNft.create(wif, "harris", "s01", "GONFT", "GONFT", "10000000", "0.01000 W", null, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })


// beowulfNft.issue(wif, "beowulf", "s01", "GONFT", "beowulf", "user", "BEE", "0.01000 W", {}, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// const properties = {roomId: "001"};
// const properties2 = {Name: "Oriental Nha Trang Hotel: Stay on Jul 02, 2022", Image: "https://crystabaya-public-staging.s3.ap-southeast-1.amazonaws.com/arts/3.jpg", Externalurl: "https://crystabaya.com/property?id=29vXQMeu7tAacNZSvbF3UVSd6Fl", Description: "This Crystabaya NFT token represents one hotel stay at the Oriental Nha Trang Hotel for a stay on Jul 02, 2022.\\n\\nTo redeem this token, please do the following steps:\\n\\n1. Open an account on [Crystabaya.com](https://crystabaya.com)\\n\\n2. Get the wallet address for your account\\n\\n3. Deposit this token into the wallet address above\\n\\nThat's it. You will be able to check-in at the hotel for the stay on the date above.\\n\\nOnce redeemed, you will also receive a hand-drawing collectible artwork included in this NFT token as a souvenir. You can withdraw it back to your own wallet and/or trade it on OpenSea if desirable."}
// beowulfNft.issue(wif, "beowulf", "s01", "GONFT", "beowulf", "user", "BEE", "0.01000 W", properties, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// const nftReq = {ids: ["1"], symbol: "GONFT"};
// const nftReqs = [nftReq]
// beowulfNft.transfer(wif, "beowulf", "s01", "beowulf2", "0.01000 W", nftReqs, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// beowulfNft.updateMetadata(wif, "beowulf", "s01", "GONFT", {url: "https://url.com", image: "https://image.update.vn"}, "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// const accounts = ["beowulf"];
// beowulfNft.addProperty(wif, "beowulf", "s01", "GONFT", "name", "string", "0.01000 W", accounts, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// beowulfNft.updateName(wif, "beowulf", "s01", "GONFT", "HELLONFT", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// beowulfNft.updateOrgName(wif, "beowulf", "s01", "GONFT", "ORG", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// const accounts = ["beowulf2"];
// beowulfNft.addAuthorizedIssuingAccounts(wif, "beowulf", "s01", "GONFT", "0.01000 W", accounts, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })
// beowulfNft.removeAuthorizedIssuingAccounts(wif, "beowulf", "s01", "GONFT", "0.01000 W", accounts, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// beowulfNft.updatePropertyDefinition(wif, "beowulf", "s01", "GONFT", "roomName", "roomCode", "string", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// const property = {id: "2", properties: {name: "roomId", data: "206"}};
// const properties = [property];
// beowulfNft.setProperties(wif, "beowulf", "s01", "GONFT", "0.01000 W", properties, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// const nft = {symbol: "GONFT", ids: ["1"]};
// const nfts = [nft];
// beowulfNft.burn(wif, "beowulf", "s01", "0.01000 W", nfts, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });


// const instances1 = { symbol: "GONFT", to: "beowulf", toType: "user", feeSymbol: "BEE" };
// const instances2 = { symbol: "GONFT", to: "beowulf2", toType: "user", feeSymbol: "BEE" };
// const instances = [instances1, instances2];
// beowulfNft.issueMultiple(wif, "beowulf", "s01", "0.01000 W", instances, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

///---------------------------------------------------------------------------------------

// beowulfjs.nft.createNft(wif, "beowulf", "s01", "GONFT", "GONFT", "10000000", "0.01000 W", [], (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// beowulfjs.nft.issueNFT(wif, "beowulf", "s01", "GONFT", "beowulf", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// const properties = {roomId: "001"};
// const properties2 = {Name: "Oriental Nha Trang Hotel: Stay on Jul 02, 2022", Image: "https://crystabaya-public-staging.s3.ap-southeast-1.amazonaws.com/arts/3.jpg", Externalurl: "https://crystabaya.com/property?id=29vXQMeu7tAacNZSvbF3UVSd6Fl", Description: "This Crystabaya NFT token represents one hotel stay at the Oriental Nha Trang Hotel for a stay on Jul 02, 2022.\\n\\nTo redeem this token, please do the following steps:\\n\\n1. Open an account on [Crystabaya.com](https://crystabaya.com)\\n\\n2. Get the wallet address for your account\\n\\n3. Deposit this token into the wallet address above\\n\\nThat's it. You will be able to check-in at the hotel for the stay on the date above.\\n\\nOnce redeemed, you will also receive a hand-drawing collectible artwork included in this NFT token as a souvenir. You can withdraw it back to your own wallet and/or trade it on OpenSea if desirable."}
// beowulfjs.nft.issueWithProperties(wif, "beowulf", "s01", "GONFT", "beowulf", "0.01000 W", properties2, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// const nftReq = {ids: ["1"], symbol: "GONFT"};
// const nftReqs = [nftReq]
// beowulfjs.nft.transferNFT(wif, "beowulf", "s01", "beowulf2", "0.01000 W", nftReqs, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// beowulfjs.nft.updateMetadata(wif, "beowulf", "s01", "GONFT", "https://url.com", "https://image.update.vn", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// const accounts = ["beowulf"];
// beowulfjs.nft.addProperty(wif, "beowulf", "s01", "GONFT", "name", "string", "0.01000 W", accounts, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// beowulfjs.nft.updateName(wif, "beowulf", "s01", "GONFT", "HELLONFT", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// beowulfjs.nft.updateOrgName(wif, "beowulf", "s01", "GONFT", "ORG", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// const accounts = ["beowulf2"];
// // beowulfjs.nft.addAuthorizedIssuingAccounts(wif, "beowulf", "s01", "GONFT", "0.01000 W", accounts, (err, result) => {
// //   console.log(err, JSON.stringify(result));
// // })
// beowulfjs.nft.removeAuthorizedIssuingAccounts(wif, "beowulf", "s01", "GONFT", "0.01000 W", accounts, (err, result) => {
//   console.log(err, JSON.stringify(result));
// })

// beowulfjs.nft.updatePropertyDefinition(wif, "beowulf", "s01", "GONFT", "roomName", "roomCode", "string", "0.01000 W", (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// const property = {id: "2", properties: {name: "roomId", data: "206"}};
// const properties = [property];
// beowulfjs.nft.setProperties(wif, "beowulf", "s01", "GONFT", "0.01000 W", properties, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// const nft = {symbol: "GONFT", ids: ["1"]};
// const nfts = [nft];
// beowulfjs.nft.burnNft(wif, "beowulf", "s01", "0.01000 W", nfts, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });


// const instances1 = { symbol: "GONFT", to: "beowulf", toType: "user", feeSymbol: "BEE" };
// const instances2 = { symbol: "GONFT", to: "beowulf2", toType: "user", feeSymbol: "BEE" };
// const instances = [instances1, instances2];
// beowulfjs.nft.multipleIssueNFT(wif, "beowulf", "s01", "0.01000 W", instances, (err, result) => {
//   console.log(err, JSON.stringify(result));
// });

// beowulfjs.api.getLatestBlockInfo('s01', function (err, res) {
//   console.log(err, res)
// });

// beowulfjs.api.getBlockInfo('s01', 123, function (err, res) {
//   console.log(err, res)
// })

// beowulfjs.api.getTransactionInfo('s01', 'd76e7dcb238a389ad52138c531d90cf7b93ba9e8', function(err, result) {
//   console.log(err, result);
// });

// beowulfjs.api.getStatus('s01', function(err, result) {
//   console.log(err, result);
// })

// beowulfjs.api.findOne('s01', 'nft', 'nfts', {}, function (err, result) {
//   console.log(err, result);
// });


// beowulfjs.api.find('s01', 'nft', 'nfts', {}, 100, 0, [], function (err, result) {
//   console.log(err, result);
// });



// let wallet = beowulfjs.wallet.generateWallet();
// console.log(wallet)
// let ownerPubkey = wallet.ownerPubkey;
// let account = 'newwalley';
// let creator = 'beowulf';
// let creatorWif = wif;
// let fee = '0.01000 W';

// beowulfjs.wallet.submitWallet({
//   ownerPubkey,
//   account,
//   creator,
//   creatorWif,
//   fee
// }, (err, result) => {
//   console.log(err, result);
// })

// console.log(beowulfjs.auth.wifToPublic(wif))

// beowulfjs.api.getAccounts(["beowulf", "beowulfsdfjhdskl"], function(err, result) {
//   console.log(result[0].owner);
// });-
