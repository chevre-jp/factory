/**
 * ArgumentErrorテスト
 */
import * as assert from 'assert';

import { ErrorCode } from './errorCode';
import {
    AlreadyInUse,
    Argument,
    ArgumentNull,
    Chevre,
    Forbidden,
    GatewayTimeout,
    NotFound,
    NotImplemented,
    RateLimitExceeded,
    ServiceUnavailable,
    Unauthorized
} from './errors';

describe('new AlreadyInUseError()', () => {
    it('正しくインスタンス化できる', () => {
        const entityName = 'entityName';
        const fieldNames = ['fieldNames'];
        const message = 'test message';
        const error = new AlreadyInUse(entityName, fieldNames, message);
        assert(error instanceof AlreadyInUse);
        assert.equal(error.entityName, entityName);
        assert.equal(error.fieldNames, fieldNames);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const entityName = 'entityName';
        const fieldNames = ['fieldNames'];
        const error = new AlreadyInUse(entityName, fieldNames);
        assert(error instanceof AlreadyInUse);
        assert.equal(error.entityName, entityName);
        assert.equal(error.fieldNames, fieldNames);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new ArgumentError()', () => {
    it('正しくインスタンス化できる', () => {
        const argumentName = 'testname';
        const message = 'test message';
        const error = new Argument(argumentName, message);
        assert(error instanceof Argument);
        assert.equal(error.argumentName, argumentName);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const argumentName = 'testname';
        const error = new Argument(argumentName);
        assert(error instanceof Argument);
        assert.equal(error.argumentName, argumentName);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new ArgumentNullError()', () => {
    it('正しくインスタンス化できる', () => {
        const argumentName = 'testname';
        const message = 'test message';
        const error = new ArgumentNull(argumentName, message);
        assert(error instanceof ArgumentNull);
        assert.equal(error.argumentName, argumentName);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const argumentName = 'testname';
        const error = new ArgumentNull(argumentName);
        assert(error instanceof ArgumentNull);
        assert.equal(error.argumentName, argumentName);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new ForbiddenError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new Forbidden(message);
        assert(error instanceof Forbidden);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new Forbidden();
        assert(error instanceof Forbidden);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

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

describe('new GatewayTimeoutError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new GatewayTimeout(message);
        assert(error instanceof GatewayTimeout);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new GatewayTimeout();
        assert(error instanceof GatewayTimeout);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new NotFoundError()', () => {
    it('正しくインスタンス化できる', () => {
        const entityName = 'entityName';
        const message = 'test message';
        const error = new NotFound(entityName, message);
        assert(error instanceof NotFound);
        assert.equal(error.entityName, entityName);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const entityName = 'testname';
        const error = new NotFound(entityName);
        assert(error instanceof NotFound);
        assert.equal(error.entityName, entityName);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new NotImplementedError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new NotImplemented(message);
        assert(error instanceof NotImplemented);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new NotImplemented();
        assert(error instanceof NotImplemented);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new RateLimitExceededError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new RateLimitExceeded(message);
        assert(error instanceof RateLimitExceeded);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new RateLimitExceeded();
        assert(error instanceof RateLimitExceeded);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new ServiceUnavailableError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new ServiceUnavailable(message);
        assert(error instanceof ServiceUnavailable);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new ServiceUnavailable();
        assert(error instanceof ServiceUnavailable);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

describe('new UnauthorizedError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new Unauthorized(message);
        assert(error instanceof Unauthorized);
        assert.equal(error.message, message);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new Unauthorized();
        assert(error instanceof Unauthorized);
        assert.equal(error.name, 'ChevreError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});
