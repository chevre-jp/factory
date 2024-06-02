/**
 * factory
 */
import * as waiter from '@waiter/factory';

import * as cognito from './cognito';

export import cognito = cognito;
export import waiter = waiter;

import * as AccountFactory from './account';

import * as ActionFactory from './action';
import * as AcceptCOAOfferActionFactory from './action/accept/coaOffer';
import * as AcceptPayActionFactory from './action/accept/pay';
import * as AuthorizeActionFactory from './action/authorize';
import * as AuthorizeEventServiceOfferActionFactory from './action/authorize/offer/eventService';
import * as AuthorizeMoneyTransferOfferActionFactory from './action/authorize/offer/moneyTransfer';
import * as AuthorizeProductOfferActionFactory from './action/authorize/offer/product';
import * as AuthorizeAnyPaymentActionFactory from './action/authorize/paymentMethod/any';
import * as CancelReservationActionFactory from './action/cancel/reservation';
import * as CheckMovieTicketActionFactory from './action/check/paymentMethod/movieTicket';
import * as CheckTokenActionFactory from './action/check/token';
import * as UseReservationActionFactory from './action/consume/use/reservation';
import * as ConfirmMoneyTransferActionFactory from './action/interact/confirm/moneyTransfer';
import * as ConfirmPayActionFactory from './action/interact/confirm/pay';
import * as ConfirmRegisterServiceActionFactory from './action/interact/confirm/registerService';
import * as ConfirmReservationActionFactory from './action/interact/confirm/reservation';
import * as InformActionFactory from './action/interact/inform';
import * as RegisterActionFactory from './action/interact/register';
import * as RegisterServiceActionFactory from './action/interact/register/service';
import * as ReserveActionFactory from './action/reserve';
import * as OrderActionFactory from './action/trade/order';
import * as PayActionFactory from './action/trade/pay';
import * as RefundActionFactory from './action/trade/refund';
import * as GiveActionFactory from './action/transfer/give';
import * as GivePointAwardActionFactory from './action/transfer/give/pointAward';
import * as MoneyTransferActionFactory from './action/transfer/moneyTransfer';
import * as ReturnMoneyTransferActionFactory from './action/transfer/return/moneyTransfer';
import * as ReturnOrderActionFactory from './action/transfer/return/order';
import * as ReturnPaymentMethodActionFactory from './action/transfer/return/paymentMethod';
import * as ReturnPointAwardActionFactory from './action/transfer/return/pointAward';
import * as ReturnReserveTransactionActionFactory from './action/transfer/return/reserveTransaction';
import * as SendEmailMessageActionFactory from './action/transfer/send/message/email';
import * as SendOrderActionFactory from './action/transfer/send/order';
import * as DeleteActionFactory from './action/update/delete';
import * as DeleteMemberActionFactory from './action/update/delete/member';
import * as ReplaceActionFactory from './action/update/replace';

import { ActionStatusType } from './actionStatusType';
import { ActionType } from './actionType';

