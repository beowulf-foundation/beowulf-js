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
            beowulf.api.getTransactionHex({  "ref_block_num": 17251,
            "ref_block_prefix": 2242256486,
            "expiration": "2019-09-19T07:00:40",
            "operations": [
                [
                    "transfer",
                    {
                        "from": "kietwallet",
                        "to": "haimaster",
                        "amount": "1.00000 BWF",
                        "fee": "0.01000 W",
                        "memo": "hi"
                    }
                ]
            ],
            "extensions": [],
            "signatures": [
                "1f5d670e94f37a45c06f9a6d72da6356ff753238699e78713d654b37f37b214243250053f9a588715f063f4e1906c7e3c9ad0896c0130c70c5479172fd34c35b43"
            ]   },  function(err, result){
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
            beowulf.api.getTransaction('e6bb0068ea4fa58cf857eac5b9cb26ad3e305320',  function(err, result){
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
                "ref_block_num": 17251,
                "ref_block_prefix": 2242256486,
                "expiration": "2019-09-19T07:00:40",
                "operations": [
                    [
                        "transfer",
                        {
                            "from": "kietwallet",
                            "to": "haimaster",
                            "amount": "1.00000 BWF",
                            "fee": "0.01000 W",
                            "memo": "hi"
                        }
                    ]
                ],
                "extensions": [],
                "signatures": [
                    "1f5d670e94f37a45c06f9a6d72da6356ff753238699e78713d654b37f37b214243250053f9a588715f063f4e1906c7e3c9ad0896c0130c70c5479172fd34c35b43"
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
                "ref_block_num": 17251,
                "ref_block_prefix": 2242256486,
                "expiration": "2019-09-19T07:00:40",
                "operations": [
                    [
                        "transfer",
                        {
                            "from": "kietwallet",
                            "to": "haimaster",
                            "amount": "1.00000 BWF",
                            "fee": "0.01000 W",
                            "memo": "hi"
                        }
                    ]
                ],
                "extensions": [],
                "created_time": "1568875843",
                "signatures": [
                    "1f5d670e94f37a45c06f9a6d72da6356ff753238699e78713d654b37f37b214243250053f9a588715f063f4e1906c7e3c9ad0896c0130c70c5479172fd34c35b43"
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
                "ref_block_num": 17251,
                "ref_block_prefix": 2242256486,
                "expiration": "2019-09-19T07:00:40",
                "operations": [
                    [
                        "transfer",
                        {
                            "from": "kietwallet",
                            "to": "haimaster",
                            "amount": "1.00000 BWF",
                            "fee": "0.01000 W",
                            "memo": "hi"
                        }
                    ]
                ],
                "extensions": [],
                "signatures": [
                    "1f5d670e94f37a45c06f9a6d72da6356ff753238699e78713d654b37f37b214243250053f9a588715f063f4e1906c7e3c9ad0896c0130c70c5479172fd34c35b43"
                ]
                },
                [
                    "BEO7UNqe9mas3H24AJnXcqanW2qo1EF3Ei89r2GyNHuomgEes68un"
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
