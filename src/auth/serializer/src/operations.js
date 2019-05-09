// This file is merge updated from beowulf's js_operation_serializer program.
/*

./js_operation_serializer |
sed 's/void/future_extensions/g'|
sed 's/beowulf_protocol:://g'|
sed 's/14static_variantIJNS_12fixed_stringINSt3__14pairIyyEEEEEEE/string/g'|
sed 's/beowulf_future_extensions/future_extensions/g'|
sed 's/beowulf_protocol_//g' > tmp.coffee

*/
// coffee tmp.coffee # fix errors until you see: `ChainTypes is not defined`

/*

   remove these 7 lines from tmp.coffee:

static_variant [
    pow2
    equihash_pow
] = static_variant [
    pow2
    equihash_pow
]

*/

// npm i -g decaffeinate
// decaffeinate tmp.coffee

// Merge tmp.js - See "Generated code follows" below

import types from './types';
import SerializerImpl from './serializer';

const {
  //id_type,
  //varint32, uint8, int64, fixed_array, object_id_type, vote_id, address,
  uint8,
  uint16,
  uint32,
  int16,
  uint64,
  string,
  string_binary,
  bytes,
  bool,
  array,
  // protocol_id_type,
  static_variant,
  map,
  set,
  public_key,
  time_point_sec,
  optional,
  asset,
  asset_symbol
} = types;

const future_extensions = types.void;
const hardfork_version_vote = types.void;
const version = types.void;

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
const operation = static_variant();
module.exports.operation = operation;

// For module.exports
const Serializer = function(operation_name, serilization_types_object) {
  const s = new SerializerImpl(operation_name, serilization_types_object);
  return (module.exports[operation_name] = s);
};

const beneficiaries = new Serializer('beneficiaries', {
  account: string,
  weight: uint16
});

const comment_payout_beneficiaries = new Serializer(0, {
  beneficiaries: set(beneficiaries)
});

// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer( 
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer( 
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/
let signed_transaction = new Serializer('signed_transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  created_time: uint64,
  signatures: array(bytes(65))
});

let signed_block = new Serializer('signed_block', {
  previous: bytes(20),
  timestamp: time_point_sec,
  supernode: string,
  transaction_merkle_root: bytes(20),
  extensions: set(
    static_variant([future_extensions, version, hardfork_version_vote])
  ),
  supernode_signature: bytes(65),
  transactions: array(signed_transaction)
});

let block_header = new Serializer('block_header', {
  previous: bytes(20),
  timestamp: time_point_sec,
  supernode: string,
  transaction_merkle_root: bytes(20),
  extensions: set(
    static_variant([future_extensions, version, hardfork_version_vote])
  )
});

let signed_block_header = new Serializer('signed_block_header', {
  previous: bytes(20),
  timestamp: time_point_sec,
  supernode: string,
  transaction_merkle_root: bytes(20),
  extensions: set(
    static_variant([future_extensions, version, hardfork_version_vote])
  ),
  supernode_signature: bytes(65)
});

let vote = new Serializer('vote', {
  voter: string,
  author: string,
  permlink: string,
  weight: int16
});

let comment = new Serializer('comment', {
  parent_author: string,
  parent_permlink: string,
  author: string,
  permlink: string,
  title: string,
  body: string,
  json_metadata: string
});

let transfer = new Serializer('transfer', {
  from: string,
  to: string,
  amount: asset,
  fee: asset,
  memo: string
});

let transfer_to_vesting = new Serializer('transfer_to_vesting', {
  from: string,
  to: string,
  amount: asset
});

let withdraw_vesting = new Serializer('withdraw_vesting', {
  account: string,
  vesting_shares: asset
});

let limit_order_create = new Serializer('limit_order_create', {
  owner: string,
  orderid: uint32,
  amount_to_sell: asset,
  min_to_receive: asset,
  fill_or_kill: bool,
  expiration: time_point_sec
});

let limit_order_cancel = new Serializer('limit_order_cancel', {
  owner: string,
  orderid: uint32
});

let price = new Serializer('price', {
  base: asset,
  quote: asset
});

// let asset_symbol = new Serializer('asset_symbol', {
//   decimals: unit8,
//   name: string
// });

let feed_publish = new Serializer('feed_publish', {
  publisher: string,
  exchange_rate: price
});

