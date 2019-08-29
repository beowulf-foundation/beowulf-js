var assert = require('assert').strict;
var beowulf = require('../src/index');
var ops = require('../src/auth/serializer/src/operations')


let wif = '5J9EPDvAHC5bxMz1mVygrrjQeiKW4ayX8HisD7eZ9DW7Qhc8hXR';


describe('beowulf.test: operaton create_account ', () => {
    it('wrong name', async () => {
        let tx = {
            "cause": {
                "name": "RPCError",
                "code": -32000,
                "data": {
                    "code": 13,
                    "name": "N5boost16exception_detail10clone_implINS0_19error_info_injectorISt12out_of_rangeEEEE",
                    "message": "unknown key",
                    "stack": [
                        {
                            "context": {
                                "level": "warn",
                                "file": "transaction_util.hpp",
                                "line": 58,
                                "method": "verify_authority",
                                "hostname": "",
                                "timestamp": "2019-08-29T10:57:10"
                            },
                            "format": "${what}: ",
                            "data": {
                                "auth_containers": [
                                    {
                                        "type": "account_create_operation",
                                        "value": {
                                            "fee": {
                                                "amount": "100000",
                                                "precision": 5,
                                                "name": "W"
                                            },
                                            "creator": "kietwallt",
                                            "new_account_name": "kiet290809",
                                            "owner": {
                                                "weight_threshold": 1,
                                                "account_auths": [],
                                                "key_auths": [
                                                    [
                                                        "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                        1
                                                    ]
                                                ]
                                            },
                                            "json_metadata": ""
                                        }
                                    }
                                ],
                                "sigs": [
                                    "BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2"
                                ],
                                "what": "unknown key"
                            }
                        },
                        {
                            "context": {
                                "level": "warn",
                                "file": "transaction.cpp",
                                "line": 188,
                                "method": "verify_authority",
                                "hostname": "",
                                "timestamp": "2019-08-29T10:57:10"
                            },
                            "format": "",
                            "data": {
                                "*this": {
                                    "ref_block_num": 13942,
                                    "ref_block_prefix": 2578906358,
                                    "expiration": "2019-08-29T11:07:05",
                                    "operations": [
                                        {
                                            "type": "account_create_operation",
                                            "value": {
                                                "fee": {
                                                    "amount": "100000",
                                                    "precision": 5,
                                                    "name": "W"
                                                },
                                                "creator": "kietwallt",
                                                "new_account_name": "kiet290809",
                                                "owner": {
                                                    "weight_threshold": 1,
                                                    "account_auths": [],
                                                    "key_auths": [
                                                        [
                                                            "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                            1
                                                        ]
                                                    ]
                                                },
                                                "json_metadata": ""
                                            }
                                        }
                                    ],
                                    "extensions": [],
                                    "created_time": 1567076230,
                                    "signatures": [
                                        "1f75029d9c6f504229a6d8943ed9e1e7fe8a6f26721b41e1e28b8f47d2fa0bc0ac7bd5b9aa2f9808a1497658ee40e0ecd314e1cac7bddeca984c9c5cd9935eaa97"
                                    ]
                                }
                            }
                        },
                        {
                            "context": {
                                "level": "warn",
                                "file": "database.cpp",
                                "line": 2212,
                                "method": "_apply_transaction",
                                "hostname": "",
                                "timestamp": "2019-08-29T10:57:10"
                            },
                            "format": "",
                            "data": {
                                "trx": {
                                    "ref_block_num": 13942,
                                    "ref_block_prefix": 2578906358,
                                    "expiration": "2019-08-29T11:07:05",
                                    "operations": [
                                        {
                                            "type": "account_create_operation",
                                            "value": {
                                                "fee": {
                                                    "amount": "100000",
                                                    "precision": 5,
                                                    "name": "W"
                                                },
                                                "creator": "kietwallt",
                                                "new_account_name": "kiet290809",
                                                "owner": {
                                                    "weight_threshold": 1,
                                                    "account_auths": [],
                                                    "key_auths": [
                                                        [
                                                            "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                            1
                                                        ]
                                                    ]
                                                },
                                                "json_metadata": ""
                                            }
                                        }
                                    ],
                                    "extensions": [],
                                    "created_time": 1567076230,
                                    "signatures": [
                                        "1f75029d9c6f504229a6d8943ed9e1e7fe8a6f26721b41e1e28b8f47d2fa0bc0ac7bd5b9aa2f9808a1497658ee40e0ecd314e1cac7bddeca984c9c5cd9935eaa97"
                                    ]
                                }
                            }
                        },
                        {
                            "context": {
                                "level": "warn",
                                "file": "database.cpp",
                                "line": 800,
                                "method": "push_transaction",
                                "hostname": "",
                                "timestamp": "2019-08-29T10:57:10"
                            },
                            "format": "",
                            "data": {
                                "trx": {
                                    "ref_block_num": 13942,
                                    "ref_block_prefix": 2578906358,
                                    "expiration": "2019-08-29T11:07:05",
                                    "operations": [
                                        {
                                            "type": "account_create_operation",
                                            "value": {
                                                "fee": {
                                                    "amount": "100000",
                                                    "precision": 5,
                                                    "name": "W"
                                                },
                                                "creator": "kietwallt",
                                                "new_account_name": "kiet290809",
                                                "owner": {
                                                    "weight_threshold": 1,
                                                    "account_auths": [],
                                                    "key_auths": [
                                                        [
                                                            "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                            1
                                                        ]
                                                    ]
                                                },
                                                "json_metadata": ""
                                            }
                                        }
                                    ],
                                    "extensions": [],
                                    "created_time": 1567076230,
                                    "signatures": [
                                        "1f75029d9c6f504229a6d8943ed9e1e7fe8a6f26721b41e1e28b8f47d2fa0bc0ac7bd5b9aa2f9808a1497658ee40e0ecd314e1cac7bddeca984c9c5cd9935eaa97"
                                    ]
                                }
                            }
                        }
                    ]
                }
            },
            "isOperational": true,
            "code": -32000,
            "data": {
                "code": 13,
                "name": "N5boost16exception_detail10clone_implINS0_19error_info_injectorISt12out_of_rangeEEEE",
                "message": "unknown key",
                "stack": [
                    {
                        "context": {
                            "level": "warn",
                            "file": "transaction_util.hpp",
                            "line": 58,
                            "method": "verify_authority",
                            "hostname": "",
                            "timestamp": "2019-08-29T10:57:10"
                        },
                        "format": "${what}: ",
                        "data": {
                            "auth_containers": [
                                {
                                    "type": "account_create_operation",
                                    "value": {
                                        "fee": {
                                            "amount": "100000",
                                            "precision": 5,
                                            "name": "W"
                                        },
                                        "creator": "kietwallt",
                                        "new_account_name": "kiet290809",
                                        "owner": {
                                            "weight_threshold": 1,
                                            "account_auths": [],
                                            "key_auths": [
                                                [
                                                    "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                    1
                                                ]
                                            ]
                                        },
                                        "json_metadata": ""
                                    }
                                }
                            ],
                            "sigs": [
                                "BEO5pL6xw5rZ84iAW2BxCCDcD6vDMC83BKJXycbSV3ThLJ5SPkuM2"
                            ],
                            "what": "unknown key"
                        }
                    },
                    {
                        "context": {
                            "level": "warn",
                            "file": "transaction.cpp",
                            "line": 188,
                            "method": "verify_authority",
                            "hostname": "",
                            "timestamp": "2019-08-29T10:57:10"
                        },
                        "format": "",
                        "data": {
                            "*this": {
                                "ref_block_num": 13942,
                                "ref_block_prefix": 2578906358,
                                "expiration": "2019-08-29T11:07:05",
                                "operations": [
                                    {
                                        "type": "account_create_operation",
                                        "value": {
                                            "fee": {
                                                "amount": "100000",
                                                "precision": 5,
                                                "name": "W"
                                            },
                                            "creator": "kietwallt",
                                            "new_account_name": "kiet290809",
                                            "owner": {
                                                "weight_threshold": 1,
                                                "account_auths": [],
                                                "key_auths": [
                                                    [
                                                        "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                        1
                                                    ]
                                                ]
                                            },
                                            "json_metadata": ""
                                        }
                                    }
                                ],
                                "extensions": [],
                                "created_time": 1567076230,
                                "signatures": [
                                    "1f75029d9c6f504229a6d8943ed9e1e7fe8a6f26721b41e1e28b8f47d2fa0bc0ac7bd5b9aa2f9808a1497658ee40e0ecd314e1cac7bddeca984c9c5cd9935eaa97"
                                ]
                            }
                        }
                    },
                    {
                        "context": {
                            "level": "warn",
                            "file": "database.cpp",
                            "line": 2212,
                            "method": "_apply_transaction",
                            "hostname": "",
                            "timestamp": "2019-08-29T10:57:10"
                        },
                        "format": "",
                        "data": {
                            "trx": {
                                "ref_block_num": 13942,
                                "ref_block_prefix": 2578906358,
                                "expiration": "2019-08-29T11:07:05",
                                "operations": [
                                    {
                                        "type": "account_create_operation",
                                        "value": {
                                            "fee": {
                                                "amount": "100000",
                                                "precision": 5,
                                                "name": "W"
                                            },
                                            "creator": "kietwallt",
                                            "new_account_name": "kiet290809",
                                            "owner": {
                                                "weight_threshold": 1,
                                                "account_auths": [],
                                                "key_auths": [
                                                    [
                                                        "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                        1
                                                    ]
                                                ]
                                            },
                                            "json_metadata": ""
                                        }
                                    }
                                ],
                                "extensions": [],
                                "created_time": 1567076230,
                                "signatures": [
                                    "1f75029d9c6f504229a6d8943ed9e1e7fe8a6f26721b41e1e28b8f47d2fa0bc0ac7bd5b9aa2f9808a1497658ee40e0ecd314e1cac7bddeca984c9c5cd9935eaa97"
                                ]
                            }
                        }
                    },
                    {
                        "context": {
                            "level": "warn",
                            "file": "database.cpp",
                            "line": 800,
                            "method": "push_transaction",
                            "hostname": "",
                            "timestamp": "2019-08-29T10:57:10"
                        },
                        "format": "",
                        "data": {
                            "trx": {
                                "ref_block_num": 13942,
                                "ref_block_prefix": 2578906358,
                                "expiration": "2019-08-29T11:07:05",
                                "operations": [
                                    {
                                        "type": "account_create_operation",
                                        "value": {
                                            "fee": {
                                                "amount": "100000",
                                                "precision": 5,
                                                "name": "W"
                                            },
                                            "creator": "kietwallt",
                                            "new_account_name": "kiet290809",
                                            "owner": {
                                                "weight_threshold": 1,
                                                "account_auths": [],
                                                "key_auths": [
                                                    [
                                                        "BEO7KDGfiAy5ZPWUnZddPFEty8gftx69wNMLyZ52mbgEtNqbDFjoT",
                                                        1
                                                    ]
                                                ]
                                            },
                                            "json_metadata": ""
                                        }
                                    }
                                ],
                                "extensions": [],
                                "created_time": 1567076230,
                                "signatures": [
                                    "1f75029d9c6f504229a6d8943ed9e1e7fe8a6f26721b41e1e28b8f47d2fa0bc0ac7bd5b9aa2f9808a1497658ee40e0ecd314e1cac7bddeca984c9c5cd9935eaa97"
                                ]
                            }
                        }
                    }
                ]
            }
        };
        console.log(tx.cause.data.message)
        let wallet = beowulf.wallet.generateWallet();


        let [err, result] = await new Promise((resolve, reject) => {

            beowulf.wallet.submitWallet({
                ownerPubkey: wallet.ownerPubkey,
                account: "kiet290807",
                creator: 'kietlet',
                creatorWif: wif,
                fee: "1.00000 W"
            }, function (err, result) {

                resolve([err, result])
            });
        })

        // console.log({ err, result });
        // console.log(tx.cause.data.message, err.cause.data);
        assert.equal(tx.cause.data.message, err.cause.data.message);
    });
});