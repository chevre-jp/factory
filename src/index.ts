/**
 * factory
 */
import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as CancelReservationActionFactory from './factory/action/cancel/reservation';
import * as CheckMovieTicketActionFactory from './factory/action/check/paymentMethod/movieTicket';
import * as UseReservationActionFactory from './factory/action/consume/use/reservation';
import * as InformActionFactory from './factory/action/interact/inform';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as RegisterServiceActionFactory from './factory/action/interact/register/service';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as ReserveActionFactory from './factory/action/reserve';
import * as PayActionFactory from './factory/action/trade/pay';
import * as RefundActionFactory from './factory/action/trade/refund';
import * as MoneyTransferActionFactory from './factory/action/transfer/moneyTransfer';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';

import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import * as AccountTitleFactory from './factory/accountTitle';
import * as CategoryCodeFactory from './factory/categoryCode';
import * as ClientUserFactory from './factory/clientUser';
import * as CreativeWorkFactory from './factory/creativeWork';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import CreativeWorkType from './factory/creativeWorkType';
import * as EncodingFormat from './factory/encodingFormat';
import * as EventFactory from './factory/event';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import EventStatusType from './factory/eventStatusType';
import EventType from './factory/eventType';
import * as InvoiceFactory from './factory/invoice';
import ItemAvailability from './factory/itemAvailability';
import * as LanguageFactory from './factory/language';
import * as MerchantReturnPolicyFactory from './factory/merchantReturnPolicy';
import * as MonetaryAmountFactory from './factory/monetaryAmount';
import IMultilingualString from './factory/multilingualString';
import * as OfferFactory from './factory/offer';
import * as OfferCatalogFactory from './factory/offerCatalog';
import OfferType from './factory/offerType';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as OrganizationFactory from './factory/organization';
import { OrganizationType } from './factory/organizationType';
import * as PaymentCardFactory from './factory/paymentMethod/paymentCard';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import * as MovieTicketFactory from './factory/paymentMethod/paymentCard/movieTicket';
import { PaymentMethodType } from './factory/paymentMethodType';
import PaymentStatusType from './factory/paymentStatusType';
import * as PermitFactory from './factory/permit';
import * as PersonFactory from './factory/person';
import PersonType from './factory/personType';
import * as MovieTheaterPlaceFactory from './factory/place/movieTheater';
import * as ScreeningRoomPlaceFactory from './factory/place/screeningRoom';
import * as ScreeningRoomSectionPlaceFactory from './factory/place/screeningRoomSection';
import * as SeatPlaceFactory from './factory/place/seat';
import { PlaceType } from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as PriceSpecificationFactory from './factory/priceSpecification';
import * as CategoryCodeChargeSpecificationFactory from './factory/priceSpecification/categoryCodeChargeSpecification';
import * as CompoundPriceSpecificationFactory from './factory/priceSpecification/compoundPriceSpecification';
import * as MovieTicketTypeChargeSpecificationFactory from './factory/priceSpecification/movieTicketTypeChargeSpecification';
import * as UnitPriceSpecificationFactory from './factory/priceSpecification/unitPriceSpecification';
import PriceSpecificationType from './factory/priceSpecificationType';
import * as ProductFactory from './factory/product';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as project from './factory/project';
import * as PropertyValueFactory from './factory/propertyValue';
import * as QualitativeValueFactory from './factory/qualitativeValue';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import * as OrderReportFactory from './factory/report/order';
import * as ReservationFactory from './factory/reservation';
import * as EventReservationFactory from './factory/reservation/event';
import * as ReservationPackageFactory from './factory/reservation/reservationPackage';
import ReservationStatusType from './factory/reservationStatusType';
import ReservationType from './factory/reservationType';
import * as SellerFactory from './factory/seller';
import * as ServiceFactory from './factory/service';
import * as PaymentServiceFactory from './factory/service/paymentService';
import * as WebAPIServiceFactory from './factory/service/webAPI';
import * as ServiceTypeFactory from './factory/serviceType';
import SortType from './factory/sortType';
import { UnitCode } from './factory/unitCode';

