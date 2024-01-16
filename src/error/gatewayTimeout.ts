// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import { ErrorCode } from '../errorCode';
import { ChevreError } from './chevre';

/**
 * GatewayTimeoutError
 */
export class GatewayTimeoutError extends ChevreError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Gateway Timeout';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore next */
        super(ErrorCode.GatewayTimeout, actualMessage);
        setPrototypeOf(this, GatewayTimeoutError.prototype);
    }
}
