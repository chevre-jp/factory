// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { ChevreError } from './chevre';

/**
 * GatewayTimeoutError
 */
export default class GatewayTimeoutError extends ChevreError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Gateway Timeout';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.GatewayTimeout, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, GatewayTimeoutError.prototype);
    }
}