import * as TaskFactory from './factory/task';
import * as AggregateOnProjectTaskFactory from './factory/task/aggregateOnProject';
import * as AggregateScreeningEventTaskFactory from './factory/task/aggregateScreeningEvent';
import * as CancelMoneyTransferTaskFactory from './factory/task/cancelMoneyTransfer';
import * as CancelPendingReservationTaskFactory from './factory/task/cancelPendingReservation';
import * as CancelReservationTaskFactory from './factory/task/cancelReservation';
import * as ImportEventCapacitiesFromCOATaskFactory from './factory/task/importEventCapacitiesFromCOA';
import * as ImportEventsFromCOATaskFactory from './factory/task/importEventsFromCOA';
import * as ImportOffersFromCOATaskFactory from './factory/task/importOffersFromCOA';
import * as MoneyTransferTaskFactory from './factory/task/moneyTransfer';
import * as PayTaskFactory from './factory/task/pay';
import * as RefundTaskFactory from './factory/task/refund';
import * as RegisterServiceTaskFactory from './factory/task/registerService';
import * as ReserveTaskFactory from './factory/task/reserve';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as VoidPaymentTaskFactory from './factory/task/voidPayment';

import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';

import * as CancelReservationTransactionFactory from './factory/transaction/cancelReservation';
import * as MoneyTransferTransactionFactory from './factory/transaction/moneyTransfer';
import * as PayTransactionFactory from './factory/transaction/pay';
import * as RefundTransactionFactory from './factory/transaction/refund';
import * as RegisterServiceTransactionFactory from './factory/transaction/registerService';
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
    export import ISortOrder = ActionFactory.ISortOrder;
    export import ISearchConditions = ActionFactory.ISearchConditions;

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

    export namespace check {
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import movieTicket = CheckMovieTicketActionFactory;
        }
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
            // tslint:disable-next-line:no-shadowed-variable
            export import service = RegisterServiceActionFactory;
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
        export import pay = PayActionFactory;
        export import refund = RefundActionFactory;
    }

    export namespace transfer {
        export import moneyTransfer = MoneyTransferActionFactory;
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
                export import email = SendEmailMessageActionFactory;
            }
        }
    }

    export namespace consume {
        export namespace use {
            // tslint:disable-next-line:no-shadowed-variable
            export import reservation = UseReservationActionFactory;
        }
    }
    export import reserve = ReserveActionFactory;
}

export import accountTitle = AccountTitleFactory;
export import categoryCode = CategoryCodeFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export import ICreativeWork = CreativeWorkFactory.ICreativeWork;
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
export import encodingFormat = EncodingFormat;
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export import invoice = InvoiceFactory;
export import itemAvailability = ItemAvailability;
export import language = LanguageFactory;
export import merchantReturnPolicy = MerchantReturnPolicyFactory;
export import monetaryAmount = MonetaryAmountFactory;
export type multilingualString = IMultilingualString;

export import offer = OfferFactory;

export import offerCatalog = OfferCatalogFactory;
export import offerType = OfferType;
export import order = OrderFactory;
export import orderStatus = OrderStatus;

export import organization = OrganizationFactory;
export import organizationType = OrganizationType;

export import paymentMethodType = PaymentMethodType;

export namespace paymentMethod {
    export type ISearchConditions = any;
    export type IPaymentMethod = CreditCardFactory.ICheckedCard | MovieTicketFactory.IMovieTicket;

    export namespace paymentCard {
        export import IPaymentCard = PaymentCardFactory.IPaymentCard;
        export import creditCard = CreditCardFactory;
        export import movieTicket = MovieTicketFactory;
    }
}
export import paymentStatusType = PaymentStatusType;

export import permit = PermitFactory;
export import person = PersonFactory;
export import personType = PersonType;

export import priceCurrency = PriceCurrency;
export namespace place {
    export import movieTheater = MovieTheaterPlaceFactory;
    export import screeningRoom = ScreeningRoomPlaceFactory;
    export import screeningRoomSection = ScreeningRoomSectionPlaceFactory;
    export import seat = SeatPlaceFactory;
}
export import placeType = PlaceType;
export namespace priceSpecification {
    export import IAccounting = PriceSpecificationFactory.IAccounting;
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
export import product = ProductFactory;
export import project = project;
export import propertyValue = PropertyValueFactory;

export import qualitativeValue = QualitativeValueFactory;
export import quantitativeValue = QuantitativeValueFactory;

export namespace report {
    // tslint:disable-next-line:no-shadowed-variable
    export import order = OrderReportFactory;
}

export namespace reservation {
    export type IBroker<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.IBroker :
        ReservationFactory.IBroker;

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

export import seller = SellerFactory;

export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import IData = TaskFactory.IData;
    export import ISearchConditions = TaskFactory.ISearchConditions;
    export import ITask = TaskFactory.ITask;

