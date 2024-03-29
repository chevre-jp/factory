// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import { ErrorCode } from '../errorCode';
import { ChevreError } from './chevre';

/**
 * ForbiddenError
 */
export class ForbiddenError extends ChevreError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore next */
        super(ErrorCode.Forbidden, actualMessage);
        setPrototypeOf(this, ForbiddenError.prototype);
    }
}