import * as AccountTitleFactory from './accountTitle';
import { AccountType } from './accountType';
import * as AdditionalPropertyFactory from './additionalProperty';
import * as AuthorizationFactory from './authorization';
import * as CategoryCodeFactory from './categoryCode';
import * as ClientUserFactory from './clientUser';
import * as CreativeWorkFactory from './creativeWork';
import * as CommentFactory from './creativeWork/comment';
import * as EmailMessageFactory from './creativeWork/message/email';
import * as MovieFactory from './creativeWork/movie';
import * as NoteDigitalDocumentFactory from './creativeWork/noteDigitalDocument';
import * as SoftwareApplicationFactory from './creativeWork/softwareApplication';
import * as WebApplicationFactory from './creativeWork/softwareApplication/webApplication';
import { CreativeWorkType } from './creativeWorkType';
import * as CustomerFactory from './customer';
import * as EncodingFormat from './encodingFormat';
import * as AnyEventFactory from './event/anyEvent';
import * as ScreeningEventFactory from './event/screeningEvent';
import * as ScreeningEventSeriesFactory from './event/screeningEventSeries';
import { EventStatusType } from './eventStatusType';
import { EventType } from './eventType';
import * as IAMFactory from './iam';
import * as InvoiceFactory from './invoice';
import { ItemAvailability } from './itemAvailability';
import * as LanguageFactory from './language';
import * as MerchantReturnPolicyFactory from './merchantReturnPolicy';
import * as MonetaryAmountFactory from './monetaryAmount';
import { IMultilingualString } from './multilingualString';
import * as OfferFactory from './offer';
import * as AggregateOfferFactory from './offer/aggregateOffer';
import * as OfferCatalogFactory from './offerCatalog';
import * as OfferItemConditionFactory from './offerItemCondition';
import { OfferType } from './offerType';
import * as OrderFactory from './order';
import { OrderStatus } from './orderStatus';
import * as OrganizationFactory from './organization';
import { OrganizationType } from './organizationType';
import * as OwnershipInfoFactory from './ownershipInfo';
import * as PaymentCardFactory from './paymentMethod/paymentCard';
import * as CreditCardFactory from './paymentMethod/paymentCard/creditCard';
import * as MovieTicketFactory from './paymentMethod/paymentCard/movieTicket';
import { PaymentStatusType } from './paymentStatusType';
import * as PermitFactory from './permit';
import * as PersonFactory from './person';
import { PersonType } from './personType';
import * as BusStopFactory from './place/busStop';
import * as MovieTheaterPlaceFactory from './place/movieTheater';
import * as ScreeningRoomPlaceFactory from './place/screeningRoom';
import * as ScreeningRoomSectionPlaceFactory from './place/screeningRoomSection';
import * as SeatPlaceFactory from './place/seat';
import { PlaceType } from './placeType';
import { PriceCurrency } from './priceCurrency';
import * as PriceSpecificationFactory from './priceSpecification';
import * as CategoryCodeChargeSpecificationFactory from './priceSpecification/categoryCodeChargeSpecification';
import * as CompoundPriceSpecificationFactory from './priceSpecification/compoundPriceSpecification';
import * as MovieTicketTypeChargeSpecificationFactory from './priceSpecification/movieTicketTypeChargeSpecification';
import * as UnitPriceSpecificationFactory from './priceSpecification/unitPriceSpecification';
import { PriceSpecificationType } from './priceSpecificationType';
import * as ProductFactory from './product';
import * as ProgramMembershipFactory from './programMembership';
import * as project from './project';
import * as PropertyValueFactory from './propertyValue';
import * as LocationFeatureSpecificationFactory from './propertyValue/locationFeatureSpecification';
import * as QualitativeValueFactory from './qualitativeValue';
import * as QuantitativeValueFactory from './quantitativeValue';
import * as RecipeFactory from './recipe';
import * as AccountingReportFactory from './report/accountingReport';
import * as ReservationFactory from './reservation';
import * as BusReservationFactory from './reservation/busReservation';
import * as EventReservationFactory from './reservation/event';
import * as ReservationPackageFactory from './reservation/reservationPackage';
import { ReservationStatusType } from './reservationStatusType';
import { ReservationType } from './reservationType';
import * as SellerFactory from './seller';
import * as PaymentServiceFactory from './service/paymentService';
import * as WebAPIServiceFactory from './service/webAPI';
import { SortType } from './sortType';
import * as ThingFactory from './thing';
import * as BusTripFactory from './trip/busTrip';
import { TripType } from './tripType';
import { UnitCode } from './unitCode';
import * as UnitPriceOfferFactory from './unitPriceOffer';

import * as TaskFactory from './task';
import * as AcceptCOAOfferTaskFactory from './task/acceptCOAOffer';
import * as AccountMoneyTransferTaskFactory from './task/accountMoneyTransfer';
import * as AggregateOffersTaskFactory from './task/aggregateOffers';
import * as AggregateScreeningEventTaskFactory from './task/aggregateScreeningEvent';
import * as AggregateUseActionsOnEventTaskFactory from './task/aggregateUseActionsOnEvent';
import * as AuthorizePaymentTaskFactory from './task/authorizePayment';
import * as CancelAccountMoneyTransferTaskFactory from './task/cancelAccountMoneyTransfer';
import * as CancelMoneyTransferTaskFactory from './task/cancelMoneyTransfer';
import * as CancelPendingReservationTaskFactory from './task/cancelPendingReservation';
import * as CancelReservationTaskFactory from './task/cancelReservation';
import * as CheckMovieTicketTaskFactory from './task/checkMovieTicket';
import * as CheckResourceTaskFactory from './task/checkResource';
import * as ConfirmMoneyTransferTaskFactory from './task/confirmMoneyTransfer';
import * as ConfirmPayTransactionTaskFactory from './task/confirmPayTransaction';
import * as ConfirmRegisterServiceTaskFactory from './task/confirmRegisterService';
import * as ConfirmRegisterServiceTransactionTaskFactory from './task/confirmRegisterServiceTransaction';
import * as ConfirmReserveTransactionTaskFactory from './task/confirmReserveTransaction';
import * as CreateAccountingReportTaskFactory from './task/createAccountingReport';
import * as CreateEventTaskFactory from './task/createEvent';
import * as DeleteTransactionTaskFactory from './task/deleteTransaction';
import * as GivePointAwardTaskFactory from './task/givePointAward';
import * as ImportEventCapacitiesFromCOATaskFactory from './task/importEventCapacitiesFromCOA';
import * as ImportEventsFromCOATaskFactory from './task/importEventsFromCOA';
import * as ImportOffersFromCOATaskFactory from './task/importOffersFromCOA';
import * as MoneyTransferTaskFactory from './task/moneyTransfer';
import * as OnAssetTransactionStatusChangedTaskFactory from './task/onAssetTransactionStatusChanged';
import * as OnAuthorizationCreatedTaskFactory from './task/onAuthorizationCreated';
import * as OnEventChangedTaskFactory from './task/onEventChanged';
import * as OnOrderPaymentCompletedTaskFactory from './task/onOrderPaymentCompleted';
import * as OnResourceUpdatedTaskFactory from './task/onResourceUpdated';
import * as PayTaskFactory from './task/pay';
import * as PlaceOrderTaskFactory from './task/placeOrder';
import * as PublishPaymentUrlTaskFactory from './task/publishPaymentUrl';
import * as RefundTaskFactory from './task/refund';
import * as RegisterServiceTaskFactory from './task/registerService';
import * as ReserveTaskFactory from './task/reserve';
import * as ReturnMoneyTransferTaskFactory from './task/returnMoneyTransfer';
import * as ReturnOrderTaskFactory from './task/returnOrder';
import * as ReturnPayTransactionTaskFactory from './task/returnPayTransaction';
import * as ReturnPointAwardTaskFactory from './task/returnPointAward';
import * as ReturnReserveTransactionTaskFactory from './task/returnReserveTransaction';
import * as SendEmailMessageTaskFactory from './task/sendEmailMessage';
import * as SendOrderTaskFactory from './task/sendOrder';
import * as TriggerWebhookTaskFactory from './task/triggerWebhook';
import * as UseReservationTaskFactory from './task/useReservation';
import * as VoidMoneyTransferTransactionTaskFactory from './task/voidMoneyTransferTransaction';
import * as VoidPaymentTaskFactory from './task/voidPayment';
import * as VoidPayTransactionTaskFactory from './task/voidPayTransaction';
import * as VoidRegisterServiceTransactionTaskFactory from './task/voidRegisterServiceTransaction';
import * as VoidReserveTransactionTaskFactory from './task/voidReserveTransaction';

