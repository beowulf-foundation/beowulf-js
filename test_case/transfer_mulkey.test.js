var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

// let wif = ["5JR1P4Mh9xBSRFHS77Zds45PCRzFAXLDJDnqhPq6G562GyjxpMd", "5HqC1xXfAMeV5zxaqdx5xramcCipEdgPwVAZ4P4n9pRXCSoLQh8"];
// let wif = ["5Ja13C1evjcuXZPR1M8asrFaznS7xtVXWW5wZFKDbTi74mtVaHy", "5JdX2usnDWfeLrmTPAcFrVmrxkL9in9EoWTV5KBmRf4zoLtWDwB"];
let wif_residual = ["5JR1P4Mh9xBSRFHS77Zds45PCRzFAXLDJDnqhPq6G562GyjxpMd", "5HqC1xXfAMeV5zxaqdx5xramcCipEdgPwVAZ4P4n9pRXCSoLQh8", "5Ja13C1evjcuXZPR1M8asrFaznS7xtVXWW5wZFKDbTi74mtVaHy"];
let wif_miss = ["5JR1P4Mh9xBSRFHS77Zds45PCRzFAXLDJDnqhPq6G562GyjxpMd"];

describe('beowulf.test: operaton create_account ', () => {
    it('Not enough key', async () => {
        let er = ("Missing Owner Authority ${id}");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif_miss , "kietmul", "kiet290805", "1.00000 W", "0.01000 W", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
    it('residual key', async () => {
        let er = ("Unnecessary signature(s) detected");
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.broadcast.transfer(wif_residual , "kietmul", "kiet290805", "1.00000 W", "0.01000 W", "ok", function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(er, err.cause.data.stack[0].format);
    });
});