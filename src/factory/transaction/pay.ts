import { IAttributes as IPayActionAttributes } from '../action/trade/pay';
import { IExtendId } from '../autoGenerated';
import { IMovieTicket } from '../paymentMethod/paymentCard/movieTicket';
import { PaymentMethodType } from '../paymentMethodType';
import { IPropertyValue } from '../propertyValue';
import { PaymentServiceType } from '../service/paymentService';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IAgent = any;

export type IRecipient = any;

export type IObjectWithoutDetail = any;

export type IStartParamsWithoutDetail
    = TransactionFactory.IStartParams<TransactionType.Pay, IAgent, undefined, IObject>;

export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.Pay, IAgent, IRecipient, IObject> {
}

export type IResult = any;

export type IError = any;

export type IAnyPaymentMethod = PaymentMethodType | string;

export interface IPaymentMethod<T extends IAnyPaymentMethod> {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 説明
     */
    description?: string;
    /**
     * 決済方法名称
     * 未指定であればデフォルト値が使用されます
     */
    name?: string;
    /**
     * 決済ID
     */
    paymentMethodId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: T;
    movieTickets?: IMovieTicket[];
    movieTicketInfo?: {
        /**
         * ムビチケ興行会社コード
         */
        kgygishCd: string;
        /**
         * ムビチケサイトコード
         */
        stCd: string;
    };
}

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    typeOf: PaymentServiceType;
    paymentMethod?: IPaymentMethod<any>;
    pendingTransaction?: any;
}

export interface IPotentialActions {
    /**
     * 決済アクション
     */
    pay: IPayActionAttributes<any>[];
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 転送取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.Pay> {
}
