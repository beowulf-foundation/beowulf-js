var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

let wif = '5J9EPDvAHC5bxMz1mVygrrjQeiKW4ayX8HisD7eZ9DW7Qhc8hXR';

describe('beowulf.test: operaton create_account_mulkey ', () => {
    it('name createor is wrong', async () => {
        let er = ("false: Owner authority change would render account irrecoverable.");
        let wallet = beowulf.wallet.generateMulWallet(4);
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.wallet.submitMulWallet({
                wallet: wallet,
                account: "kiet29080",
                creator: 'kietwallet',
                creatorWif: wif,
                fee: "1.00000 W",
                weight_threshold: 5
            }, function (err, result) {
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
});