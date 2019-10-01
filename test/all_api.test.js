var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

describe('beowulf.test: api', () => {
    it('get accounts', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getAccounts(['kietwallet'],  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });

    it('get active supernodes', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getActiveSupernodes( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get version', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getVersion( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get block', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getBlock(1,  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get block header', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getBlockHeader(1,  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get config', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getConfig( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get dynamic global properties', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getDynamicGlobalProperties( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get supernode schedule', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodeSchedule( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get hardfork version', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getHardforkVersion( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get next scheduled hardfork', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getNextScheduledHardfork( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get key references', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getKeyReferences(["BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2"],  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('lookup account names', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupAccountNames(['kietwallet'],  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });

    it('lookup accounts', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupAccounts("k", 10,  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get account count', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getAccountCount( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get supernodes', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodes([0],  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get supernode by account', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodeByAccount("beowulf2",  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('lookup supernode accounts', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupSupernodeAccounts("a", 10,  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get supernode count', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodeCount( function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get owner history', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getOwnerHistory("kietwallet", function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get transaction hex', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getTransactionHex({"ref_block_num": 4002,"ref_block_prefix": 2487571678,"expiration": "2019-05-08T09:08:25","operations": [["account_create",{"fee":"0.01000 W","creator": "beowulf","new_account_name": "alice","owner": {"weight_threshold": 1,"account_auths": [],"key_auths": [["BEO8GVwodYr2tUzE6eUjJEEiDqUpzCmab6V3ZHyszdhidQUbLK25t",1]]},"json_metadata": ""}]],"extensions": [],"created_time": 1557306475,"signatures": ["1f620e37b168c7f7e1a9822c3614fd4b2eb6251c776a3c4aabce136a333ff031cc56ebcfffe21a8be9f50a207070248181262433c88017e874f70f4d95b982b54d"]},  function(err, result){
                resolve([err, result]);
            });            
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get transaction', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getTransaction('ea6a55d87e4d8cb1a529135d9ec87b7a2920065e',  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get potential signatures', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getPotentialSignatures({
                "ref_block_num": 35268,
                "ref_block_prefix": 2450539490,
                "expiration": "2019-09-03T11:46:10",
                "operations": [
                    [
                        "transfer",
                        {
                            "from": "kietwallet",
                            "to": "kietmul",
                            "amount": "10.00000 W",
                            "fee": "0.01000 W",
                            "memo": "hi"
                        }
                    ]
                ],
                "extensions": [],
                "signatures": [
                    "202b3def508c05753cc1428c15a63ee266d50e32874e7799a27f5846683dff52ac6aa5c99b1baa6c0513fcf9c48d4d3bc3348f90fc13e3f0422edf8435a1def5ec"
                ]
            },  function(err, result){
                resolve([err, result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get supernodes by vote', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodesByVote(null, 21,  function(err, result){
                resolve([err, result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('verify authority', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.verifyAuthority( {
                "ref_block_num": 35268,
                "ref_block_prefix": 2450539490,
                "expiration": "2019-09-03T11:46:10",
                "operations": [
                    [
                        "transfer",
                        {
                            "from": "kietwallet",
                            "to": "kietmul",
                            "amount": "10.00000 W",
                            "fee": "0.01000 W",
                            "memo": "hi"
                        }
                    ]
                ],
                "extensions": [],
                "created_time": 1567510574,
                "signatures": [
                    "202b3def508c05753cc1428c15a63ee266d50e32874e7799a27f5846683dff52ac6aa5c99b1baa6c0513fcf9c48d4d3bc3348f90fc13e3f0422edf8435a1def5ec"
                ]
             },  function(err, result){
                resolve([err, result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get balance', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getBalance("beowulf",
            {
                "decimals": 5,
                "name": "W"
            },  function(err, result){
                resolve([err, result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('find smt tokens by name', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.findSmtTokensByName(["NLP"],  function(err, result){
                resolve([err, result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
    it('get required signatures', async () => {
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getRequiredSignatures( {
                "ref_block_num": 35268,
           "ref_block_prefix": 2450539490,
           "expiration": "2019-09-03T11:46:10",
           "operations": [
               [
                   "transfer",
                   {
                       "from": "kietwallet",
                       "to": "kietmul",
                       "amount": "10.00000 W",
                       "fee": "0.01000 W",
                       "memo": "hi"
                   }
               ]
           ],
           "extensions": [],
           "created_time": 1567510574,
           "signatures": [
               "202b3def508c05753cc1428c15a63ee266d50e32874e7799a27f5846683dff52ac6aa5c99b1baa6c0513fcf9c48d4d3bc3348f90fc13e3f0422edf8435a1def5ec"
           ]
           },
           [
               "BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2"
           ],  function(err, result){
                resolve([err, result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        };
    });
});
