var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

let wif = '5J9EPDvAHC5bxMz1mVygrrjQeiKW4ayX8HisD7eZ9DW7Qhc8hXR';

describe('beowulf.test: operaton create_account ', () => {
    it('name creator is wrong', async () => {
        let er = ("unknown key");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.submitWallet({
                ownerPubkey: wallet.ownerPubkey,
                account: "kiet29080",
                creator: 'kietwalet',
                creatorWif: wif,
                fee: "1.00000 W"
            }, function (err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
    it('new account too long', async () => {
        let er = ("irrelevant signature included");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.submitWallet({
                ownerPubkey: wallet.ownerPubkey,
                account: "thisaccountnameistooloooooooong",
                creator: 'kietwallet',
                creatorWif: wif,
                fee: "1.00000 W"
            }, function (err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
    it('new account was exist', async () => {
        let er = ("could not insert object, most likely a uniqueness constraint was violated");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.submitWallet({
                ownerPubkey: wallet.ownerPubkey,
                account: "kiet290809",
                creator: 'kietwallet',
                creatorWif: wif,
                fee: "1.00000 W"
            }, function (err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
    it('name account start with char', async () => {
        let er = ("is_valid_account_name( name ): Account name ${n} is invalid");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.submitWallet({
                ownerPubkey: wallet.ownerPubkey,
                account: "------kiet290809",
                creator: 'kietwallet',
                creatorWif: wif,
                fee: "1.00000 W"
            }, function (err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('fee is wrong', async () => {
        let er = ("Assert Exception");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.submitWallet({
                ownerPubkey: wallet.ownerPubkey,
                account: "kiet290809",
                creator: 'kietwallet',
                creatorWif: wif,
                fee: "1.00000 b"
            }, function (err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
});
