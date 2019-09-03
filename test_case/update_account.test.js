var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

let wif = '5J9EPDvAHC5bxMz1mVygrrjQeiKW4ayX8HisD7eZ9DW7Qhc8hXR';

describe('beowulf.test: operaton update_account ', () => {
    it('key is wrong', async () => {
        let er = ("Missing Owner Authority ${id}");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.accountUpdate({
                ownerPubkey: wallet.ownerPubkey, 
                account: "kiettest",
                wif: wif,
                fee : "1.00000 W"
                }, function(err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('account is not exist', async () => {
        let er = ("is_valid_account_name( name ): Account name ${n} is invalid");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.accountUpdate({
                ownerPubkey: wallet.ownerPubkey, 
                account: "kiet$$$$$$$$$",
                wif: wif,
                fee : "1.00000 W"
                }, function(err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('fee is wrong', async () => {
        let er = ("is_asset_type( fee, WD_SYMBOL ): Fee must be ${a}");
        let wallet = beowulf.wallet.generateWallet();
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.accountUpdate({
                ownerPubkey: wallet.ownerPubkey, 
                account: "kiettest",
                wif: wif,
                fee : "1.00000 Wf"
                }, function(err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
});