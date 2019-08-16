var assert = require('assert').strict;
var ByteBuffer = require('bytebuffer');
var types = require('../src/auth/serializer/src/types');
var ops = require('../src/auth/serializer/src/operations');

describe('beowulf.auth: operation test', () => {
  it('templates', () => {
    for (let op in ops) {
      switch (op) {
        case 'operation':
          continue;
      }
      template(ops[op]);
    }
  });

  it('account_create', () => {
    let tx = {"ref_block_num":5916,"ref_block_prefix":971147841,"expiration":"2019-07-30T11:16:35","operations":[["account_create",{"fee":"1.00000 W","creator":"alice","new_account_name":"kiet4404","owner":{"weight_threshold":1,"account_auths":[],"key_auths":[["BEO6oy7a2avYoDSD5M1Wk4Quz2Mabj4FN4RazBrBNuawAWzZQ43Md",1]]},"json_metadata":""}]],"extensions":[],"created_time":"1564484807","signatures":["200b005da41c1299575918d9d8ac47164bdf76ac50375267eba289cbbb1558b3c7013287c909f9cdcd4adc5c35e000031c48d76768e35a4d78fdecbb1af1aa1cb2"]};

    let tx_hex = ('1c17418ae2391327405d0103a0860100000000000500000057000000000000000005616c696365086b6965743434303401000000000102fd203890ed13743f92b2bd20101defbed70db28529efc555c07958a32216308a01000000c724405d0000000001200b005da41c1299575918d9d8ac47164bdf76ac50375267eba289cbbb1558b3c7013287c909f9cdcd4adc5c35e000031c48d76768e35a4d78fdecbb1af1aa1cb2');

    assert.equal('W', Buffer.from('57', 'hex').toString());
    let tx_object1 = ops.signed_transaction.fromObject(tx);
    // let tx_object2 = ops.signed_transaction.fromHex(tx_hex);
    // assert.deepStrictEqual(tx, ops.signed_transaction.toObject(tx_object1));
    // assert.deepStrictEqual(tx, ops.signed_transaction.toObject(tx_object2));
    assert.deepStrictEqual(tx_hex, ops.signed_transaction.toHex(tx_object1));
    // assert.deepStrictEqual(tx_hex, ops.signed_transaction.toHex(tx_object2));
  });   
});

function template(op) {
  assert(op.toObject({}, { use_default: true }));
  assert(op.toObject({}, { use_default: true, annotate: true }));
}