import { TaskName } from './taskName';
import { TaskStatus } from './taskStatus';

import * as AssetTransactionFactory from './assetTransaction';
import * as CancelReservationAssetTransactionFactory from './assetTransaction/cancelReservation';
import * as MoneyTransferAssetTransactionFactory from './assetTransaction/moneyTransfer';
import * as PayAssetTransactionFactory from './assetTransaction/pay';
import * as RefundAssetTransactionFactory from './assetTransaction/refund';
import * as RegisterServiceAssetTransactionFactory from './assetTransaction/registerService';
import * as ReserveAssetTransactionFactory from './assetTransaction/reserve';
import { AssetTransactionType } from './assetTransactionType';
import { TransactionStatusType } from './transactionStatusType';
import { TransactionTasksExportationStatus } from './transactionTasksExportationStatus';

import * as TransactionFactory from './transaction';
import * as MoneyTransferTransactionFactory from './transaction/moneyTransfer';
import * as PlaceOrderTransactionFactory from './transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './transaction/returnOrder';
import { TransactionType } from './transactionType';

import { ErrorCode } from './errorCode';
import * as errors from './errors';

export import errors = errors;
export import errorCode = ErrorCode;
export import account = AccountFactory;
export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IDynamicAttributes = ActionFactory.IDynamicAttributes;
    export import IParticipantAsWebApplication = ActionFactory.IParticipantAsWebApplication;
    export import IParticipantAsPerson = ActionFactory.IParticipantAsPerson;
    export import IParticipantAsSeller = ActionFactory.IParticipantAsSeller;
    export import IParticipantAsProject = ActionFactory.IParticipantAsProject;
    export import IParticipantAsCustomer = ActionFactory.IParticipantAsCustomer;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;
    export import ISortOrder = ActionFactory.ISortOrder;
    export import ISearchConditions = ActionFactory.ISearchConditions;

    // export import accept = AcceptActionFactory;
    export namespace accept {
        export import coaOffer = AcceptCOAOfferActionFactory;
        export import pay = AcceptPayActionFactory;
    }
    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import any = AuthorizeAnyPaymentActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            export import eventService = AuthorizeEventServiceOfferActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import moneyTransfer = AuthorizeMoneyTransferOfferActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import product = AuthorizeProductOfferActionFactory;
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
        export import token = CheckTokenActionFactory;
    }

    export namespace interact {
        export namespace confirm {
            export import moneyTransfer = ConfirmMoneyTransferActionFactory;
            export import registerService = ConfirmRegisterServiceActionFactory;
            export import pay = ConfirmPayActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import reservation = ConfirmReservationActionFactory;
        }
        export import inform = InformActionFactory;
        export namespace register {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = RegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = RegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import service = RegisterServiceActionFactory;
        }
    }

    export namespace trade {
        // tslint:disable-next-line:no-shadowed-variable
        export import order = OrderActionFactory;
        export import pay = PayActionFactory;
        export import refund = RefundActionFactory;
    }

    export namespace transfer {
        export import moneyTransfer = MoneyTransferActionFactory;
        export namespace give {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = GiveActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = GiveActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import pointAward = GivePointAwardActionFactory;
        }

        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import moneyTransfer = ReturnMoneyTransferActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import order = ReturnOrderActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import paymentMethod = ReturnPaymentMethodActionFactory;
            export import pointAward = ReturnPointAwardActionFactory;
            export import reserveTransaction = ReturnReserveTransactionActionFactory;
        }

        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
            // tslint:disable-next-line:no-shadowed-variable
            export import order = SendOrderActionFactory;
        }
    }

    export namespace update {
        export namespace deleteAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = DeleteActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = DeleteActionFactory.IAttributes;
            export import member = DeleteMemberActionFactory;
        }
        export import replace = ReplaceActionFactory;
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
export import accountType = AccountType;
export import additionalProperty = AdditionalPropertyFactory;
export import aggregateOffer = AggregateOfferFactory;
export import authorization = AuthorizationFactory;
export import categoryCode = CategoryCodeFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export import ICreativeWork = CreativeWorkFactory.ICreativeWork;
    export import comment = CommentFactory;
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieFactory;
    export import noteDigitalDocument = NoteDigitalDocumentFactory;
    export namespace softwareApplication {
        export import ISoftwareApplication = SoftwareApplicationFactory.ISoftwareApplication;
        export import webApplication = WebApplicationFactory;
    }
}
export import creativeWorkType = CreativeWorkType;
export import customer = CustomerFactory;
export namespace event {
    export type ISearchConditions<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.ISearchConditions :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.ISearchConditions :
        T extends EventType.Event ? AnyEventFactory.ISearchConditions :
        never;
    export type IAttributes<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.IAttributes :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IAttributes :
        T extends EventType.Event ? AnyEventFactory.IAttributes :
        never;
    export type IEvent<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.IEvent :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IEvent :
        T extends EventType.Event ? AnyEventFactory.IEvent :
        never;
    export type ICreateParams<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.ICreateParams :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.ICreateParams :
        T extends EventType.Event ? AnyEventFactory.ICreateParams :
        never;
    export type IUpdateParams<T extends EventType> =
        T extends EventType.ScreeningEvent ? ScreeningEventFactory.IUpdateParams :
        T extends EventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.ICreateParams :
        T extends EventType.Event ? AnyEventFactory.IUpdateParams :
        never;
    // tslint:disable-next-line:no-shadowed-variable
    export import event = AnyEventFactory;
    export import screeningEvent = ScreeningEventFactory;
    export import screeningEventSeries = ScreeningEventSeriesFactory;
}
export import encodingFormat = EncodingFormat;
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export import iam = IAMFactory;
export import invoice = InvoiceFactory;
export import itemAvailability = ItemAvailability;
export import language = LanguageFactory;
export import merchantReturnPolicy = MerchantReturnPolicyFactory;
export import monetaryAmount = MonetaryAmountFactory;
export type multilingualString = IMultilingualString;
export import offer = OfferFactory;
export import offerCatalog = OfferCatalogFactory;
export import offerItemCondition = OfferItemConditionFactory;
export import offerType = OfferType;
export import order = OrderFactory;
export import orderStatus = OrderStatus;
export import organization = OrganizationFactory;
export import organizationType = OrganizationType;
export import ownershipInfo = OwnershipInfoFactory;

