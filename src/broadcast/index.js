import Promise from 'bluebird';
import newDebug from 'debug';

import broadcastHelpers from './helpers';
import formatterFactory from '../formatter';
import operations from './operations';
import beowulfApi from '../api';
import beowulfAuth from '../auth';
import { camelCase } from '../utils';

const debug = newDebug('beowulf:broadcast');
const noop = function() {}
const formatter = formatterFactory(beowulfApi);

const beowulfBroadcast = {};

// Base transaction logic -----------------------------------------------------

/**
 * Sign and broadcast transactions on the beowulf network
 */

beowulfBroadcast.send = function beowulfBroadcast$send(tx, privKeys, callback) {
  const resultP = beowulfBroadcast._prepareTransaction(tx)
    .then((transaction) => {
      debug(
        'Signing transaction (transaction, transaction.operations)',
        transaction, transaction.operations
      );
      return Promise.join(
        transaction,
        beowulfAuth.signTransaction(transaction, privKeys)
      );
    })
    .spread((transaction, signedTransaction) => {
      debug(
        'Broadcasting transaction (transaction, transaction.operations)',
        transaction, transaction.operations
      );
      return beowulfApi.broadcastTransactionSynchronousAsync(
        signedTransaction
      ).then((result) => {
        return Object.assign({}, result, signedTransaction);
      });
    });

  resultP.nodeify(callback || noop);
};

beowulfBroadcast.create = function beowulfBroadcast$create(tx, privKeys, callback) {
  const resultP = beowulfBroadcast._prepareTransaction(tx)
    .then((transaction) => {
      debug(
        'Signing transaction (transaction, transaction.operations)',
        transaction, transaction.operations
      );

      return beowulfAuth.signTransaction(transaction, privKeys);
    })
    .then((signedTransaction) => {
      return Object.assign({}, signedTransaction);
    });

  resultP.nodeify(callback || noop);
};

beowulfBroadcast.sign = function beowulfBroadcast$sign(tx, privKeys) {
  const signedTransaction = beowulfAuth.signTransaction(tx, privKeys)
  return Object.assign({}, signedTransaction);
};

beowulfBroadcast._prepareTransaction = function beowulfBroadcast$_prepareTransaction(tx) {
  const propertiesP = beowulfApi.getDynamicGlobalPropertiesAsync();
  return propertiesP
    .then((properties) => {
      // Set defaults on the transaction
      const chainDate = new Date(properties.time + 'Z');
      const refBlockNum = (properties.last_irreversible_block_num - 1) & 0xFFFF;
      return beowulfApi.getBlockAsync(properties.last_irreversible_block_num).then((block) => {
        const headBlockId = block.previous;
        return Object.assign({
          ref_block_num: refBlockNum,
          ref_block_prefix: Buffer.from(headBlockId, 'hex').readUInt32LE(4),
          created_time: parseInt(+(new Date()) / 1000),
          expiration: new Date(
            chainDate.getTime() +
            3600 * 1000
          ),
        }, tx);
      });
    });
};

// Generated wrapper ----------------------------------------------------------

// Generate operations from operations.json
operations.forEach((operation) => {
  const operationName = camelCase(operation.operation);
  const operationParams = operation.params || [];

  const useCommentPermlink =
    operationParams.indexOf('parent_permlink') !== -1 &&
    operationParams.indexOf('parent_permlink') !== -1;

  const buildKeys = function(wif) {
    const keys = {};
    if (operation.roles && operation.roles.length) {
      keys[operation.roles[0]] = wif; // TODO - Automatically pick a role? Send all?
    }

    return keys;
  };

  beowulfBroadcast[`${operationName}Keys`] = buildKeys;

  beowulfBroadcast[`${operationName}With`] =
    function beowulfBroadcast$specializedSendWith(wif, options, callback) {
      debug(`Sending operation "${operationName}" with`, {options, callback});
      const keys = buildKeys(wif);

      return beowulfBroadcast.send({
        extensions: [],
        operations: [[operation.operation, Object.assign(
          {},
          options,
          options.json_metadata != null ? {
            json_metadata: toString(options.json_metadata),
          } : {},
          useCommentPermlink && options.permlink == null ? {
            permlink: formatter.commentPermlink(options.parent_author, options.parent_permlink),
          } : {}
        )]],
      }, keys, callback);
    };

  beowulfBroadcast[operationName] =
    function beowulfBroadcast$specializedSend(wif, ...args) {
      debug(`Parsing operation "${operationName}" with`, {args});
      const options = operationParams.reduce((memo, param, i) => {
        memo[param] = args[i]; // eslint-disable-line no-param-reassign
        return memo;
      }, {});
      const callback = args[operationParams.length];
      return beowulfBroadcast[`${operationName}With`](wif, options, callback);
    };
<<<<<<< HEAD
=======
  
  beowulfBroadcast[`${operationName}Multisig`] =
    function(wif, ...args) {
      debug(`Parsing operation "${operationName}" with`, {args});
      const options = operationParams.reduce((memo, param, i) => {
        memo[param] = args[i]; // eslint-disable-line no-param-reassign
        return memo;
      }, {});
      const callback = args[operationParams.length];
      return beowulfBroadcast[`${operationName}MultisigWith`](wif, options, callback);
    };

  beowulfBroadcast[`${operationName}MultisigWith`] =
    function(wif, options, callback) {
      debug(`Sending operation "${operationName}" with`, {options, callback});
      const keys = buildKeys(wif);

      return beowulfBroadcast.create({
        extensions: [],
        operations: [[operation.operation, Object.assign(
          {},
          options,
          options.json_metadata != null ? {
            json_metadata: toString(options.json_metadata),
          } : {},
          useCommentPermlink && options.permlink == null ? {
            permlink: formatter.commentPermlink(options.parent_author, options.parent_permlink),
          } : {}
        )]],
      }, keys, callback);
    };
>>>>>>> 742a174... Add build keys with operation name functions
});

const toString = obj => typeof obj === 'object' ? JSON.stringify(obj) : obj;
broadcastHelpers(beowulfBroadcast);

Promise.promisifyAll(beowulfBroadcast);

exports = module.exports = beowulfBroadcast;
