var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

let wif = '5J9EPDvAHC5bxMz1mVygrrjQeiKW4ayX8HisD7eZ9DW7Qhc8hXR';

describe('beowulf.test: operaton transfer to vesting', () => {
    it('name transfer is wrong', async () => {
        let er = ("unknown key");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transferToVesting(wif , "kietwalet", "kiet290805", "1.00000 BWF", "0.01000 W", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
    it('name reveiver is wrong', async () => {
        let er = ("unknown key");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transferToVesting(wif , "kietwallet", "kieterr", "1.00000 BWF", "0.01000 W", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.message);
    });
    it('fee is wrong', async () => {
        let er = ("is_asset_type( fee, WD_SYMBOL ): Fee must be ${a}");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transferToVesting(wif , "kietwallet", "kiet290805", "1.00000 BWF", "0.01000 R", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('amount asset is wrong', async () => {
        let er = ("amount.symbol == BEOWULF_SYMBOL: Amount must be ${a}");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transferToVesting(wif , "kietwallet", "kiet290805", "1.00000 R", "0.01000 W", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });   
});