export namespace paymentMethod {
    export type ISearchConditions = any;
    export type IPaymentMethod = CreditCardFactory.ICheckedCard | MovieTicketFactory.IMovieTicketPaymentCard;

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
    export import busStop = BusStopFactory;
    export import movieTheater = MovieTheaterPlaceFactory;
    export import screeningRoom = ScreeningRoomPlaceFactory;
    export import screeningRoomSection = ScreeningRoomSectionPlaceFactory;
    export import seat = SeatPlaceFactory;
}
export import placeType = PlaceType;
export namespace priceSpecification {
    export import IAccounting = PriceSpecificationFactory.IAccounting;
    export import IEligibleQuantity = PriceSpecificationFactory.IEligibleQuantity;
    export import IEligibleTransactionVolume = PriceSpecificationFactory.IEligibleTransactionVolume;
    export type IPriceSpecification<T extends PriceSpecificationType> =
        T extends PriceSpecificationType.CategoryCodeChargeSpecification ? CategoryCodeChargeSpecificationFactory.IPriceSpecification :
        T extends PriceSpecificationType.MovieTicketTypeChargeSpecification ?
        MovieTicketTypeChargeSpecificationFactory.IPriceSpecification :
        T extends PriceSpecificationType.UnitPriceSpecification ? UnitPriceSpecificationFactory.IPriceSpecification :
        PriceSpecificationFactory.IPriceSpecification<PriceSpecificationType>;
    export type ISearchConditions<T extends PriceSpecificationType> =
        PriceSpecificationFactory.ISearchConditions<T>;

