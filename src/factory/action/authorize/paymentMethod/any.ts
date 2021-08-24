import * as ActionFactory from '../../../action';
import * as CheckMovieTicketActionFactory from '../../../action/check/paymentMethod/movieTicket';
import * as MoneyTransferActionFactory from '../../../action/transfer/moneyTransfer';
import ActionType from '../../../actionType';
import * as MoneyTransferTransactionFactory from '../../../assetTransaction/moneyTransfer';
import * as PayTransactionFactory from '../../../assetTransaction/pay';
import AssetTransactionType from '../../../assetTransactionType';
import { IMonetaryAmount } from '../../../monetaryAmount';
import * as CreditCardFactory from '../../../paymentMethod/paymentCard/creditCard';
import * as MovieTicketFactory from '../../../paymentMethod/paymentCard/movieTicket';
import PaymentStatusType from '../../../paymentStatusType';
import { IPropertyValue } from '../../../propertyValue';
import { PaymentServiceType } from '../../../service/paymentService';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ResultType {
    Payment = 'Payment'
}

/**
 * 汎用決済方法タイプ
 */
export type IAnyPaymentMethod = string;

/**
 * 進行中取引インターフェース
 */
export interface IObjectPendingTransaction {
    typeOf: AssetTransactionType.MoneyTransfer;
    id?: string;
    transactionNumber?: string;
}

export type IPendingTransaction = MoneyTransferTransactionFactory.ITransaction;

export type IPaymentCard = MoneyTransferActionFactory.IPaymentCard;

/**
 * 決済トークン
 */
export type ITokenizedPaymentCard = string;

/**
 * 転送元インターフェース
 */
export type IFromLocation = IPaymentCard | ITokenizedPaymentCard;

/**
 * 転送先インターフェース
 */
export type IToLocation = IPaymentCard;

export import IPurchaseNumberAuthResult = CheckMovieTicketActionFactory.IPurchaseNumberAuthResult;

export import IUnauthorizedCardOfMember = CreditCardFactory.IUnauthorizedCardOfMember;
export import IUncheckedCardRaw = CreditCardFactory.IUncheckedCardRaw;
export import IUncheckedCardTokenized = CreditCardFactory.IUncheckedCardTokenized;

/**
 * クレジットカード決済承認アクションに必要なクレジットカード情報インターフェース
 */
export type ICreditCard = IUncheckedCardRaw | IUncheckedCardTokenized | IUnauthorizedCardOfMember;

export import IMovieTicket = MovieTicketFactory.IMovieTicket;

/**
 * 承認対象インターフェース
 */
export interface IObject {
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
     * 決済方法
     */
    paymentMethod: IAnyPaymentMethod;
    /**
     * 決済ID
     */
    paymentMethodId?: string;
    typeOf: ResultType;

    /**
     * 転送元口座(Account決済)
     * 出金取引、転送取引の場合指定
     */
    // fromAccount?: IFromAccount;
    /**
     * 転送先口座(Account決済)
     * 入金取引、転送取引の場合指定
     */
    // toAccount?: IToAccount;
    /**
     * 取引説明(Account決済)
     */
    notes?: string;
    /**
     * 進行中取引(Account決済)
     */
    pendingTransaction?: IObjectPendingTransaction;

    /**
     * 転送元(PaymentCard決済)
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先(PaymentCard決済)
     */
    toLocation?: IToLocation;

    /**
     * 支払い方法(CreditCard決済)
     */
    method?: string;
    /**
     * クレジットカード情報(CreditCard決済)
     */
    creditCard?: ICreditCard;

    /**
     * (MovieTicket決済)
     */
    movieTickets?: IMovieTicket[];
}

export interface IResult {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId: string;
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 決済方法
     */
    paymentMethod: IAnyPaymentMethod;
    /**
     * 決済ID
     */
    paymentMethodId: string;
    /**
     * 決済ステータス
     */
    paymentStatus: PaymentStatusType;
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    typeOf: ResultType;
    issuedThrough: {
        typeOf: PaymentServiceType;
    };

    /**
     * 転送元口座(Account決済)
     */
    // fromAccount?: IAccount;
    /**
     * 転送先口座(Account決済)
     */
    // toAccount?: IToAccount;
    /**
     * 進行中取引(Account決済)
     */
    pendingTransaction?: IPendingTransaction;

    /**
     * 転送元(PaymentCard決済)
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先(PaymentCard決済)
     */
    toLocation?: IToLocation;

    /**
     * CreditCard決済の場合
     */
    entryTranArgs?: PayTransactionFactory.IEntryTranArgs;
    /**
     * CreditCard決済の場合
     */
    execTranResult?: PayTransactionFactory.IExecTranResult;

    /**
     * 承認時のムビチケ認証レスポンス(MovieTicket決済)
     */
    purchaseNumberAuthResult?: IPurchaseNumberAuthResult;
}

export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}

export enum ServiceIdentifier {
    Chevre = 'Chevre',
    GMO = 'GMO',
    MovieTicket = 'MovieTicket'
}

export interface IService {
    typeOf: 'WebAPI';
    identifier: ServiceIdentifier;
}

export type IInstrument = IService;

/**
 * 決済承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    instrument?: IInstrument;
    recipient: IRecipient;
    purpose: IPurpose;
}

/**
 * 決済承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
