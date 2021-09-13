/**
 * factory
 */
import * as waiter from '@waiter/factory';

import * as cognito from './cognito';

export import cognito = cognito;
export import waiter = waiter;

import * as AccountFactory from './factory/account';
import AccountStatusType from './factory/accountStatusType';

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as PointAwardAuthorizeActionFactory from './factory/action/authorize/award/point';
import * as AuthorizeMoneyTransferOfferActionFactory from './factory/action/authorize/offer/moneyTransfer';
import * as AuthorizeProductOfferActionFactory from './factory/action/authorize/offer/product';
import * as AuthorizeSeatReservationOfferActionFactory from './factory/action/authorize/offer/seatReservation';
import * as AuthorizeAnyPaymentActionFactory from './factory/action/authorize/paymentMethod/any';
import * as CancelReservationActionFactory from './factory/action/cancel/reservation';
import * as CheckMovieTicketActionFactory from './factory/action/check/paymentMethod/movieTicket';
import * as CheckTokenActionFactory from './factory/action/check/token';
import * as UseReservationActionFactory from './factory/action/consume/use/reservation';
import * as ConfirmMoneyTransferActionFactory from './factory/action/interact/confirm/moneyTransfer';
import * as ConfirmPayActionFactory from './factory/action/interact/confirm/pay';
import * as ConfirmRegisterServiceActionFactory from './factory/action/interact/confirm/registerService';
import * as ConfirmReservationActionFactory from './factory/action/interact/confirm/reservation';
import * as InformActionFactory from './factory/action/interact/inform';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as RegisterServiceActionFactory from './factory/action/interact/register/service';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as ReserveActionFactory from './factory/action/reserve';
import * as OrderActionFactory from './factory/action/trade/order';
import * as PayActionFactory from './factory/action/trade/pay';
import * as RefundActionFactory from './factory/action/trade/refund';
import * as GiveActionFactory from './factory/action/transfer/give';
import * as GivePointAwardActionFactory from './factory/action/transfer/give/pointAward';
import * as MoneyTransferActionFactory from './factory/action/transfer/moneyTransfer';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as ReturnMoneyTransferActionFactory from './factory/action/transfer/return/moneyTransfer';
import * as ReturnOrderActionFactory from './factory/action/transfer/return/order';
import * as ReturnPaymentMethodActionFactory from './factory/action/transfer/return/paymentMethod';
import * as ReturnPointAwardActionFactory from './factory/action/transfer/return/pointAward';
import * as ReturnReservationActionFactory from './factory/action/transfer/return/reservation';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';
import * as DeleteActionFactory from './factory/action/update/delete';
import * as DeleteMemberActionFactory from './factory/action/update/delete/member';

import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import * as AccountTitleFactory from './factory/accountTitle';
import { AccountType } from './factory/accountType';
import * as AuthorizationFactory from './factory/authorization';
import * as CategoryCodeFactory from './factory/categoryCode';
import * as ClientUserFactory from './factory/clientUser';
import * as CreativeWorkFactory from './factory/creativeWork';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import * as WebApplicationFactory from './factory/creativeWork/softwareApplication/webApplication';
import CreativeWorkType from './factory/creativeWorkType';
import * as CustomerFactory from './factory/customer';
import * as EncodingFormat from './factory/encodingFormat';
import * as EventFactory from './factory/event';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import EventStatusType from './factory/eventStatusType';
import EventType from './factory/eventType';
import * as IAMFactory from './factory/iam';
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
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as PaymentCardFactory from './factory/paymentMethod/paymentCard';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import * as MovieTicketFactory from './factory/paymentMethod/paymentCard/movieTicket';
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
import * as AccountingReportFactory from './factory/report/accountingReport';
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
import * as ThingFactory from './factory/thing';
import { UnitCode } from './factory/unitCode';

