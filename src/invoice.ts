import { IMonetaryAmount } from './monetaryAmount';
import * as OrderFactory from './order';
import { PaymentStatusType } from './paymentStatusType';
import * as PersonFactory from './person';
import { IAccounting } from './priceSpecification';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from './priceSpecification/categoryCodeChargeSpecification';
import { IAppliesToMovieTicket, IPriceSpecification as IMovieTicketTypeChargeSpecification } from './priceSpecification/movieTicketTypeChargeSpecification';
import { IAppliesToAddOn as IUnitPriceSpecAppliesToAddOn, IPriceSpecification as IUnitPriceSpecification } from './priceSpecification/unitPriceSpecification';
import { IPriceSpecification } from './reservation/event';
import * as SellerFactory from './seller';
import { PaymentServiceType } from './service/paymentService';

export type IBroker = SellerFactory.ISeller | PersonFactory.IPerson;
export type IProvider = SellerFactory.ISeller | PersonFactory.IPerson;
export interface IReferenceOrder extends OrderFactory.IOrder {
    acceptedOffers: OrderFactory.IAcceptedOffer<OrderFactory.IItemOffered>[];
}
export type IReservationPriceAccounting = Pick<IAccounting, 'accountsReceivable'>;
export type IAppliesToAddOn = Pick<IUnitPriceSpecAppliesToAddOn, 'typeOf'>;
export type IMinimizedCategoryCodeChargeSpecification = Pick<ICategoryCodeChargeSpecification, 'typeOf' | 'price'>;
export type IMinimizedMovieTicketTypeChargeSpecification = Pick<IMovieTicketTypeChargeSpecification, 'typeOf' | 'price'> & {
    appliesToMovieTicket: Pick<IAppliesToMovieTicket, 'serviceOutput'>;
};
export type IMinimizedUnitPriceSpecification = Pick<IUnitPriceSpecification, 'typeOf' | 'price' | 'referenceQuantity'> & {
    accounting?: IReservationPriceAccounting;
    appliesToAddOn?: IAppliesToAddOn[];
};
export type IPriceComponentSpecification =
    IMinimizedCategoryCodeChargeSpecification | IMinimizedMovieTicketTypeChargeSpecification | IMinimizedUnitPriceSpecification;
export type IReservationPriceSpecification = Pick<IPriceSpecification, 'typeOf'> & {
    priceComponent: IPriceComponentSpecification[];
};
export interface IReservation {
    /**
     * 予約価格
     * priceSpecificationへ完全移行(2022-11-23~)
     */
    priceSpecification: IReservationPriceSpecification;
    /**
     * 予約番号
     */
    reservationNumber: string;
    reservedTicket?: {
        /**
         * COAの場合のみチケットトークンが存在(2023-03-14~)
         */
        ticketToken?: string;
    };
}
export type IAmountOfMovieTicketAsPaymentServiceOutput = Pick<IMonetaryAmount, 'typeOf' | 'value'>;
export interface IMovieTicketAsPaymentServiceOutput {
    /**
     * 購入管理番号
     */
    identifier: string;
    /**
     * 利用対象予約
     */
    serviceOutput?: IReservation;
    // 計上金額を追加(2023-05-17~)
    amount?: IAmountOfMovieTicketAsPaymentServiceOutput;
}
export type IPaymentServiceOutput = IMovieTicketAsPaymentServiceOutput[] | OrderFactory.IOrderPaymentMethodIssuedThroughServiceOutput;
/**
 * 決済方法(サービス)
 */
export interface IPaymentMethod {
    id: string;
    typeOf: PaymentServiceType;
    serviceOutput?: IPaymentServiceOutput;
}
/**
 * インボイス
 * {@link https://schema.org/Invoice}
 */
export interface IInvoice {
    typeOf: 'Invoice';
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * The time interval used to compute the invoice.
     */
    billingPeriod?: string;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.
     * In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.
     * If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. Supersedes bookingAgent.
     */
    broker?: IBroker;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     */
    category?: string;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber?: string;
    /**
     * Party placing the order or paying the invoice.
     */
    customer?: OrderFactory.ICustomer;
    /**
     * The minimum payment required at this time.
     */
    // minimumPaymentDue: string;
    /**
     * The date that payment is due. Supersedes paymentDue.
     */
    paymentDueDate?: Date;
    /**
     * The name of the credit card or other method of payment for the order.
     */
    paymentMethod: IPaymentMethod;
    /**
     * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The status of payment; whether the invoice has been paid or not.
     */
    paymentStatus?: PaymentStatusType;
    /**
     * The service provider, service operator, or service performer; the goods producer.
     * Another party (a seller) may offer those services or goods on behalf of the provider.
     * A provider may also serve as the seller. Supersedes carrier.
     */
    provider?: IProvider;
    /**
     * The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
     */
    referencesOrder?: IReferenceOrder;
    /**
     * The date the invoice is scheduled to be paid.
     */
    scheduledPaymentDate?: Date;
    /**
     * The total amount due.
     */
    totalPaymentDue?: OrderFactory.ITotalPaymentDue;
}
