// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import { ErrorCode } from '../errorCode';
import { ChevreError } from './chevre';

/**
 * NotImplementedError
 */
export class NotImplementedError extends ChevreError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Method is not yet implemented.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore next */
        super(ErrorCode.NotImplemented, actualMessage);
        setPrototypeOf(this, NotImplementedError.prototype);
    }
}