import * as TaskFactory from './factory/task';
import * as AccountMoneyTransferTaskFactory from './factory/task/accountMoneyTransfer';
import * as AggregateEventReservationsTaskFactory from './factory/task/aggregateEventReservations';
import * as AggregateOnProjectTaskFactory from './factory/task/aggregateOnProject';
import * as AggregateScreeningEventTaskFactory from './factory/task/aggregateScreeningEvent';
import * as CancelAccountMoneyTransferTaskFactory from './factory/task/cancelAccountMoneyTransfer';
import * as CancelMoneyTransferTaskFactory from './factory/task/cancelMoneyTransfer';
import * as CancelPendingReservationTaskFactory from './factory/task/cancelPendingReservation';
import * as CancelReservationTaskFactory from './factory/task/cancelReservation';
import * as ConfirmCancelReserveTaskFactory from './factory/task/confirmCancelReserve';
import * as ConfirmMoneyTransferTaskFactory from './factory/task/confirmMoneyTransfer';
import * as ConfirmPayTaskFactory from './factory/task/confirmPay';
import * as ConfirmRefundTaskFactory from './factory/task/confirmRefund';
import * as ConfirmRegisterServiceTaskFactory from './factory/task/confirmRegisterService';
import * as ConfirmReservationTaskFactory from './factory/task/confirmReservation';
import * as DeleteMemberTaskFactory from './factory/task/deleteMember';
import * as GivePointAwardTaskFactory from './factory/task/givePointAward';
import * as ImportEventCapacitiesFromCOATaskFactory from './factory/task/importEventCapacitiesFromCOA';
import * as ImportEventsFromCOATaskFactory from './factory/task/importEventsFromCOA';
import * as ImportOffersFromCOATaskFactory from './factory/task/importOffersFromCOA';
import * as MoneyTransferTaskFactory from './factory/task/moneyTransfer';
import * as OrderProgramMembershipTaskFactory from './factory/task/orderProgramMembership';
import * as PayTaskFactory from './factory/task/pay';
import * as PlaceOrderTaskFactory from './factory/task/placeOrder';
import * as RefundTaskFactory from './factory/task/refund';
import * as RegisterServiceTaskFactory from './factory/task/registerService';
import * as ReserveTaskFactory from './factory/task/reserve';
import * as ReturnMoneyTransferTaskFactory from './factory/task/returnMoneyTransfer';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as ReturnPointAwardTaskFactory from './factory/task/returnPointAward';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as SendOrderTaskFactory from './factory/task/sendOrder';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as UnRegisterProgramMembershipTaskFactory from './factory/task/unRegisterProgramMembership';
import * as VoidMoneyTransferTransactionTaskFactory from './factory/task/voidMoneyTransferTransaction';
import * as VoidPaymentTaskFactory from './factory/task/voidPayment';
import * as VoidPayTransactionTaskFactory from './factory/task/voidPayTransaction';
import * as VoidRegisterServiceTransactionTaskFactory from './factory/task/voidRegisterServiceTransaction';
import * as VoidReserveTransactionTaskFactory from './factory/task/voidReserveTransaction';

import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';

import * as CancelReservationAssetTransactionFactory from './factory/assetTransaction/cancelReservation';
import * as MoneyTransferAssetTransactionFactory from './factory/assetTransaction/moneyTransfer';
import * as PayAssetTransactionFactory from './factory/assetTransaction/pay';
import * as RefundAssetTransactionFactory from './factory/assetTransaction/refund';
import * as RegisterServiceAssetTransactionFactory from './factory/assetTransaction/registerService';
import * as ReserveAssetTransactionFactory from './factory/assetTransaction/reserve';
import AssetTransactionType from './factory/assetTransactionType';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';

import * as TransactionFactory from './factory/transaction';
import * as MoneyTransferTransactionFactory from './factory/transaction/moneyTransfer';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';
import TransactionType from './factory/transactionType';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import errors = errors;
export import errorCode = ErrorCode;
export import account = AccountFactory;
export import accountStatusType = AccountStatusType;
export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAdditionalProperty = ActionFactory.IAdditionalProperty;
    export import IAttributes = ActionFactory.IAttributes;
    export import IDynamicAttributes = ActionFactory.IDynamicAttributes;
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
            export import point = PointAwardAuthorizeActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import any = AuthorizeAnyPaymentActionFactory;
        }
        export namespace discount {
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            // tslint:disable-next-line:no-shadowed-variable
            export import moneyTransfer = AuthorizeMoneyTransferOfferActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
            export import product = AuthorizeProductOfferActionFactory;
            export import seatReservation = AuthorizeSeatReservationOfferActionFactory;
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

        export namespace print {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = PrintActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = PrintActionFactory.IAttributes;
            export import IRecipient = PrintActionFactory.IRecipient;
            export import ticket = PrintTicketActionFactory;
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
            // tslint:disable-next-line:no-shadowed-variable
            export import reservation = ReturnReservationActionFactory;
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
export import authorization = AuthorizationFactory;
export import categoryCode = CategoryCodeFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export import ICreativeWork = CreativeWorkFactory.ICreativeWork;
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieCreativeWorkFactory;
    export namespace softwareApplication {
        export import webApplication = WebApplicationFactory;
    }
}
export import creativeWorkType = CreativeWorkType;
export import customer = CustomerFactory;
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
export import iam = IAMFactory;
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
export import ownershipInfo = OwnershipInfoFactory;

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
    export import accountingReport = AccountingReportFactory;
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

    export type IProgramMembershipUsed<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.IProgramMembershipUsed :
        ReservationFactory.IProgramMembershipUsed;

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

    export type ITicketType<T extends ReservationType> =
        T extends ReservationType.EventReservation ? ReservationFactory.ITicketType :
        ReservationFactory.ITicketType;
}

