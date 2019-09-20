export default [
    {
      "api": "condenser_api",
      "method": "get_block_header",
      "params": ["blockNum"]
    },
    {
      "api": "condenser_api",
      "method": "get_block",
      "params": ["blockNum"]
    },
    {
      "api": "condenser_api",
      "method": "get_ops_in_block",
      "params": ["blockNum", "onlyVirtual"]
    },
    {
      "api": "condenser_api",
      "method": "get_config"
    },
    {
      "api": "condenser_api",
      "method": "get_dynamic_global_properties"
    },
    {
      "api": "condenser_api",
      "method": "get_hardfork_version"
    },
    {
      "api": "condenser_api",
      "method": "get_next_scheduled_hardfork"
    },
    {
      "api": "condenser_api",
      "method": "get_key_references",
      "params": ["key"]
    },
    {
      "api": "condenser_api",
      "method": "get_accounts",
      "params": ["names"]
    },
    {
      "api": "condenser_api",
      "method": "lookup_account_names",
      "params": ["accountNames"]
    },
    {
      "api": "condenser_api",
      "method": "lookup_accounts",
      "params": ["lowerBoundName", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_account_count"
    },
    {
      "api": "condenser_api",
      "method": "get_version"
    },
    {
      "api": "condenser_api",
      "method": "get_account_history",
      "params": ["account", "from", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_owner_history",
      "params": ["account"]
    },
    {
      "api": "condenser_api",
      "method": "get_transaction_hex",
      "params": ["trx"]
    },
    {
      "api": "condenser_api",
      "method": "get_transaction",
      "params": ["trxId"]
    },
    {
      "api": "condenser_api",
      "method": "get_required_signatures",
      "params": ["trx", "availableKeys"]
    },
    {
      "api": "condenser_api",
      "method": "get_potential_signatures",
      "params": ["trx"]
    },
    {
      "api": "condenser_api",
      "method": "verify_authority",
      "params": ["trx"]
    },
    {
      "api": "condenser_api",
      "method": "get_supernodes",
      "params": ["supernodeIds"]
    },
    {
      "api": "condenser_api",
      "method": "get_supernode_by_account",
      "params": ["accountName"]
    },
    {
      "api": "condenser_api",
      "method": "get_supernodes_by_vote",
      "params": ["from", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "lookup_supernode_accounts",
      "params": ["lowerBoundName", "limit"]
    },
    {
      "api": "condenser_api",
      "method": "get_supernode_count"
    },
    {
      "api": "condenser_api",
      "method": "get_supernode_voted_by_acc",
      "params": ["names"]
    },
    {
      "api": "condenser_api",
      "method": "get_active_supernodes"
    },
    {
      "api": "condenser_api",
      "method": "list_smt_tokens"
    },
    {
      "api": "condenser_api",
      "method": "find_smt_tokens_by_name",
      "params": ["name"]
    },
    {
      "api": "condenser_api",
      "method": "get_supernode_schedule"
    },
    {
      "api": "condenser_api",
      "method": "get_balance",
      "params": ["name", "options"]
    },
    {
      "api": "condenser_api",
      "method": "broadcast_transaction",
      "params": ["trx"]
    },
    {
      "api": "condenser_api",
      "method": "broadcast_transaction_with_callback",
      "params": ["confirmationCallback", "trx"]
    },
    {
      "api": "condenser_api",
      "method": "broadcast_transaction_synchronous",
      "params": ["trx"]
    },
    {
      "api": "condenser_api",
      "method": "broadcast_block",
      "params": ["b"]
    },
    {
      "api": "condenser_api",
      "method": "set_max_block_age",
      "params": ["maxBlockAge"]
    }
];
