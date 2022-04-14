/**
 * GatewayTimeoutErrorテスト
 */
import * as assert from 'assert';

import { GatewayTimeoutError } from './gatewayTimeout';

describe('new GatewayTimeoutError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new GatewayTimeoutError(message);
        assert(error instanceof GatewayTimeoutError);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new GatewayTimeoutError();
        assert(error instanceof GatewayTimeoutError);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});