export import reservationStatusType = ReservationStatusType;

export import reservationType = ReservationType;

export import seller = SellerFactory;

export namespace task {
    // export import IAttributes = TaskFactory.IAttributes;
    // export import IData = TaskFactory.IData;
    // export import ISearchConditions = TaskFactory.ISearchConditions;
    // export import ITask = TaskFactory.ITask;

    export type IData<T extends TaskName | string> =
        T extends TaskName.AggregateEventReservations ? AggregateEventReservationsTaskFactory.IData :
        T extends TaskName.ConfirmCancelReserve ? ConfirmCancelReserveTaskFactory.IData :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IData :
        T extends TaskName.DeleteMember ? DeleteMemberTaskFactory.IData :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IData :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.IData :
        T extends TaskName.OrderProgramMembership ? OrderProgramMembershipTaskFactory.IData :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IData :
        T extends TaskName.ConfirmRefund ? ConfirmRefundTaskFactory.IData :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.IData :
        T extends TaskName.ReturnMoneyTransfer ? ReturnMoneyTransferTaskFactory.IData :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IData :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IData :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IData :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends TaskName.ConfirmPay ? ConfirmPayTaskFactory.IData :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IData :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IData :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.IData :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.IData :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.IData :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.IData :
        TaskFactory.IData;

    export type IAttributes<T extends TaskName | string> =
        T extends TaskName.AggregateEventReservations ? AggregateEventReservationsTaskFactory.IAttributes :
        T extends TaskName.ConfirmCancelReserve ? ConfirmCancelReserveTaskFactory.IAttributes :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IAttributes :
        T extends TaskName.DeleteMember ? DeleteMemberTaskFactory.IAttributes :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IAttributes :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.IAttributes :
        T extends TaskName.OrderProgramMembership ? OrderProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IAttributes :
        T extends TaskName.ConfirmRefund ? ConfirmRefundTaskFactory.IAttributes :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.IAttributes :
        T extends TaskName.ReturnMoneyTransfer ? ReturnMoneyTransferTaskFactory.IAttributes :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IAttributes :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IAttributes :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IAttributes :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends TaskName.ConfirmPay ? ConfirmPayTaskFactory.IAttributes :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IAttributes :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.IAttributes :
        TaskFactory.IAttributes;

    export type ITask<T extends TaskName | string> =
        T extends TaskName.AggregateEventReservations ? AggregateEventReservationsTaskFactory.ITask :
        T extends TaskName.ConfirmCancelReserve ? ConfirmCancelReserveTaskFactory.ITask :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.ITask :
        T extends TaskName.DeleteMember ? DeleteMemberTaskFactory.ITask :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.ITask :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.ITask :
        T extends TaskName.OrderProgramMembership ? OrderProgramMembershipTaskFactory.ITask :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.ITask :
        T extends TaskName.ConfirmRefund ? ConfirmRefundTaskFactory.ITask :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.ITask :
        T extends TaskName.ReturnMoneyTransfer ? ReturnMoneyTransferTaskFactory.ITask :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.ITask :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.ITask :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.ITask :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends TaskName.ConfirmPay ? ConfirmPayTaskFactory.ITask :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.ITask :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.ITask :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.ITask :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.ITask :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.ITask :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.ITask :
        TaskFactory.ITask;

    export import ISearchConditions = TaskFactory.ISearchConditions;

    export import IExecutionResult = TaskFactory.IExecutionResult;

    export import aggregateOnProject = AggregateOnProjectTaskFactory;
    export import aggregateScreeningEvent = AggregateScreeningEventTaskFactory;
    export import cancelMoneyTransfer = CancelMoneyTransferTaskFactory;
    export import cancelPendingReservation = CancelPendingReservationTaskFactory;
    export import cancelReservation = CancelReservationTaskFactory;
    export import confirmCancelReserve = ConfirmCancelReserveTaskFactory;
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
    export import orderProgramMembership = OrderProgramMembershipTaskFactory;

    export import accountMoneyTransfer = AccountMoneyTransferTaskFactory;
    export import cancelAccountMoneyTransfer = CancelAccountMoneyTransferTaskFactory;
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
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export import thing = ThingFactory;

export namespace assetTransaction {
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
    export import IPassportBeforeStart = TransactionFactory.IPassportBeforeStart;
    export import ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;
    export import ISortOrder = TransactionFactory.ISortOrder;
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
