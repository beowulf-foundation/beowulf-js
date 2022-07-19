import assert from 'assert';
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

describe('beowulf.test: api', () => {
    it('get accounts', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getAccounts(['kietwallet'],  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.equal(1, 1);
        } else {
            assert.equal(1, 0);
        }
    });

    it('get active supernodes', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getActiveSupernodes( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get version', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getVersion( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get block', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getBlock(1,  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get block header', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getBlockHeader(1,  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get config', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getConfig( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get dynamic global properties', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getDynamicGlobalProperties( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get supernode schedule', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodeSchedule( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get hardfork version', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getHardforkVersion( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get next scheduled hardfork', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getNextScheduledHardfork( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get key references', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getKeyReferences(["BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2"],  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('lookup account names', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupAccountNames(['kietwallet'],  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });

    it('lookup accounts', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupAccounts("k", 10,  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get account count', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getAccountCount( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get supernodes', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodes([0],  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get supernode by account', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodeByAccount("beowulf2",  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('lookup supernode accounts', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupSupernodeAccounts("a", 10,  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get supernode count', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodeCount( function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get owner history', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getOwnerHistory("kietwallet", function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get transaction hex', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getTransactionHex({"ref_block_num": 4002,"ref_block_prefix": 2487571678,"expiration": "2019-05-08T09:08:25","operations": [["account_create",{"fee":"0.01000 W","creator": "beowulf","new_account_name": "alice","owner": {"weight_threshold": 1,"account_auths": [],"key_auths": [["BEO8GVwodYr2tUzE6eUjJEEiDqUpzCmab6V3ZHyszdhidQUbLK25t",1]]},"json_metadata": ""}]],"extensions": [],"created_time": 1557306475,"signatures": ["1f620e37b168c7f7e1a9822c3614fd4b2eb6251c776a3c4aabce136a333ff031cc56ebcfffe21a8be9f50a207070248181262433c88017e874f70f4d95b982b54d"]},  function(result){
                resolve([result]);
            });            
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get transaction', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getTransaction('e9eccff00c51fb88c360ccf735992a0e5ced8a3e',  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get potential signatures', async () => {
        let [result] = await new Promise((resolve, reject) => {
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
            },  function(result){
                resolve([result])
            });
        });
        if (result !== undefined){
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get supernodes by vote', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodesByVote(null, 21,  function(result){
                resolve([result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    // it('verify authority', async () => {
    //     let [result] = await new Promise((resolve, reject) => {
    //         beowulf.api.verifyAuthority( {
    //             "ref_block_num": 35268,
    //             "ref_block_prefix": 2450539490,
    //             "expiration": "2019-09-03T11:46:10",
    //             "operations": [
    //                 [
    //                     "transfer",
    //                     {
    //                         "from": "kietwallet",
    //                         "to": "kietmul",
    //                         "amount": "10.00000 W",
    //                         "fee": "0.01000 W",
    //                         "memo": "hi"
    //                     }
    //                 ]
    //             ],
    //             "extensions": [],
    //             "created_time": 1567510574,
    //             "signatures": [
    //                 "202b3def508c05753cc1428c15a63ee266d50e32874e7799a27f5846683dff52ac6aa5c99b1baa6c0513fcf9c48d4d3bc3348f90fc13e3f0422edf8435a1def5ec"
    //             ]
    //          },  function(result){
    //             resolve([result]);
    //         });
    //     });
    //     if (result !== undefined) {
    //         assert.strictEqual(1, 1);
    //     } else {
    //         assert.strictEqual(1, 0);
    //     };
    // });
    it('get balance', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getBalance("beowulf",
            {
                "decimals": 5,
                "name": "W"
            },  function(result){
                resolve([result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('find smt tokens by name', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.findSmtTokensByName(["NLP"],  function(result){
                resolve([result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get required signatures', async () => {
        let [result] = await new Promise((resolve, reject) => {
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
           ],  function(result){
                resolve([result]);
            });
        });
        if (result !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get latest block info', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getLatestBlockInfo('s01',  function(result){
                resolve([result]);
            });
        });
        if ([result] !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get block info by block number', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getBlockInfo('s01', 123,  function(result){
                resolve([result]);
            });
        });
        if ([result] !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get transaction info by transaction id', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getTransactionInfo('s01', '065db549a00f43490781c83c75cfa7b36451dc61',  function(result){
                resolve([result]);
            });
        });
        if ([result] !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('get status of the BSC node', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.getStatus('s01',  function(result){
                resolve([result]);
            });
        });
        if ([result] !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('find one', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.findOne('s01', 'CONTRACT_NAME', 'TABLE_NAME', {},  function(result){
                resolve([result]);
            });
        });
        if ([result] !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
    it('find', async () => {
        let [result] = await new Promise((resolve, reject) => {
            beowulf.api.find('s01', 'CONTRACT_NAME','TABLE_NAME', {}, 20, 20, [], function(result){
                resolve([result]);
            });
        });
        if ([result] !== undefined) {
            assert.strictEqual(1, 1);
        } else {
            assert.strictEqual(1, 0);
        }
    });
});

