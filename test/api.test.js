require('babel-polyfill');
import assert from 'assert';
import should from 'should';
import testPost from './test-post.json';
import beowulf from '../src';
import api from '../src/api';

describe('beowulf.api:', function () {
  this.timeout(30 * 1000);

  describe('setOptions', () => {
    it('works', () => {
      let url = beowulf.config.get('uri');
      if(! url) url = beowulf.config.get('websocket');
      beowulf.api.setOptions({ url: url, useAppbaseApi: true });
    });
  });

  describe('streamBlockNumber', () => {
    it('streams beowulf transactions', (done) => {
      let i = 0;
      const release = beowulf.api.streamBlockNumber((err, block) => {
        should.exist(block);
        block.should.be.instanceOf(Number);
        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('streamBlock', () => {
    it('streams beowulf blocks', (done) => {
      let i = 0;
      const release = beowulf.api.streamBlock((err, block) => {
        try {
          should.exist(block);
          block.should.have.properties([
            'previous',
            'transactions',
            'timestamp',
          ]);
        } catch (err2) {
          release();
          done(err2);
          return;
        }

        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('streamTransactions', () => {
    it('streams beowulf transactions', (done) => {
      let i = 0;
      const release = beowulf.api.streamTransactions((err, transaction) => {
        try {
          should.exist(transaction);
          transaction.should.have.properties([
            'ref_block_num',
            'operations',
            'extensions',
          ]);
        } catch (err2) {
          release();
          done(err2);
          return;
        }

        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('streamOperations', () => {
    it('streams beowulf operations', (done) => {
      let i = 0;
      const release = beowulf.api.streamOperations((err, operation) => {
        try {
          should.exist(operation);
        } catch (err2) {
          release();
          done(err2);
          return;
        }

        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('useApiOptions', () => {
    it('works ok with the prod instances', async() => {
      beowulf.api.setOptions({ useAppbaseApi: true, url: beowulf.config.get('uri') });

      const result = await beowulf.api.getContentAsync('yamadapc', 'test-1-2-3-4-5-6-7-9');
      beowulf.api.setOptions({ useAppbaseApi: false, url: beowulf.config.get('uri') });

      result.should.have.properties(testPost);
    });
  });

  describe('with retry', () => {
    let beowulfApi;
    beforeEach(() => {
      beowulfApi = new api.Steem({});
    });

    it('works by default', async function() {
      let attempts = 0;
      beowulfApi.setOptions({
        url: 'https://api.beowulfit.com',
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          const data = JSON.parse(req.body);
          res({
            ok: true,
            json: () => Promise.resolve({
              jsonrpc: '2.0',
              id: data.id,
              result: ['ned'],
            }),
          });
          attempts++;
        }),
      });
      const result = await beowulfApi.getFollowersAsync('ned', 0, 'blog', 5)
      assert.equal(attempts, 1);
      assert.deepEqual(result, ['ned']);
    });

    it('does not retry by default', async() => {
      let attempts = 0;
      beowulfApi.setOptions({
        url: 'https://api.beowulfit.com',
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          rej(new Error('Bad request'));
          attempts++;
        }),
      });

      let result;
      let errored = false;
      try {
        result = await beowulfApi.getFollowersAsync('ned', 0, 'blog', 5)
      } catch (e) {
        errored = true;
      }
      assert.equal(attempts, 1);
      assert.equal(errored, true);
    });

    it('works with retry passed as a boolean', async() => {
      let attempts = 0;
      beowulfApi.setOptions({
        url: 'https://api.beowulfit.com',
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          const data = JSON.parse(req.body);
          res({
            ok: true,
            json: () => Promise.resolve({
              jsonrpc: '2.0',
              id: data.id,
              result: ['ned'],
            }),
          });
          attempts++;
        }),
      });

      const result = await beowulfApi.getFollowersAsync('ned', 0, 'blog', 5)
      assert.equal(attempts, 1);
      assert.deepEqual(result, ['ned']);
    });

    it('retries with retry passed as a boolean', async() => {
      let attempts = 0;
      beowulfApi.setOptions({
        url: 'https://api.beowulfit.com',
        retry: true,
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          if (attempts < 1) {
            rej(new Error('Bad request'));
          } else {
            const data = JSON.parse(req.body);
            res({
              ok: true,
              json: () => Promise.resolve({
                jsonrpc: '2.0',
                id: data.id,
                result: ['ned'],
              }),
            });
          }
          attempts++;
        }),
      });

      let result;
      let errored = false;
      try {
        result = await beowulfApi.getFollowersAsync('ned', 0, 'blog', 5);
      } catch (e) {
        errored = true;
      }
      assert.equal(attempts, 2);
      assert.equal(errored, false);
      assert.deepEqual(result, ['ned']);
    });

    it('works with retry passed as an object', async() => {
      beowulfApi.setOptions({
        url: 'https://api.beowulfit.com',
        retry: {
          retries: 3,
          minTimeout: 1, // 1ms
        },
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          const data = JSON.parse(req.body);
          res({
            ok: 'true',
            json: () => Promise.resolve({
              jsonrpc: '2.0',
              id: data.id,
              result: ['ned'],
            }),
          });
        }),
      });

      const result = await beowulfApi.getFollowersAsync('ned', 0, 'blog', 5);
      assert.deepEqual(result, ['ned']);
    });

    it('retries with retry passed as an object', async() => {
      let attempts = 0;
      beowulfApi.setOptions({
        url: 'https://api.beowulfit.com',
        retry: {
          retries: 3,
          minTimeout: 1,
        },
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          if (attempts < 1) {
            rej(new Error('Bad request'));
          } else {
            const data = JSON.parse(req.body);
            res({
              ok: true,
              json: () => Promise.resolve({
                jsonrpc: '2.0',
                id: data.id,
                result: ['ned'],
              }),
            });
          }
          attempts++;
        }),
      });

      let result;
      let errored = false;
      try {
        result = await beowulfApi.getFollowersAsync('ned', 0, 'blog', 5);
      } catch (e) {
        errored = true;
      }
      assert.equal(attempts, 2);
      assert.equal(errored, false);
      assert.deepEqual(result, ['ned']);
    });

    it('does not retry non-retriable operations');
  });

});