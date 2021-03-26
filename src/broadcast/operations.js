module.exports = [
  {
    "roles": ["owner"],
    "operation": "transfer",
    "params": [
      "from",
      "to",
      "amount",
      "fee",
      "memo"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "transferMul",
    "params": [
      "from",
      "to",
      "amount",
      "fee",
      "memo",
      "wif"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "transfer_to_vesting",
    "params": [
      "from",
      "to",
      "amount",
      "fee"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "withdraw_vesting",
    "params": [
      "account",
      "vesting_shares",
      "fee"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "account_create",
    "params": [
      "fee",
      "creator",
      "new_account_name",
      "owner",
      "json_metadata"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "account_update",
    "params": [
      "fee",
      "account",
      "owner",
      "json_metadata"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "supernode_update",
    "params": [
      "owner",
      "block_signing_key",
      "fee"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "account_supernode_vote",
    "params": [
      "supernode",
      "account",
      "approve",
      "votes",
      "fee"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "smt_create",
    "params": [
      "control_account",
      "symbol",
      "creator",
      "smt_creation_fee",
      "precision",
      "extensions",
      "max_supply"
    ]
  },
];
