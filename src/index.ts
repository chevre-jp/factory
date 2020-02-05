/**
 * factory
 */
import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as CancelReservationActionFactory from './factory/action/cancel/reservation';
import * as InformActionFactory from './factory/action/interact/inform';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as ReserveActionFactory from './factory/action/reserve';
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import * as AccountTitleFactory from './factory/accountTitle';
import * as CategoryCodeFactory from './factory/categoryCode';
import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import CreativeWorkType from './factory/creativeWorkType';
import * as EventFactory from './factory/event';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import EventStatusType from './factory/eventStatusType';
import EventType from './factory/eventType';
import ItemAvailability from './factory/itemAvailability';
import * as LanguageFactory from './factory/language';
import IMultilingualString from './factory/multilingualString';
import * as OfferFactory from './factory/offer';
import * as ProductOfferFactory from './factory/offer/product';
import OfferType from './factory/offerType';
import OrganizationType from './factory/organizationType';
import { PaymentMethodType } from './factory/paymentMethodType';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import * as SeatPlaceFactory from './factory/place/seat';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as PriceSpecificationFactory from './factory/priceSpecification';
import * as CategoryCodeChargeSpecificationFactory from './factory/priceSpecification/categoryCodeChargeSpecification';
import * as CompoundPriceSpecificationFactory from './factory/priceSpecification/compoundPriceSpecification';
import * as MovieTicketTypeChargeSpecificationFactory from './factory/priceSpecification/movieTicketTypeChargeSpecification';
import * as UnitPriceSpecificationFactory from './factory/priceSpecification/unitPriceSpecification';
import PriceSpecificationType from './factory/priceSpecificationType';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as project from './factory/project';
import * as PropertyValueFactory from './factory/propertyValue';
import * as QualitativeValueFactory from './factory/qualitativeValue';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import * as ReservationFactory from './factory/reservation';
import * as EventReservationFactory from './factory/reservation/event';
import * as ReservationPackageFactory from './factory/reservation/reservationPackage';
import ReservationStatusType from './factory/reservationStatusType';
import ReservationType from './factory/reservationType';
import * as ServiceTypeFactory from './factory/serviceType';
import SortType from './factory/sortType';
import * as TicketTypeFactory from './factory/ticketType';
import { UnitCode } from './factory/unitCode';
import VideoFormatType from './factory/videoFormatType';

import * as TaskFactory from './factory/task';
import * as AggregateScreeningEventTaskFactory from './factory/task/aggregateScreeningEvent';
import * as CancelPendingReservationTaskFactory from './factory/task/cancelPendingReservation';
import * as CancelReservationTaskFactory from './factory/task/cancelReservation';
import * as ImportEventsFromCOATaskFactory from './factory/task/importEventsFromCOA';
import * as ImportOffersFromCOATaskFactory from './factory/task/importOffersFromCOA';
import * as ReserveTaskFactory from './factory/task/reserve';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';

import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';

import * as CancelReservationTransactionFactory from './factory/transaction/cancelReservation';
import * as RegisterProgramMembershipTransactionFactory from './factory/transaction/registerProgramMembership';
import * as ReserveTransactionFactory from './factory/transaction/reserve';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';

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
        export import inform = InformActionFactory;
        export namespace register {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = RegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = RegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = RegisterProgramMembershipActionFactory;
        }
        export namespace unRegister {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = UnRegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = UnRegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = UnRegisterProgramMembershipActionFactory;
        }
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
export import categoryCode = CategoryCodeFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieCreativeWorkFactory;
}
export import creativeWorkType = CreativeWorkType;
export namespace event {
    export type ISearchConditions<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.ISearchConditions :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.ISearchConditions :
        EventFactory.ISearchConditions<T>;
    export type IAttributes<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.IAttributes :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IAttributes :
        EventFactory.IAttributes<T>;
    export type IEvent<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.IEvent :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IEvent :
        EventFactory.IEvent<EventFactory.IAttributes<T>>;
    export import screeningEvent = ScreeningEventFactory;
    export import screeningEventSeries = ScreeningEventSeriesFactory;
}
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export import itemAvailability = ItemAvailability;
export import language = LanguageFactory;
export type multilingualString = IMultilingualString;
export namespace offer {
    export import IAddOn = OfferFactory.IAddOn;
    export import IOffer = OfferFactory.IOffer;
    export import ISearchConditions = OfferFactory.ISearchConditions;
    export import product = ProductOfferFactory;
}
export type offerType = OfferType;
export import organizationType = OrganizationType;
export import paymentMethodType = PaymentMethodType;
export import priceCurrency = PriceCurrency;
export namespace place {
    export import movieTheater = MovieTheaterPlaceFactory;
    export import seat = SeatPlaceFactory;
}
export import placeType = PlaceType;
export namespace priceSpecification {
    export type IPriceSpecification<T extends PriceSpecificationType> =
        T extends PriceSpecificationType.CategoryCodeChargeSpecification ? CategoryCodeChargeSpecificationFactory.IPriceSpecification :
        T extends PriceSpecificationType.MovieTicketTypeChargeSpecification ?
        MovieTicketTypeChargeSpecificationFactory.IPriceSpecification :
        T extends PriceSpecificationType.UnitPriceSpecification ? UnitPriceSpecificationFactory.IPriceSpecification :
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
export import programMembership = ProgramMembershipFactory;
export import project = project;
export import propertyValue = PropertyValueFactory;

export import qualitativeValue = QualitativeValueFactory;
export import quantitativeValue = QuantitativeValueFactory;

export namespace reservation {
    export type IPriceSpecification<T extends ReservationType> =
        T extends ReservationType.EventReservation ? EventReservationFactory.IPriceSpecification :
        T extends ReservationType.ReservationPackage ? ReservationPackageFactory.IPriceSpecification :
        ReservationFactory.IPriceSpecification;

