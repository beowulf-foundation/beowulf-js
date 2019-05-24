const assert = require('assert');
const beowulfWallet = require('../lib/wallet');

describe('beowulf.wallet', function() {
  it('decrypt', function() {
    let encryptedWallet = {
      cipher_keys:
        'a5221af63702075029ff730e4d63064fc7203210f3a8208ae5449b9ea2bed982f57b0317ea3c263fff77de422f7005bc3db546fef2271bc3bd364e2ab1dce42e65fa948fe8546f38f0f590c071215d498f28818a6e4b9f3b9889e638fda51496e47ad8338e8497f93b973b2e6863faa82c303b1974c6826a4e97be892c6a485847ebdf81ff61193279efd0a8c1d4b02dea62928f62a070b8f74cb8dbe5579c82f97aa3779f43057a9c1c8e285ff4c0b850a9ff9dc534a25992ae7afe2f171a831143a7d4c15bb3635d5f7ff3c9a9fc79045621e5e8b21bd6d5b5d54badc1d4239e8e35dfadf9fb03c8e0bb78f55a16e67569796963c40a0b5341eaa7a5a526c860c64d5bab05943c0eb1303ea81577cc750d6a534e5f66e3e4e37ef5539aae92',
      cipher_type: 'aes-256-cbc',
      salt: '05-8d89-9c47c1060da7',
      name: 'superbeo1',
    };
    
    let expectedDecyprtedWallet = {
      checksum:
        'b4a399c04d2df30b2281d0f9514b2b9dc681bad5b2407fe434c8585430419cd973adddd505d4aa632a52f5b7ad0e020ed239def1c32a42357ab465634afe9e2f',
      keys: {
        owner: '5JY3sGqkfoN7U6kee9HibnG6etQgLNCMqjhPqsVDRXRjGwFNKeA',
        ownerPubkey: 'BEO7GXMArUCaxq1kPNP4JkcnshVDyfpVTfEwL8e8FVAN6BgpU8Y1k',
      },
    };
    
    let decryptedWallet = beowulfWallet.decryptWallet(
      encryptedWallet,
      'trongcauhcmus',
    );
    
    assert.equal(expectedDecyprtedWallet.keys.owner, decryptedWallet.wallet.owner);    
  });
});

