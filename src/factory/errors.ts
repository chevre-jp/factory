/**
 * errors
 */
import { AlreadyInUseError } from './error/alreadyInUse';
import { ArgumentError } from './error/argument';
import { ArgumentNullError } from './error/argumentNull';
import { ChevreError } from './error/chevre';
import { ForbiddenError } from './error/forbidden';
import { GatewayTimeoutError } from './error/gatewayTimeout';
import { NotFoundError } from './error/notFound';
import { NotImplementedError } from './error/notImplemented';
import { RateLimitExceededError } from './error/rateLimitExceeded';
import { ServiceUnavailableError } from './error/serviceUnavailable';
import { UnauthorizedError } from './error/unauthorized';

// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
export {
    AlreadyInUseError as AlreadyInUse,
    ArgumentError as Argument,
    ArgumentNullError as ArgumentNull,
    ForbiddenError as Forbidden,
    GatewayTimeoutError as GatewayTimeout,
    NotFoundError as NotFound,
    NotImplementedError as NotImplemented,
    RateLimitExceededError as RateLimitExceeded,
    ServiceUnavailableError as ServiceUnavailable,
    ChevreError as Chevre,
    UnauthorizedError as Unauthorized
};
