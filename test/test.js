// import { PrivateKey, PublicKey, Address } from '../src/auth/ecc';
// var assert = require('assert');
// var Serilizer = require('../src/auth/serializer/src/serializer');
// var types = require('../src/auth/serializer/src/types');
// var ops = require('../src/auth/serializer/src/operations');

// let AllTypes = new Serilizer('all_types', {
//     uint8,
//     uint16,
//     uint32,
//     int16,
//     int64,
//     uint64,
//     string,
//     string_binary,
//     bytes: bytes(1),
//     bool,
//     array: array(uint8),
//     fixed_array: fixed_array(2, uint8),
//     protocol_id_type: protocol_id_type('base'),
//     object_id_type, //vote_id,
  
//     static_variant: array(static_variant([transfer, price])),
//     map: map(uint8, uint8),
//     set: set(uint8),
  
//     public_key,
//     address,
  
//     time_optional: optional(time_point_sec),
//     time_point_sec1: time_point_sec,
//     time_point_sec2: time_point_sec,
//     time_point_sec3: time_point_sec,
//   });   

// let { toObject, fromObject, toBuffer, fromBuffer } = AllTypes;

//   toObject = toObject.bind(AllTypes);
//   fromObject = fromObject.bind(AllTypes);
//   toBuffer = toBuffer.bind(AllTypes);
//   fromBuffer = fromBuffer.bind(AllTypes);

// let a = fromObject(AllTypes);
// console.log(a);