    export import unitPrice = UnitPriceSpecificationFactory;
}
export namespace compoundPriceSpecification {
    export type IPriceSpecification<T extends PriceSpecificationType> =
        CompoundPriceSpecificationFactory.IPriceSpecification<priceSpecification.IPriceSpecification<T>>;
}
export import priceSpecificationType = PriceSpecificationType;
export import programMembership = ProgramMembershipFactory;
export import product = ProductFactory;
export import project = project;
export namespace propertyValue {
    export import PropertyValueType = PropertyValueFactory.PropertyValueType;
    export import IPropertyValue = PropertyValueFactory.IPropertyValue;
    export import locationFeatureSpecification = LocationFeatureSpecificationFactory;
}

export import qualitativeValue = QualitativeValueFactory;
export import quantitativeValue = QuantitativeValueFactory;
export import recipe = RecipeFactory;

export namespace report {
    export import accountingReport = AccountingReportFactory;
}

export namespace reservation {
    export import busReservation = BusReservationFactory;
    export import eventReservation = EventReservationFactory;

    export type IBroker<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.IBroker :
        T extends ReservationType.EventReservation ? ReservationFactory.IBroker :
        ReservationFactory.IBroker;
    export type IIssuedThrough<T extends ReservationType> =
        T extends ReservationType.BusReservation ? BusReservationFactory.IIssuedThrough :
        T extends ReservationType.EventReservation ? EventReservationFactory.IIssuedThrough :
        ReservationFactory.IIssuedThrough;
    export type IPriceSpecification<T extends ReservationType> =
        T extends ReservationType.BusReservation ? BusReservationFactory.IPriceSpecification :
        T extends ReservationType.EventReservation ? EventReservationFactory.IPriceSpecification :
        T extends ReservationType.ReservationPackage ? ReservationPackageFactory.IPriceSpecification :
        ReservationFactory.IPriceSpecification;

    export type IProgramMembershipUsed<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.IProgramMembershipUsed :
        T extends ReservationType.EventReservation ? ReservationFactory.IProgramMembershipUsed :
        ReservationFactory.IProgramMembershipUsed;
    export import IProvider = ReservationFactory.IProvider;
    export type IReservationFor<T extends ReservationType> =
        T extends ReservationType.BusReservation ? BusReservationFactory.IReservationFor :
        T extends ReservationType.EventReservation ? EventReservationFactory.IReservationFor :
        T extends ReservationType.ReservationPackage ? ReservationFactory.IReservationFor :
        ReservationFactory.IReservationFor;

    export type IReservation<T extends ReservationType> =
        T extends ReservationType.BusReservation ? BusReservationFactory.IReservation :
        T extends ReservationType.EventReservation ? EventReservationFactory.IReservation :
        T extends ReservationType.ReservationPackage ? ReservationPackageFactory.IReservation :
        ReservationFactory.IReservation<ReservationFactory.IPriceSpecification>;

    export type ISearchConditions<T extends ReservationType> =
        T extends ReservationType.BusReservation ? BusReservationFactory.ISearchConditions :
        T extends ReservationType.EventReservation ? EventReservationFactory.ISearchConditions :
        T extends ReservationType.ReservationPackage ? ReservationPackageFactory.ISearchConditions :
        ReservationPackageFactory.ISearchConditions;

    export type ISortOrder<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.ISortOrder :
        T extends ReservationType.EventReservation ? ReservationFactory.ISortOrder :
        ReservationFactory.ISortOrder;

    export type ISeat<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.ISeat :
        T extends ReservationType.EventReservation ? ReservationFactory.ISeat :
        ReservationFactory.ISeat;

    export type ISubReservation<T extends ReservationType> =
        T extends ReservationType.BusReservation ? BusReservationFactory.ISubReservation :
        T extends ReservationType.EventReservation ? EventReservationFactory.ISubReservation :
        T extends ReservationType.ReservationPackage ? ReservationPackageFactory.ISubReservation :
        any;

    export import ITicket = ReservationFactory.ITicket;

    export type IUnderName<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.IUnderName :
        T extends ReservationType.EventReservation ? ReservationFactory.IUnderName :
        ReservationFactory.IUnderName;

    export type ITicketIssuedBy<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.ITicketIssuedBy :
        T extends ReservationType.EventReservation ? ReservationFactory.ITicketIssuedBy :
        ReservationFactory.ITicketIssuedBy;

    export type TicketType<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.TicketType :
        T extends ReservationType.EventReservation ? ReservationFactory.TicketType :
        ReservationFactory.TicketType;

    export type ITicketType<T extends ReservationType> =
        T extends ReservationType.BusReservation ? ReservationFactory.ITicketType :
        T extends ReservationType.EventReservation ? ReservationFactory.ITicketType :
        ReservationFactory.ITicketType;