    export type IReservationFor<T extends ReservationType> =
        T extends ReservationType.EventReservation ? EventReservationFactory.IReservationFor :
        T extends ReservationType.ReservationPackage ? ReservationFactory.IReservationFor :
        ReservationFactory.IReservationFor;

    export type IReservation<T extends ReservationType> =
        T extends ReservationType.EventReservation ? EventReservationFactory.IReservation :
        T extends ReservationType.ReservationPackage ? ReservationPackageFactory.IReservation :
        ReservationFactory.IReservation<ReservationFactory.IPriceSpecification>;

    export type ISearchConditions<T extends ReservationType> =
        T extends ReservationType.EventReservation ? EventReservationFactory.ISearchConditions :
        T extends ReservationType.ReservationPackage ? ReservationPackageFactory.ISearchConditions :
        ReservationPackageFactory.ISearchConditions;

    export type ISortOrder<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.ISortOrder :
        ReservationFactory.ISortOrder;

    export type ISeat<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.ISeat :
        ReservationFactory.ISeat;

    export type ITicket<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.ITicket<IPriceSpecification<T>> :
        ReservationFactory.ITicket<IPriceSpecification<T>>;

    export type IUnderName<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.IUnderName :
        ReservationFactory.IUnderName;

    export type TicketType<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.TicketType :
        ReservationFactory.TicketType;
}

export import reservationStatusType = ReservationStatusType;

export import reservationType = ReservationType;

export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import IData = TaskFactory.IData;
    export import ISearchConditions = TaskFactory.ISearchConditions;
    export import ITask = TaskFactory.ITask;

    export import aggregateScreeningEvent = AggregateScreeningEventTaskFactory;
    export import cancelPendingReservation = CancelPendingReservationTaskFactory;
    export import cancelReservation = CancelReservationTaskFactory;
    export import importEventsFromCOA = ImportEventsFromCOATaskFactory;
    export import importOffersFromCOA = ImportOffersFromCOATaskFactory;
    export import reserve = ReserveTaskFactory;
    export import triggerWebhook = TriggerWebhookTaskFactory;
}

export import serviceType = ServiceTypeFactory;
export import sortType = SortType;
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;

export namespace transaction {
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IStartParams :
        T extends TransactionType.RegisterProgramMembership ? RegisterProgramMembershipTransactionFactory.IStartParams :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IStartParams :
        never;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IAttributes :
        T extends TransactionType.RegisterProgramMembership ? RegisterProgramMembershipTransactionFactory.IAttributes :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.ITransaction :
        T extends TransactionType.RegisterProgramMembership ? RegisterProgramMembershipTransactionFactory.ITransaction :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.ITransaction :
        never;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IResult :
        T extends TransactionType.RegisterProgramMembership ? RegisterProgramMembershipTransactionFactory.IResult :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IPotentialActions :
        T extends TransactionType.RegisterProgramMembership ? RegisterProgramMembershipTransactionFactory.IPotentialActions :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IPotentialActions :
        never;
    export type ISearchConditions<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.ISearchConditions :
        T extends TransactionType.RegisterProgramMembership ? RegisterProgramMembershipTransactionFactory.ISearchConditions :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.ISearchConditions :
        never;
    export import cancelReservation = CancelReservationTransactionFactory;
    export import registerProgramMembership = RegisterProgramMembershipTransactionFactory;
    export import reserve = ReserveTransactionFactory;
}

export import ticketType = TicketTypeFactory;

export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import unitCode = UnitCode;
export import videoFormatType = VideoFormatType;

import * as DistributorFactory from './factory/distributor';
import * as SubjectFactory from './factory/subject';

/**
 * @deprecated 東映ローカライズなのでそのうち廃止
 */
export import distributor = DistributorFactory;
/**
 * @deprecated 東映ローカライズなのでそのうち廃止
 */
export import subject = SubjectFactory;