    export import aggregateOnProject = AggregateOnProjectTaskFactory;
    export import aggregateScreeningEvent = AggregateScreeningEventTaskFactory;
    export import cancelMoneyTransfer = CancelMoneyTransferTaskFactory;
    export import cancelPendingReservation = CancelPendingReservationTaskFactory;
    export import cancelReservation = CancelReservationTaskFactory;
    export import importEventCapacitiesFromCOA = ImportEventCapacitiesFromCOATaskFactory;
    export import importEventsFromCOA = ImportEventsFromCOATaskFactory;
    export import importOffersFromCOA = ImportOffersFromCOATaskFactory;
    export import moneyTransfer = MoneyTransferTaskFactory;
    export import pay = PayTaskFactory;
    export import refund = RefundTaskFactory;
    export import registerService = RegisterServiceTaskFactory;
    export import reserve = ReserveTaskFactory;
    export import sendEmailMessage = SendEmailMessageTaskFactory;
    export import triggerWebhook = TriggerWebhookTaskFactory;
    export import voidPayment = VoidPaymentTaskFactory;
}

export namespace service {
    export import IHasOfferCatalog = ServiceFactory.IHasOfferCatalog;
    export import IPointAward = ServiceFactory.IPointAward;
    export import IService = ServiceFactory.IProduct;
    export import IServiceOutput = ServiceFactory.IServiceOutput;
    export import paymentService = PaymentServiceFactory;
    export import webAPI = WebAPIServiceFactory;
}

export import serviceType = ServiceTypeFactory;
export import sortType = SortType;
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;

export namespace transaction {
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IStartParams :
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IStartParams :
        T extends TransactionType.Pay ? PayTransactionFactory.IStartParams :
        T extends TransactionType.Refund ? RefundTransactionFactory.IStartParams :
        T extends TransactionType.RegisterService ? RegisterServiceTransactionFactory.IStartParams :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IStartParams :
        never;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IAttributes :
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IAttributes :
        T extends TransactionType.Pay ? PayTransactionFactory.IAttributes :
        T extends TransactionType.Refund ? RefundTransactionFactory.IAttributes :
        T extends TransactionType.RegisterService ? RegisterServiceTransactionFactory.IAttributes :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.ITransaction :
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ITransaction :
        T extends TransactionType.Pay ? PayTransactionFactory.ITransaction :
        T extends TransactionType.Refund ? RefundTransactionFactory.ITransaction :
        T extends TransactionType.RegisterService ? RegisterServiceTransactionFactory.ITransaction :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.ITransaction :
        never;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IResult :
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IResult :
        T extends TransactionType.Pay ? PayTransactionFactory.IResult :
        T extends TransactionType.Refund ? RefundTransactionFactory.IResult :
        T extends TransactionType.RegisterService ? RegisterServiceTransactionFactory.IResult :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.IPotentialActions :
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IPotentialActions :
        T extends TransactionType.Pay ? PayTransactionFactory.IPotentialActions :
        T extends TransactionType.Refund ? RefundTransactionFactory.IPotentialActions :
        T extends TransactionType.RegisterService ? RegisterServiceTransactionFactory.IPotentialActions :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.IPotentialActions :
        never;
    export type ISearchConditions<T extends TransactionType> =
        T extends TransactionType.CancelReservation ? CancelReservationTransactionFactory.ISearchConditions :
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ISearchConditions :
        T extends TransactionType.Pay ? PayTransactionFactory.ISearchConditions :
        T extends TransactionType.Refund ? RefundTransactionFactory.ISearchConditions :
        T extends TransactionType.RegisterService ? RegisterServiceTransactionFactory.ISearchConditions :
        T extends TransactionType.Reserve ? ReserveTransactionFactory.ISearchConditions :
        never;

    export import cancelReservation = CancelReservationTransactionFactory;
    export import moneyTransfer = MoneyTransferTransactionFactory;
    export import pay = PayTransactionFactory;
    export import refund = RefundTransactionFactory;
    export import registerService = RegisterServiceTransactionFactory;
    export import reserve = ReserveTransactionFactory;
}

export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import unitCode = UnitCode;