    export import IServiceTypeOfIssuedThrough = ReservationFactory.IServiceTypeOfIssuedThrough;
    export import IServiceLocationContainedInPlace = ReservationFactory.IServiceLocationContainedInPlace;
    export import IServiceLocation = ReservationFactory.IServiceLocation;
    export import IServiceChannel = ReservationFactory.IServiceChannel;
}

export import reservationStatusType = ReservationStatusType;

export import reservationType = ReservationType;

export import seller = SellerFactory;

export namespace task {
    export type IData<T extends TaskName | string> =
        T extends TaskName.ConfirmReserveTransaction ? ConfirmReserveTransactionTaskFactory.IData :
        T extends TaskName.CreateEvent ? CreateEventTaskFactory.IData :
        T extends TaskName.CreateAccountingReport ? CreateAccountingReportTaskFactory.IData :
        T extends TaskName.DeleteTransaction ? DeleteTransactionTaskFactory.IData :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IData :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.IData :
        T extends TaskName.OnAssetTransactionStatusChanged ? OnAssetTransactionStatusChangedTaskFactory.IData :
        T extends TaskName.OnAuthorizationCreated ? OnAuthorizationCreatedTaskFactory.IData :
        T extends TaskName.OnEventChanged ? OnEventChangedTaskFactory.IData :
        T extends TaskName.OnOrderPaymentCompleted ? OnOrderPaymentCompletedTaskFactory.IData :
        T extends TaskName.OnResourceUpdated ? OnResourceUpdatedTaskFactory.IData :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IData :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.IData :
        T extends TaskName.ConfirmRegisterServiceTransaction ? ConfirmRegisterServiceTransactionTaskFactory.IData :
        T extends TaskName.ReturnMoneyTransfer ? ReturnMoneyTransferTaskFactory.IData :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IData :
        T extends TaskName.ReturnPayTransaction ? ReturnPayTransactionTaskFactory.IData :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IData :
        T extends TaskName.ReturnReserveTransaction ? ReturnReserveTransactionTaskFactory.IData :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IData :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends TaskName.ConfirmPayTransaction ? ConfirmPayTransactionTaskFactory.IData :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IData :
        T extends TaskName.UseReservation ? UseReservationTaskFactory.IData :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.IData :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.IData :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.IData :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.IData :
        TaskFactory.IData;
    export type IAttributes<T extends TaskName | string> =
        T extends TaskName.ConfirmReserveTransaction ? ConfirmReserveTransactionTaskFactory.IAttributes :
        T extends TaskName.CreateEvent ? CreateEventTaskFactory.IAttributes :
        T extends TaskName.CreateAccountingReport ? CreateAccountingReportTaskFactory.IAttributes :
        T extends TaskName.DeleteTransaction ? DeleteTransactionTaskFactory.IAttributes :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IAttributes :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.IAttributes :
        T extends TaskName.OnAssetTransactionStatusChanged ? OnAssetTransactionStatusChangedTaskFactory.IAttributes :
        T extends TaskName.OnAuthorizationCreated ? OnAuthorizationCreatedTaskFactory.IAttributes :
        T extends TaskName.OnEventChanged ? OnEventChangedTaskFactory.IAttributes :
        T extends TaskName.OnOrderPaymentCompleted ? OnOrderPaymentCompletedTaskFactory.IAttributes :
        T extends TaskName.OnResourceUpdated ? OnResourceUpdatedTaskFactory.IAttributes :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IAttributes :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.IAttributes :
        T extends TaskName.ConfirmRegisterServiceTransaction ? ConfirmRegisterServiceTransactionTaskFactory.IAttributes :
        T extends TaskName.ReturnMoneyTransfer ? ReturnMoneyTransferTaskFactory.IAttributes :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IAttributes :
        T extends TaskName.ReturnPayTransaction ? ReturnPayTransactionTaskFactory.IAttributes :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IAttributes :
        T extends TaskName.ReturnReserveTransaction ? ReturnReserveTransactionTaskFactory.IAttributes :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IAttributes :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends TaskName.ConfirmPayTransaction ? ConfirmPayTransactionTaskFactory.IAttributes :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IAttributes :
        T extends TaskName.UseReservation ? UseReservationTaskFactory.IAttributes :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.IAttributes :
        TaskFactory.IAttributes;
    export type ITask<T extends TaskName | string> =
        T extends TaskName.ConfirmReserveTransaction ? ConfirmReserveTransactionTaskFactory.ITask :
        T extends TaskName.CreateEvent ? CreateEventTaskFactory.ITask :
        T extends TaskName.CreateAccountingReport ? CreateAccountingReportTaskFactory.ITask :
        T extends TaskName.DeleteTransaction ? DeleteTransactionTaskFactory.ITask :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.ITask :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.ITask :
        T extends TaskName.OnAssetTransactionStatusChanged ? OnAssetTransactionStatusChangedTaskFactory.ITask :
        T extends TaskName.OnAuthorizationCreated ? OnAuthorizationCreatedTaskFactory.ITask :
        T extends TaskName.OnEventChanged ? OnEventChangedTaskFactory.ITask :
        T extends TaskName.OnOrderPaymentCompleted ? OnOrderPaymentCompletedTaskFactory.ITask :
        T extends TaskName.OnResourceUpdated ? OnResourceUpdatedTaskFactory.ITask :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.ITask :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.ITask :
        T extends TaskName.ConfirmRegisterServiceTransaction ? ConfirmRegisterServiceTransactionTaskFactory.ITask :
        T extends TaskName.ReturnMoneyTransfer ? ReturnMoneyTransferTaskFactory.ITask :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.ITask :
        T extends TaskName.ReturnPayTransaction ? ReturnPayTransactionTaskFactory.ITask :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.ITask :
        T extends TaskName.ReturnReserveTransaction ? ReturnReserveTransactionTaskFactory.ITask :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.ITask :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends TaskName.ConfirmPayTransaction ? ConfirmPayTransactionTaskFactory.ITask :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.ITask :
        T extends TaskName.UseReservation ? UseReservationTaskFactory.ITask :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.ITask :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.ITask :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.ITask :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.ITask :
        TaskFactory.ITask;
    export import ISearchConditions = TaskFactory.ISearchConditions;
    export import IExecutionResult = TaskFactory.IExecutionResult;

