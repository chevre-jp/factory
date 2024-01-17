import * as waiter from '@waiter/factory';

import { AccountType } from '../accountType';
import { IObject as IConfirmReservationObject } from '../action/interact/confirm/reservation';
import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IObject as IGivePointAwardObject } from '../action/transfer/give/pointAward';
import { IEntryTranArgs, IEntryTranResult, IExecTran3dsResult, IExecTranArgs, IExecTranResult, IPaymentMethodWithoutDetail } from '../assetTransaction/pay';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import * as OrderFactory from '../order';
import { IInformParams, IProject } from '../project';
import * as WebAPIFactory from '../service/webAPI';
import * as TransactionFactory from '../transaction';
import { TransactionType } from '../transactionType';

/**
 * 取引人
 */
export type IAgent = TransactionFactory.IAgent;
export type ICustomer = OrderFactory.ICustomer;
export interface IPaymentMethodByPaymentUrl {
    /**
     * 決済方法区分
     */
    typeOf: string;
    paymentMethodId: string;
    paymentUrl: string;
    issuedThrough: {
        /**
         * 発行決済サービスID
         */
        id: string;
    };
    // ↓決済代行IF拡張(2024-01-01~)
    entryTranArgs?: IEntryTranArgs;
    entryTranResult?: IEntryTranResult;
    execTranArgs?: IExecTranArgs;
    execTranResult?: IExecTranResult | IExecTran3dsResult;
    paymentMethod?: IPaymentMethodWithoutDetail; // 拡張(2024-01-04~)
}
/**
 * 注文特典口座
 */
export interface IAwardAccount {
    typeOf: AccountType.Account;
    accountNumber: string;
}
export interface IObject {
    clientUser?: IClientUser;
    broker?: OrderFactory.IBroker;
    customer?: ICustomer;
    identifier?: OrderFactory.IIdentifier;
    /**
     * 確認番号
     */
    confirmationNumber?: string;
    /**
     * 注文番号
     */
    orderNumber?: string;
    /**
     * 注文名称
     */
    name?: string;
    /**
     * 外部ロケーションでの決済情報
     */
    paymentMethods?: IPaymentMethodByPaymentUrl;
    /**
     * WAITER許可証トークン
     */
    passportToken?: waiter.passport.IEncodedPassport;
    /**
     * WAITER許可証
     */
    passport?: waiter.passport.IPassport;
    // 使用していないので廃止(2023-08-15~)
    // authorizeActions?: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
    potentialActions?: {
        givePointAward?: IGivePointAwardParams[];
    };
}
export interface IStartParamsWithoutDetail {
    project: Pick<IProject, 'id' | 'typeOf'>;
    // expiresInSeconds?: number; // discontinue(2023-11-18~)
    agent: IAgent;
    seller: {
        id: string;
    };
    object: {
        clientUser?: IClientUser;
        customer?: ICustomer;
        passport?: TransactionFactory.IPassportBeforeStart;
        /**
         * 注文名称
         */
        name?: string;
    };
}
export type ISeller = TransactionFactory.ISeller & Pick<OrderFactory.ISeller, 'additionalProperty'>;
/**
 * 取引開始パラメーター
 */
export interface IStartParams extends Omit<TransactionFactory.IStartParams<TransactionType.PlaceOrder, IAgent, undefined, IObject>, 'expires'> {
    /**
     * 販売者
     */
    seller: ISeller;
    expiresInSeconds: number;
}
/**
 * 注文通知パラメータ
 */
export type IInformOrderParams = IInformParams;
/**
 * 予約確定パラメータ
 */
export interface IConfirmReservationParams {
    /**
     * 確定対象
     */
    object?: IConfirmReservationObject<WebAPIFactory.Identifier>;
}
type ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;
/**
 * インセンティブ付与パラメータ
 */
export interface IGivePointAwardParams {
    object?: IGivePointAwardObject;
}
/**
 * 取引確定後アクションパラメータ
 */
export interface IPotentialActionsParams {
    order?: {
        potentialActions?: {
            sendOrder?: {
                potentialActions?: {
                    sendEmailMessage?: ISendEmailMessageParams[];
                };
            };
        };
    };
}
/**
 * 取引結果の注文パラメータ
 */
export interface IResultOrderParams {
    /**
     * 注文識別子指定
     */
    identifier?: OrderFactory.IIdentifier;
    /**
     * 注文確認URLのカスタム指定
     */
    url?: string;
}
/**
 * 取引結果パラメータ
 */
export interface IResultParams {
    order?: IResultOrderParams;
}
/**
 * 取引確定パラメータ
 */
export interface IConfirmParams {
    /**
     * 取引ID
     */
    id: string;
    agent?: { id?: string };
    /**
     * 取引確定後アクション
     */
    potentialActions?: IPotentialActionsParams;
    /**
     * 取引結果
     */
    result?: IResultParams;
}
export type IOrderAsResult = OrderFactory.IOrder & {
    acceptedOffers: OrderFactory.IAcceptedOffer<OrderFactory.IItemOffered>[];
};
export interface IAuthorizeActionAsResult { id: string; }
/**
 * 取引結果
 */
export interface IResult {
    /**
     * 注文
     */
    order: IOrderAsResult;
    /**
     * 承認アクションID(2024-01-17~)
     */
    authorizeActions?: IAuthorizeActionAsResult[];
    /**
     * オファー数(2024-01-17~)
     */
    numAcceptedOffers?: number;
}
/**
 * エラー
 */
export type IError = any;
export interface IPotentialActions {
    order: IOrderActionAttributes;
}
export interface IAttributes extends
    TransactionFactory.IAttributes<Omit<IStartParams, 'expiresInSeconds'>, IResult, IError, IPotentialActions> {
}
/**
 * 注文取引
 */
export type ITransaction = IExtendId<IAttributes>;
export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.PlaceOrder> {
    seller?: {
        ids?: string[];
    };
    object?: {
    };
    result?: {
        order?: {
            confirmationNumber?: { $eq?: string };
            orderNumbers?: string[];
        };
    };
}
