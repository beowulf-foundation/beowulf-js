var assert = require('assert').strict;
var beowulf = require('../lib')
let url = beowulf.config.get('uri');
beowulf.api.setOptions({ url: url,useAppbaseApi: true });



describe('beowulf.auth: operation test', () => {  
    it('account_create', () => {
        let tx = [
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
            "balance": "460.00000 BWF",
            "wd_balance": "7.84000 W",
            "vesting_shares": "20.00000 M",
            "vesting_withdraw_rate": "0.38461 M",
            "next_vesting_withdrawal": "2019-09-05T08:20:35",
            "withdrawn": 0,
            "to_withdraw": 1000000,
            "supernodes_voted_for": 0,
            "token_list": [],
            "vesting_balance": "0.00000 BWF",
            "supernode_votes": []
        }
         ];
  
        beowulf.api.getAccounts(['kietwallet'], function(err, result){
            assert.deepStrictEqual(tx, result);
        });  
    });   
});




