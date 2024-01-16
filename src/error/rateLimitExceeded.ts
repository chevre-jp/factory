// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import { ErrorCode } from '../errorCode';
import { ChevreError } from './chevre';

/**
 * RateLimitExceededError
 */
export class RateLimitExceededError extends ChevreError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore next */
        super(ErrorCode.RateLimitExceeded, actualMessage);
        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}