let convert = new Serializer('convert', {
  owner: string,
  requestid: uint32,
  amount: asset
});

var authority = new Serializer('authority', {
  weight_threshold: uint32,
  account_auths: map(string, uint16),
  key_auths: map(public_key, uint16)
});

let account_create = new Serializer('account_create', {
  fee: asset,
  creator: string,
  new_account_name: string,
  owner: authority,
  json_metadata: string
});

let account_update = new Serializer('account_update', {
  account: string,
  owner: optional(authority),
  active: optional(authority),
  posting: optional(authority),
  memo_key: public_key,
  json_metadata: string
});

let smt_create = new Serializer('smt_create', {
  control_account: string,
  symbol: asset_symbol,
  smt_creation_fee: asset,
  precision: uint8,
  extensions: set(future_extensions)
});

let smt_setup = new Serializer('smt_setup', {
  control_account: string,
  symbol: asset_symbol,
  decimal_places: uint8,
  max_supply: uint64,
  extensions: set(future_extensions)
});

let chain_properties = new Serializer('chain_properties', {
  account_creation_fee: asset,
  maximum_block_size: uint32,
  sbd_interest_rate: uint16
});

let supernode_update = new Serializer('supernode_update', {
  owner: string,
  url: string,
  block_signing_key: public_key,
  props: chain_properties,
  fee: asset
});

let account_supernode_vote = new Serializer('account_supernode_vote', {
  account: string,
  supernode: string,
  approve: bool
});

let account_supernode_proxy = new Serializer('account_supernode_proxy', {
  account: string,
  proxy: string
});

let pow = new Serializer('pow', {
  worker: public_key,
  input: bytes(32),
  signature: bytes(65),
  work: bytes(32)
});

let custom = new Serializer('custom', {
  required_auths: set(string),
  id: uint16,
  data: bytes()
});

let report_over_production = new Serializer('report_over_production', {
  reporter: string,
  first_block: signed_block_header,
  second_block: signed_block_header
});

let delete_comment = new Serializer('delete_comment', {
  author: string,
  permlink: string
});

let custom_json = new Serializer('custom_json', {
  required_auths: set(string),
  required_posting_auths: set(string),
  id: string,
  json: string
});

let comment_options = new Serializer('comment_options', {
  author: string,
  permlink: string,
  max_accepted_payout: asset,
  percent_beowulf_dollars: uint16,
  allow_votes: bool,
  allow_curation_rewards: bool,
  extensions: set(static_variant([comment_payout_beneficiaries]))
});

let set_withdraw_vesting_route = new Serializer('set_withdraw_vesting_route', {
  from_account: string,
  to_account: string,
  percent: uint16,
  auto_vest: bool
});

let limit_order_create2 = new Serializer('limit_order_create2', {
  owner: string,
  orderid: uint32,
  amount_to_sell: asset,
  exchange_rate: price,
  fill_or_kill: bool,
  expiration: time_point_sec
});

let fill_vesting_withdraw = new Serializer('fill_vesting_withdraw', {
  from_account: string,
  to_account: string,
  withdrawn: asset,
  deposited: asset
});

let shutdown_supernode = new Serializer('shutdown_supernode', {
  owner: string
});

let hardfork = new Serializer('hardfork', { hardfork_id: uint32 });

let producer_reward = new Serializer('producer_reward', {
  hardfork_id: uint32
});

let clear_null_account_balance = new Serializer('clear_null_account_balance', {
  hardfork_id: uint32
});

operation.st_operations = [
  transfer,
  transfer_to_vesting,
  withdraw_vesting,
  account_create,
  account_update,
  supernode_update,
  account_supernode_vote,
  smt_create,
  fill_vesting_withdraw,
  shutdown_supernode,
  hardfork,
  producer_reward,
  clear_null_account_balance
];

let transaction = new Serializer('transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  created_time: uint64
});

//# -------------------------------
//#  Generated code end  S T O P
//# -------------------------------

// Custom Types (do not over-write)

const encrypted_memo = new Serializer('encrypted_memo', {
  from: public_key,
  to: public_key,
  nonce: uint64,
  check: uint32,
  encrypted: string_binary
});
/*

// Make sure all tests pass

npm test

*/
