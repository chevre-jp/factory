/**
 * errors
 */
import { AlreadyInUseError as AlreadyInUse } from './error/alreadyInUse';
import { ArgumentError as Argument } from './error/argument';
import { ArgumentNullError as ArgumentNull } from './error/argumentNull';
import { ChevreError as Chevre } from './error/chevre';
import { ForbiddenError as Forbidden } from './error/forbidden';
import { GatewayTimeoutError as GatewayTimeout } from './error/gatewayTimeout';
import { NotFoundError as NotFound } from './error/notFound';
import { NotImplementedError as NotImplemented } from './error/notImplemented';
import { RateLimitExceededError as RateLimitExceeded } from './error/rateLimitExceeded';
import { ServiceUnavailableError as ServiceUnavailable } from './error/serviceUnavailable';
import { UnauthorizedError as Unauthorized } from './error/unauthorized';

export {
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
};
