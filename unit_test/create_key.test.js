import assert from 'assert';
import PrivateKey from '../src/auth/ecc/src/key_private';
import PublicKey from '../src/auth/ecc/src/key_public'
import {encode, decode} from '../src/auth/memo'

export const browserTests = {};

describe('beowulf.auth: test_key ', () => {
    let private_key, public_key, encodedMemo;
    const wif = '5HuSVkT51qmcA1NA96L15CcxHMmHzbHAMn6BMhMPK9P71e82X8t';
    const pubkey = 'BEO5fy8HiTNH8fMnSXU6KDcDe8qLCyUMZaMhFVFXVwW4dzZ8MVkvU';

    it('create private key', () => {
        // priKey = PrivateKey();
        private_key = PrivateKey.fromSeed("gDs7knMWZ1SPvJQgw2gpZDxucJhWUjDGownerDlWXBWmGaimlAVT8iSl7x4H9orkO8Qcj");
        assert.equal(private_key.toWif(), wif);
    });
    it('supports WIF format', () => {
        assert(PrivateKey.fromWif(wif));
    });
    it('finds public from private key', () => {
        public_key = private_key.toPublicKey();
        // substring match ignore prefix
        assert.equal(public_key.toString(), pubkey, 'Public key did not match');
    });
    it('parses public key', () => {
        assert(PublicKey.fromString(public_key.toString()));
    });
    it('encrypts memo', () => {
        encodedMemo = encode(private_key, public_key, 'memo', '#memo');
        assert(encodedMemo);
    });
    it('decripts memo', () => {
        const dec = decode(private_key, encodedMemo);
        if (dec !== '#memo') {
        console.error(
            'Decoded memo did not match (memo encryption is unavailable)',
        );
        browserTests.memo_encryption = false;
        }
    });
});
