import Promise from 'bluebird';
import should from 'should';
import beowulf from '../src';

const username = process.env.STEEM_USERNAME || 'guest123';
const password = process.env.STEEM_PASSWORD;
const onwerWif = password
  ? beowulf.auth.toWif(username, password, 'owner')
  : '5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg';

describe('beowulf.broadcast:', () => {
  it('exists', () => {
    should.exist(beowulf.broadcast);
  });

  it('has generated methods', () => {
    should.exist(beowulf.broadcast._prepareTransaction);

  });

  it('has backing methods', () => {
    should.exist(beowulf.broadcast.send);
  });
  describe('patching transaction with default global properties', () => {
    it('works', async () => {
      const tx = await beowulf.broadcast._prepareTransaction({
        extensions: [],
        operations: [['vote', {
          voter: 'yamadapc',
          author: 'yamadapc',
          permlink: 'test-1-2-3-4-5-6-7-9',
        }]],
      });

      tx.should.have.properties([
        'expiration',
        'ref_block_num',
        'ref_block_prefix',
        'extensions',
        'operations',
      ]);
    });
  });
});
