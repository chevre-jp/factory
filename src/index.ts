/**
 * factory
 */
import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as CancelReservationActionFactory from './factory/action/cancel/reservation';
import * as ReserveActionFactory from './factory/action/reserve';
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import * as AccountTitleFactory from './factory/accountTitle';
import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import CreativeWorkType from './factory/creativeWorkType';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import EventStatusType from './factory/eventStatusType';
import EventType from './factory/eventType';
import ItemAvailability from './factory/itemAvailability';
import * as LanguageFactory from './factory/language';
import IMultilingualString from './factory/multilingualString';
import * as OfferFactory from './factory/offer';
import OfferType from './factory/offerType';
import * as OrganizationFactory from './factory/organization';
import OrganizationType from './factory/organizationType';
import PaymentMethodType from './factory/paymentMethodType';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as PriceSpecificationFactory from './factory/priceSpecification';
import * as CompoundPriceSpecificationFactory from './factory/priceSpecification/compoundPriceSpecification';
import * as MovieTicketTypeChargeSpecificationFactory from './factory/priceSpecification/movieTicketTypeChargeSpecification';
import * as SoundFormatChargeSpecificationFactory from './factory/priceSpecification/soundFormatChargeSpecification';
import * as UnitPriceSpecificationFactory from './factory/priceSpecification/unitPriceSpecification';
import * as VideoFormatChargeSpecificationFactory from './factory/priceSpecification/videoFormatChargeSpecification';
import PriceSpecificationType from './factory/priceSpecificationType';
import * as PropertyValueFactory from './factory/propertyValue';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import * as ReservationFactory from './factory/reservation';
import * as EventReservationFactory from './factory/reservation/event';
import ReservationStatusType from './factory/reservationStatusType';
import ReservationType from './factory/reservationType';
import SortType from './factory/sortType';
import SoundFormatType from './factory/soundFormatType';
import * as TicketTypeFactory from './factory/ticketType';
import { UnitCode } from './factory/unitCode';
import VideoFormatType from './factory/videoFormatType';

import * as TaskFactory from './factory/task';
import * as AggregateScreeningEventTaskFactory from './factory/task/aggregateScreeningEvent';
import * as CancelPendingReservationTaskFactory from './factory/task/cancelPendingReservation';
import * as CancelReservationTaskFactory from './factory/task/cancelReservation';
import * as ReserveTaskFactory from './factory/task/reserve';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as CancelReservationTransactionFactory from './factory/transaction/cancelReservation';
import * as ReserveTransactionFactory from './factory/transaction/reserve';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';
import * as URLFactory from './factory/url';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import errors = errors;
export import errorCode = ErrorCode;
export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export namespace award {
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
        }
        export namespace discount {
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
        }
    }
    export namespace cancel {
        // tslint:disable-next-line:no-shadowed-variable
        export import reservation = CancelReservationActionFactory;
    }
    export namespace interact {
    }
    export namespace trade {
    }
    export namespace transfer {
        export namespace give {
        }
        export namespace print {
        }
        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
        }
        export namespace send {
            export namespace message {
            }
        }
    }
    export namespace consume {
        export namespace use {
        }
    }
    export import reserve = ReserveActionFactory;
}
export import accountTitle = AccountTitleFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieCreativeWorkFactory;
}
export import creativeWorkType = CreativeWorkType;
export namespace event {
    export type IAttributes<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.IAttributes :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IAttributes :
        never;
    export type IEvent<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.IEvent :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IEvent :
        never;
    export import screeningEvent = ScreeningEventFactory;
    export import screeningEventSeries = ScreeningEventSeriesFactory;
}
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export import itemAvailability = ItemAvailability;
export import language = LanguageFactory;
export type multilingualString = IMultilingualString;
export namespace offer {
    export import IOffer = OfferFactory.IOffer;
}
export type offerType = OfferType;
export namespace organization {
    export import IOrganization = OrganizationFactory.IOrganization;
}
export import organizationType = OrganizationType;
export import paymentMethodType = PaymentMethodType;
export import priceCurrency = PriceCurrency;
export namespace place {
    export import movieTheater = MovieTheaterPlaceFactory;
}
export import placeType = PlaceType;
export namespace priceSpecification {
    export type IPriceSpecification<T extends PriceSpecificationType> =
        T extends PriceSpecificationType.MovieTicketTypeChargeSpecification ?
        MovieTicketTypeChargeSpecificationFactory.IPriceSpecification :
        T extends PriceSpecificationType.SoundFormatChargeSpecification ? SoundFormatChargeSpecificationFactory.IPriceSpecification :
        T extends PriceSpecificationType.UnitPriceSpecification ? UnitPriceSpecificationFactory.IPriceSpecification :
        T extends PriceSpecificationType.VideoFormatChargeSpecification ? VideoFormatChargeSpecificationFactory.IPriceSpecification :
        PriceSpecificationFactory.IPriceSpecification<PriceSpecificationType>;
    export type ISearchConditions<T extends PriceSpecificationType> =
        PriceSpecificationFactory.ISearchConditions<T>;
}
export namespace compoundPriceSpecification {
    export type IPriceSpecification<T extends PriceSpecificationType> =
        CompoundPriceSpecificationFactory.IPriceSpecification<priceSpecification.IPriceSpecification<T>>;
    export type ISearchConditions<T extends PriceSpecificationType> =
        CompoundPriceSpecificationFactory.ISearchConditions<T>;
}
export import priceSpecificationType = PriceSpecificationType;
export import propertyValue = PropertyValueFactory;
export import quantitativeValue = QuantitativeValueFactory;
export namespace reservation {
    export import IReservation = ReservationFactory.IReservation;
    export import ISeat = ReservationFactory.ISeat;
    export import ITicket = ReservationFactory.ITicket;
    export import IUnderName = ReservationFactory.IUnderName;
    export import TicketType = ReservationFactory.TicketType;
    // tslint:disable-next-line:no-shadowed-variable
    export import event = EventReservationFactory;
}
export import reservationStatusType = ReservationStatusType;
export import reservationType = ReservationType;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import ITask = TaskFactory.ITask;
    export import aggregateScreeningEvent = AggregateScreeningEventTaskFactory;
    export import cancelPendingReservation = CancelPendingReservationTaskFactory;
    export import cancelReservation = CancelReservationTaskFactory;
    export import reserve = ReserveTaskFactory;
}
export import sortType = SortType;
export import soundFormatType = SoundFormatType;
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IStartParams :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IStartParams :
        never;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IAttributes :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.ITransaction :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.ITransaction :
        never;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IResult :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IPotentialActions :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IPotentialActions :
        never;
    export type ISearchConditions<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.ISearchConditions :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.ISearchConditions :
        never;
    export import cancelReservation = CancelReservationTransactionFactory;
    export import reserve = ReserveTransactionFactory;
}
export import ticketType = TicketTypeFactory;
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import unitCode = UnitCode;
export import url = URLFactory;
export import videoFormatType = VideoFormatType;
