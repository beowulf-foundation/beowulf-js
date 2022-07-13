var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations= {
    transfer: 0,
    transfer_to_vesting: 1,
    withdraw_vesting: 2,
    account_create: 3,
    account_update: 4,
    supernode_update: 5,
    account_supernode_vote: 6,
    smt_create: 7,
    smart_contract: 8,
    fill_vesting_withdraw: 9,
    shutdown_supernode: 10,
    hardfork: 11,
    producer_reward: 12,
    clear_null_account_balance: 13,
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1,
};

ChainTypes.extensions= {
  void: 0,
  extension_json_type: 1
}