    export import acceptCOAOffer = AcceptCOAOfferTaskFactory;
    export import aggregateOffers = AggregateOffersTaskFactory;
    export import aggregateScreeningEvent = AggregateScreeningEventTaskFactory;
    export import aggregateUseActionsOnEvent = AggregateUseActionsOnEventTaskFactory;
    export import authorizePayment = AuthorizePaymentTaskFactory;
    export import cancelMoneyTransfer = CancelMoneyTransferTaskFactory;
    export import cancelPendingReservation = CancelPendingReservationTaskFactory;
    export import cancelReservation = CancelReservationTaskFactory;
    export import checkMovieTicket = CheckMovieTicketTaskFactory;
    export import checkResource = CheckResourceTaskFactory;
    export import createEvent = CreateEventTaskFactory;
    export import CreateAccountingReport = CreateAccountingReportTaskFactory;
    export import confirmReserveTransaction = ConfirmReserveTransactionTaskFactory;
    export import deleteTransaction = DeleteTransactionTaskFactory;
    export import importEventCapacitiesFromCOA = ImportEventCapacitiesFromCOATaskFactory;
    export import importEventsFromCOA = ImportEventsFromCOATaskFactory;
    export import importOffersFromCOA = ImportOffersFromCOATaskFactory;
    export import moneyTransfer = MoneyTransferTaskFactory;
    export import pay = PayTaskFactory;
    export import publishPaymentUrl = PublishPaymentUrlTaskFactory;
    export import refund = RefundTaskFactory;
    export import registerService = RegisterServiceTaskFactory;
    export import reserve = ReserveTaskFactory;
    export import sendEmailMessage = SendEmailMessageTaskFactory;
    export import triggerWebhook = TriggerWebhookTaskFactory;
    export import useReservation = UseReservationTaskFactory;
    export import voidPayment = VoidPaymentTaskFactory;
    export import onAuthorizationCreated = OnAuthorizationCreatedTaskFactory;
    export import onEventChanged = OnEventChangedTaskFactory;
    export import onResourceUpdated = OnResourceUpdatedTaskFactory;

    export import accountMoneyTransfer = AccountMoneyTransferTaskFactory;
    export import cancelAccountMoneyTransfer = CancelAccountMoneyTransferTaskFactory;
}

export namespace service {
    export import paymentService = PaymentServiceFactory;
    export import webAPI = WebAPIServiceFactory;
}

export import sortType = SortType;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export import thing = ThingFactory;

export namespace trip {
    export type ISearchConditions<T extends TripType> =
        T extends TripType.BusTrip ? BusTripFactory.ISearchConditions :
        never;
    export type ITrip<T extends TripType> =
        T extends TripType.BusTrip ? BusTripFactory.ITrip :
        never;
    export import busTrip = BusTripFactory;
}
export import tripType = TripType;

