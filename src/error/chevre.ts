// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import { ErrorCode } from '../errorCode';

/**
 * ChevreError
 */
export class ChevreError extends Error {
    public readonly reason: ErrorCode;

    // tslint:disable-next-line:no-single-line-block-comment
    /* istanbul ignore next */
    constructor(code: ErrorCode, message?: string) {
        super(message);
        this.name = 'ChevreError';
        this.reason = code;
        setPrototypeOf(this, ChevreError.prototype);
    }
}
