import ErrorCode from '../errorCode';

/**
 * ChevreError
 */
export class ChevreError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        // tslint:disable-next-line:no-single-line-block-comment
        super(message)/* istanbul ignore next */;

        this.name = 'ChevreError';
        this.reason = code;
    }
}