export namespace assetTransaction {
    export type IProject = AssetTransactionFactory.IProject;
    export type IStartParams<T extends AssetTransactionType> =
        T extends AssetTransactionType.CancelReservation ? CancelReservationAssetTransactionFactory.IStartParams :
        T extends AssetTransactionType.MoneyTransfer ? MoneyTransferAssetTransactionFactory.IStartParams :
        T extends AssetTransactionType.Pay ? PayAssetTransactionFactory.IStartParams :
        T extends AssetTransactionType.Refund ? RefundAssetTransactionFactory.IStartParams :
        T extends AssetTransactionType.RegisterService ? RegisterServiceAssetTransactionFactory.IStartParams :
        T extends AssetTransactionType.Reserve ? ReserveAssetTransactionFactory.IStartParams :
        never;
    export type IAttributes<T extends AssetTransactionType> =
        T extends AssetTransactionType.CancelReservation ? CancelReservationAssetTransactionFactory.IAttributes :
        T extends AssetTransactionType.MoneyTransfer ? MoneyTransferAssetTransactionFactory.IAttributes :
        T extends AssetTransactionType.Pay ? PayAssetTransactionFactory.IAttributes :
        T extends AssetTransactionType.Refund ? RefundAssetTransactionFactory.IAttributes :
        T extends AssetTransactionType.RegisterService ? RegisterServiceAssetTransactionFactory.IAttributes :
        T extends AssetTransactionType.Reserve ? ReserveAssetTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends AssetTransactionType> =
        T extends AssetTransactionType.CancelReservation ? CancelReservationAssetTransactionFactory.ITransaction :
        T extends AssetTransactionType.MoneyTransfer ? MoneyTransferAssetTransactionFactory.ITransaction :
        T extends AssetTransactionType.Pay ? PayAssetTransactionFactory.ITransaction :
        T extends AssetTransactionType.Refund ? RefundAssetTransactionFactory.ITransaction :
        T extends AssetTransactionType.RegisterService ? RegisterServiceAssetTransactionFactory.ITransaction :
        T extends AssetTransactionType.Reserve ? ReserveAssetTransactionFactory.ITransaction :
        never;
    export type IResult<T extends AssetTransactionType> =
        T extends AssetTransactionType.CancelReservation ? CancelReservationAssetTransactionFactory.IResult :
        T extends AssetTransactionType.MoneyTransfer ? MoneyTransferAssetTransactionFactory.IResult :
        T extends AssetTransactionType.Pay ? PayAssetTransactionFactory.IResult :
        T extends AssetTransactionType.Refund ? RefundAssetTransactionFactory.IResult :
        T extends AssetTransactionType.RegisterService ? RegisterServiceAssetTransactionFactory.IResult :
        T extends AssetTransactionType.Reserve ? ReserveAssetTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends AssetTransactionType> =
        T extends AssetTransactionType.CancelReservation ? CancelReservationAssetTransactionFactory.IPotentialActions :
        T extends AssetTransactionType.MoneyTransfer ? MoneyTransferAssetTransactionFactory.IPotentialActions :
        T extends AssetTransactionType.Pay ? PayAssetTransactionFactory.IPotentialActions :
        T extends AssetTransactionType.Refund ? RefundAssetTransactionFactory.IPotentialActions :
        T extends AssetTransactionType.RegisterService ? RegisterServiceAssetTransactionFactory.IPotentialActions :
        T extends AssetTransactionType.Reserve ? ReserveAssetTransactionFactory.IPotentialActions :
        never;
    export type ISearchConditions<T extends AssetTransactionType> =
        T extends AssetTransactionType.CancelReservation ? CancelReservationAssetTransactionFactory.ISearchConditions :
        T extends AssetTransactionType.MoneyTransfer ? MoneyTransferAssetTransactionFactory.ISearchConditions :
        T extends AssetTransactionType.Pay ? PayAssetTransactionFactory.ISearchConditions :
        T extends AssetTransactionType.Refund ? RefundAssetTransactionFactory.ISearchConditions :
        T extends AssetTransactionType.RegisterService ? RegisterServiceAssetTransactionFactory.ISearchConditions :
        T extends AssetTransactionType.Reserve ? ReserveAssetTransactionFactory.ISearchConditions :
        never;

    export import cancelReservation = CancelReservationAssetTransactionFactory;
    export import moneyTransfer = MoneyTransferAssetTransactionFactory;
    export import pay = PayAssetTransactionFactory;
    export import refund = RefundAssetTransactionFactory;
    export import registerService = RegisterServiceAssetTransactionFactory;
    export import reserve = ReserveAssetTransactionFactory;
}
export namespace transaction {
    export import IAgentAsPerson = TransactionFactory.IAgentAsPerson;
    export import IAgentAsWebApplication = TransactionFactory.IAgentAsWebApplication;
    export import IAgent = TransactionFactory.IAgent;
    export import IPassportBeforeStart = TransactionFactory.IPassportBeforeStart;
    export import ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;
    export import ISortOrder = TransactionFactory.ISortOrder;
    export import ITasksExportAction = TransactionFactory.ITasksExportAction;
    export type ISearchConditions<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ISearchConditions :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ISearchConditions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ISearchConditions :
        never;
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IStartParams :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IStartParams :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IStartParams :
        never;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IResult :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IResult :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IPotentialActions :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IPotentialActions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IPotentialActions :
        never;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IAttributes :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IAttributes :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ITransaction :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ITransaction :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ITransaction :
        never;
    export import moneyTransfer = MoneyTransferTransactionFactory;
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionType = TransactionType;
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import assetTransactionType = AssetTransactionType;
export import unitCode = UnitCode;
export import unitPriceOffer = UnitPriceOfferFactory;
