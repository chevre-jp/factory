/**
 * indexテスト
 */
import * as assert from 'assert';

import * as factory from './index';

describe('import factory', () => {
    it('factoryをオブジェクトとしてインポートできるはず', () => {
        assert.equal(typeof factory, 'object');
    });
});
