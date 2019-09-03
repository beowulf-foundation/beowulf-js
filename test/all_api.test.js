var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')

describe('beowulf.test: api', () => {
    it('get account', async () => {
        let re = [{
            "id": 9105,
            "name": "kietwallet",
            "owner": {
                "weight_threshold": 0,
                "account_auths": [],
                "key_auths": [
                    [
                        "BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2",
                        1
                    ]
                ]
            },
            "json_metadata": "{}",
            "last_owner_update": "1970-01-01T00:00:00",
            "created": "2019-08-14T08:22:00",
            "balance": "1123.00000 BWF",
            "wd_balance": "38.73000 W",
            "vesting_shares": "30.00000 M",
            "vesting_withdraw_rate": "0.38461 M",
            "next_vesting_withdrawal": "2019-09-05T08:20:35",
            "withdrawn": 0,
            "to_withdraw": 1000000,
            "supernodes_voted_for": 0,
            "token_list": [],
            "vesting_balance": "0.00000 BWF",
            "supernode_votes": []
        }];
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getAccounts(['kietwallet'],  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    // it('get active supernodes', async () => {
    //     let re = [
    //         "beowulf12",
    //         "beowulf13",
    //         "beowulf3",
    //         "beowulf23",
    //         "beowulf24",
    //         "beowulf27",
    //         "beowulf8",
    //         "beowulf14",
    //         "beowulf30",
    //         "beowulf7",
    //         "beowulf17",
    //         "beowulf10",
    //         "beowulf15",
    //         "beowulf16",
    //         "beowulf5",
    //         "beowulf25",
    //         "beowulf",
    //         "beowulf4",
    //         "beowulf6",
    //         "beowulf20",
    //         "beowulf9"
    //     ];
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getActiveSupernodes( function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    it('get version', async () => {
        let re = {
            "blockchain_version": "0.0.0",
            "beowulf_revision": "975b9946c98146e76fd13a7db5d1a86b2f795590",
            "fc_revision": "975b9946c98146e76fd13a7db5d1a86b2f795590"
        };
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getVersion( function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get block', async () => {
        let re = {
            "previous": "0000000000000000000000000000000000000000",
            "timestamp": "2019-08-12T08:05:55",
            "supernode": "beowulf",
            "transaction_merkle_root": "0000000000000000000000000000000000000000",
            "block_reward": "158.54895 M",
            "extensions": [],
            "supernode_signature": "201ffdc70ac0b04b216b5da0d6ec30dd6e109319f27292a34e2921f70d49af425d31e9d4b7e2ab0609139ae2fbfee464f288e1ddf7662ec5cae16bfcaa2d041753",
            "transactions": [],
            "block_id": "00000001f1b803f5aeb69b7f0ec88af0710ba1f1",
            "signing_key": "BEO5r5ceRhRFe4j1BCpp4eKwLkB7MRo41yrGzpjHakTB4KDMicxnC",
            "transaction_ids": []
        };
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getBlock(1,  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get block header', async () => {
        let re = {
            "previous": "0000000000000000000000000000000000000000",
            "timestamp": "2019-08-12T08:05:55",
            "supernode": "beowulf",
            "transaction_merkle_root": "0000000000000000000000000000000000000000",
            "block_reward": "158.54895 M",
            "extensions": []
        };
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getBlockHeader(1,  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get config', async () => {
        let re = {
            "IS_TEST_NET": false,
            "SMT_TOKEN_CREATION_FEE": 100000000,
            "WD_SYMBOL": {
                "decimals": 5,
                "name": "W"
            },
            "BEOWULF_100_PERCENT": 10000,
            "BEOWULF_1_PERCENT": 100,
            "BEOWULF_ADDRESS_PREFIX": "BEO",
            "BEOWULF_BLOCKCHAIN_HARDFORK_VERSION": "0.0.0",
            "BEOWULF_BLOCKCHAIN_VERSION": "0.0.0",
            "BEOWULF_BLOCK_INTERVAL": 5,
            "BEOWULF_BLOCKS_PER_DAY": 17280,
            "BEOWULF_BLOCKS_PER_YEAR": 6307200,
            "BEOWULF_CHAIN_ID": "430b37f23cf146d42f15376f341d7f8f5a1ad6f4e63affdeb5dc61d55d8c95a7",
            "BEOWULF_GENESIS_TIME": "2016-03-24T16:00:00",
            "BEOWULF_HARDFORK_REQUIRED_SUPERNODES": 15,
            "BEOWULF_INFLATION_NARROWING_PERIOD": 1500000,
            "BEOWULF_INFLATION_RATE_START_PERCENT": 1000,
            "BEOWULF_INFLATION_RATE_STOP_PERCENT": 95,
            "BEOWULF_INIT_MINER_NAME": "beowulf",
            "BEOWULF_INIT_PUBLIC_KEY_STR": "BEO5r5ceRhRFe4j1BCpp4eKwLkB7MRo41yrGzpjHakTB4KDMicxnC",
            "BEOWULF_INIT_SUPPLY": 1000000000000000,
            "WD_INIT_SUPPLY": 1000000000000000,
            "BEOWULF_IRREVERSIBLE_THRESHOLD": 7500,
            "BEOWULF_MAX_ACCOUNT_NAME_LENGTH": 16,
            "BEOWULF_MAX_ACCOUNT_SUPERNODE_VOTES": 30,
            "BEOWULF_MAX_AUTHORITY_MEMBERSHIP": 40,
            "BEOWULF_SOFT_MAX_BLOCK_SIZE": 5242880,
            "BEOWULF_MAX_MEMO_SIZE": 128,
            "BEOWULF_MAX_SUPERNODES": 21,
            "BEOWULF_MAX_PERMANENT_SUPERNODES_HF0": 7,
            "BEOWULF_MAX_RUNNER_SUPERNODES_HF0": 6,
            "BEOWULF_MAX_SHARE_SUPPLY": 1000000000000000000,
            "BEOWULF_MAX_SIG_CHECK_DEPTH": 2,
            "BEOWULF_MAX_SIG_CHECK_ACCOUNTS": 125,
            "BEOWULF_MAX_TIME_UNTIL_EXPIRATION": 3600,
            "BEOWULF_MAX_TRANSACTION_SIZE": 1024,
            "BEOWULF_MAX_UNDO_HISTORY": 10000,
            "BEOWULF_MAX_VOTED_SUPERNODES_HF0": 8,
            "BEOWULF_MIN_SUPERNODE_FUND": 300000000000,
            "BEOWULF_MIN_TRANSACTION_FEE": 1000,
            "BEOWULF_MIN_ACCOUNT_CREATION_FEE": 100000,
            "BEOWULF_MIN_ACCOUNT_NAME_LENGTH": 3,
            "BEOWULF_MIN_BLOCK_SIZE": 115,
            "BEOWULF_NULL_ACCOUNT": "null",
            "BEOWULF_NUM_INIT_MINERS": 1,
            "BEOWULF_OWNER_AUTH_HISTORY_TRACKING_START_BLOCK_NUM": 1,
            "BEOWULF_OWNER_UPDATE_LIMIT": 3600000000,
            "BEOWULF_VESTING_WITHDRAW_INTERVALS": 26,
            "BEOWULF_VESTING_WITHDRAW_INTERVAL_SECONDS": 604800,
            "BEOWULF_SYMBOL": {
                "decimals": 5,
                "name": "BWF"
            },
            "VESTS_SYMBOL": {
                "decimals": 5,
                "name": "M"
            },
            "BEOWULF_VIRTUAL_SCHEDULE_LAP_LENGTH2": "340282366920938463463374607431768211455",
            "BEOWULF_1_BEOWULF": 100000,
            "BEOWULF_1_VESTS": 100000,
            "BEOWULF_MAX_TOKEN_PER_ACCOUNT": 100000,
            "BEOWULF_MIN_PERMANENT_SUPERNODE_FUND": 3000000000000,
            "BEOWULF_MAX_TOKEN_NAME_LENGTH": 9,
            "BEOWULF_MIN_TOKEN_NAME_LENGTH": 1,
            "BEOWULF_SYMBOL_BEOWULF": "BWF",
            "BEOWULF_SYMBOL_WD": "W",
            "BEOWULF_SYMBOL_VESTS": "M",
            "BEOWULF_BLOCK_REWARD_GAP": 1000,
            "BEOWULF_ITEM_QUEUE_SIZE": 4096
        };
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getConfig( function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    // it('get dynamic global properties', async () => {
    //     let re = {
    //         "head_block_number": 361918,
    //         "head_block_id": "000585beecad84ac8d67ea1c3beb3b04df04b511",
    //         "time": "2019-09-03T10:08:25",
    //         "current_supernode": "beowulf16",
    //         "current_supply": "10057546668.65738 BWF",
    //         "current_wd_supply": "10000000000.00000 W",
    //         "total_vesting_fund_beowulf": "444546724.65738 BWF",
    //         "total_vesting_shares": "444546724.65738 M",
    //         "current_aslot": 21734021,
    //         "recent_slots_filled": "340282366920938463463374607431768211455",
    //         "participation_count": 128,
    //         "last_irreversible_block_num": 361899
    //     };
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getDynamicGlobalProperties( function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get supernode schedule', async () => {
    //     let re = {
    //         "id": 0,
    //         "current_virtual_time": "0",
    //         "next_shuffle_block_num": 361956,
    //         "current_shuffled_supernodes": [
    //             "beowulf24",
    //             "beowulf15",
    //             "beowulf18",
    //             "beowulf17",
    //             "beowulf5",
    //             "beowulf4",
    //             "beowulf9",
    //             "beowulf10",
    //             "beowulf30",
    //             "beowulf13",
    //             "beowulf",
    //             "beowulf8",
    //             "beowulf14",
    //             "beowulf21",
    //             "beowulf25",
    //             "beowulf20",
    //             "beowulf19",
    //             "beowulf3",
    //             "beowulf7",
    //             "beowulf16",
    //             "beowulf6"
    //         ],
    //         "num_scheduled_supernodes": 21,
    //         "elected_weight": 1,
    //         "timeshare_weight": 5,
    //         "permanent_weight": 1,
    //         "supernode_pay_normalization_factor": 73,
    //         "majority_version": "0.0.0",
    //         "max_voted_supernodes": 8,
    //         "max_permanent_supernodes": 7,
    //         "max_runner_supernodes": 6,
    //         "hardfork_required_supernodes": 15
    //     };
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getSupernodeSchedule( function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    it('get hardfork version', async () => {
        let re = "0.0.0";
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getHardforkVersion( function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get next scheduled hardfork', async () => {
        let re = {
            "hf_version": "0.0.0",
            "live_time": "2016-03-24T16:00:00"
        };
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getNextScheduledHardfork( function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get key references', async () => {
        let re = [["kietwallet"]];
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getKeyReferences(["BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2"],  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('lookup account names', async () => {
        let re = [
            {
                "id": 9105,
                "name": "kietwallet",
                "owner": {
                    "weight_threshold": 0,
                    "account_auths": [],
                    "key_auths": [
                        [
                            "BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2",
                            1
                        ]
                    ]
                },
                "json_metadata": "{}",
                "last_owner_update": "1970-01-01T00:00:00",
                "created": "2019-08-14T08:22:00",
                "balance": "1123.00000 BWF",
                "wd_balance": "38.73000 W",
                "vesting_shares": "30.00000 M",
                "vesting_withdraw_rate": "0.38461 M",
                "next_vesting_withdrawal": "2019-09-05T08:20:35",
                "withdrawn": 0,
                "to_withdraw": 1000000,
                "supernodes_voted_for": 0,
                "token_list": []
            }
        ];
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupAccountNames(['kietwallet'],  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });

    it('lookup accounts', async () => {
        let re = [
            "k0u872bt67r356qy",
            "k1106tyna",
            "k1ryxid",
            "k2mamm1o1d1f4t2g",
            "k380988228",
            "k41506",
            "k7tkd4t35dtoq3bb",
            "k8xtki8do3js05my",
            "kaabencyclo",
            "kaba4ello83"
        ];
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupAccounts("k", 10,  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get account count', async () => {
        let re = 10011;
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getAccountCount( function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(re, result);
    });
    // it('get supernodes', async () => {
    //     let re = [
    //         {
    //             "id": 0,
    //             "owner": "beowulf",
    //             "created": "1970-01-01T00:00:00",
    //             "votes": 0,
    //             "virtual_last_update": "0",
    //             "virtual_position": "0",
    //             "virtual_scheduled_time": "340282366920938463463374607431768211455",
    //             "total_missed": 830,
    //             "last_aslot": 21734735,
    //             "last_confirmed_block_num": 362632,
    //             "signing_key": "BEO5r5ceRhRFe4j1BCpp4eKwLkB7MRo41yrGzpjHakTB4KDMicxnC",
    //             "last_work": "0000000000000000000000000000000000000000000000000000000000000000",
    //             "running_version": "0.0.0",
    //             "hardfork_version_vote": "0.0.0",
    //             "hardfork_time_vote": "2016-03-24T16:00:00"
    //         }
    //     ];
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getSupernodes([0],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get supernode by account', async () => {
    //     let re =  {
    //         "id": 1,
    //         "owner": "beowulf2",
    //         "created": "2019-08-12T08:18:40",
    //         "votes": 0,
    //         "virtual_last_update": "0",
    //         "virtual_position": "0",
    //         "virtual_scheduled_time": "340282366920938463463374607431768211455",
    //         "total_missed": 748,
    //         "last_aslot": 21734793,
    //         "last_confirmed_block_num": 362690,
    //         "signing_key": "BEO5xJNC7P6yobScLYioa2qZfzDwzhN6CTqzAryEXfpENstqwJ7fL",
    //         "last_work": "0000000000000000000000000000000000000000000000000000000000000000",
    //         "running_version": "0.0.0",
    //         "hardfork_version_vote": "0.0.0",
    //         "hardfork_time_vote": "2016-03-24T16:00:00"
    //     };
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getSupernodeByAccount("beowulf2",  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    it('lookup supernode accounts', async () => {
        let re = [
            "beowulf",
            "beowulf10",
            "beowulf11",
            "beowulf12",
            "beowulf13",
            "beowulf14",
            "beowulf15",
            "beowulf16",
            "beowulf17",
            "beowulf18"
        ];
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.lookupSupernodeAccounts("a", 10,  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get supernode count', async () => {
        let re = 26;
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getSupernodeCount( function(err, result){
                resolve([err, result])
            });
        })
        assert.equal(re, result);
    });
    it('get transaction hex', async () => {
        let re = "a20fde544594899cd25c0103e803000000000000050000005700000000000000000762656f77756c6605616c69636501000000000103bd10ae12707629ca325f10bbc9f7792e90fdfcb72e57e660da9888e7d0c7268b010000006b9cd25c00000000011f620e37b168c7f7e1a9822c3614fd4b2eb6251c776a3c4aabce136a333ff031cc56ebcfffe21a8be9f50a207070248181262433c88017e874f70f4d95b982b54d";
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getTransactionHex({"ref_block_num": 4002,"ref_block_prefix": 2487571678,"expiration": "2019-05-08T09:08:25","operations": [["account_create",{"fee":"0.01000 W","creator": "beowulf","new_account_name": "alice","owner": {"weight_threshold": 1,"account_auths": [],"key_auths": [["BEO8GVwodYr2tUzE6eUjJEEiDqUpzCmab6V3ZHyszdhidQUbLK25t",1]]},"json_metadata": ""}]],"extensions": [],"created_time": 1557306475,"signatures": ["1f620e37b168c7f7e1a9822c3614fd4b2eb6251c776a3c4aabce136a333ff031cc56ebcfffe21a8be9f50a207070248181262433c88017e874f70f4d95b982b54d"]},  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get transaction', async () => {
        let re = {
            "ref_block_num": 35132,
            "ref_block_prefix": 3969869660,
            "expiration": "2019-09-03T12:21:56",
            "operations": [
                [
                    "transfer",
                    {
                        "from": "phungtest011",
                        "to": "beowulfsuperbank",
                        "amount": "0.01500 W",
                        "fee": "0.01000 W",
                        "memo": "27601560420878403_1567509758.419437-1minute"
                    }
                ]
            ],
            "extensions": [],
            "created_time": 1567509775,
            "signatures": [
                "1c4b7dc3e2588e309cbfb870f959590a909945f1439832cc46f5b7c3c2d7579c100078701fc1d57861f92972c0cd3cee80e50d08edd19f0b0569ac02e2917342f7"
            ],
            "transaction_id": "ea6a55d87e4d8cb1a529135d9ec87b7a2920065e",
            "block_num": 362813,
            "transaction_num": 0,
            "status": "none"
        };
        let [err, result] = await new Promise((resolve, reject) => {
            beowulf.api.getTransaction('ea6a55d87e4d8cb1a529135d9ec87b7a2920065e',  function(err, result){
                resolve([err, result])
            });
        })
        assert.deepEqual(re, result);
    });
    it('get potential signatures', async () => {
        let re = ["BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2"];
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
        })
        assert.deepEqual(re, result);
    });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });

    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });
    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });

    // it('get account', async () => {
    //     let re = "";
    //     let [err, result] = await new Promise((resolve, reject) => {
    //         beowulf.api.getAccounts(['kietwallet'],  function(err, result){
    //             resolve([err, result])
    //         });
    //     })
    //     assert.deepEqual(re, result);
    // });   
});
