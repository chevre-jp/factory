// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { ChevreError } from './chevre';

/**
 * ServiceUnavailableError
 */
export default class ServiceUnavailableError extends ChevreError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.ServiceUnavailable, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
