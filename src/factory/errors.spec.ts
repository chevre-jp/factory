/**
 * ArgumentErrorテスト
 */
import * as assert from 'assert';

import { ErrorCode } from './errorCode';
import { Chevre } from './errors';

describe('new ChevreError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new Chevre(ErrorCode.Argument, message);
        assert(error instanceof Chevre);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new Chevre(ErrorCode.Argument);
        assert(error instanceof Chevre);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});
