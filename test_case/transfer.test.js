var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

let wif = '5J9EPDvAHC5bxMz1mVygrrjQeiKW4ayX8HisD7eZ9DW7Qhc8hXR';

describe('beowulf.test: operaton create_account ', () => {
    it('name transfer is wrong', async () => {
        let er = ("unknown key");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif , "kietwalet", "kiet290805", "1.00000 W", "0.01000 W", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
    it('name reveiver is wrong', async () => {
        let er = ("unknown key");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif , "kietwallet", "kieterr", "1.00000 W", "0.01000 W", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
    it('fee asset is wrong', async () => {
        let er = ("is_asset_type( fee, WD_SYMBOL ): Transaction fee must be ${a}");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif , "kietwallet", "kiet290805", "1.00000 BWF", "0.01000 R", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('amount asset is wrong', async () => {
        let er = ("_token != nullptr: Don't exist token with name: ${a}");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif , "kietwallet", "kiet290805", "1.00000 R", "0.01000 W", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('amount (BWF) > balance', async () => {
        let er = ("_db.get_balance(from_account, symbol) >= new_amount: Account does not have sufficient funds for transfer.");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif , "kietwallet", "kiet290805", "1000000000.00000 BWF", "0.01000 W", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('amount (W) > balance', async () => {
        let er = ("from_account.wd_balance >= totalAmount: Account does not have sufficient funds for transfer.");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif , "kietwallet", "kiet290805", "1000000000.00000 W", "0.01000 W", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });        
});
