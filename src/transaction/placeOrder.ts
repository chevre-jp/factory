import type { passport } from '@waiter/factory';

import { AccountType } from '../accountType';
import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { CreativeWorkType } from '../creativeWorkType';
import * as OrderFactory from '../order';
import { IProject } from '../project';
import * as TransactionFactory from '../transaction';
import { TransactionType } from '../transactionType';

export interface IMemberOfPayload {
    iss: string;
    sub: string;
}
/**
 * 取引人
 */
export type IAgent = TransactionFactory.IAgent & {
    /**
     * 外部メンバーシップトークン
     */
    memberOfToken?: string;
    memberOfPayload?: IMemberOfPayload;
};
export type ICustomer = OrderFactory.ICustomer;
export interface IPaymentMethodByPaymentUrl {
    /**
     * 決済採用時に発行済の決済方法ID
     * 決済承認時に指定が可能
     */
    paymentMethodId: string;
    // paymentUrl: string; // migrate to recipe(2024-06-05~)
    // issuedThrough: { id: string }; // migrate to acceptAction(2024-06-05~)
    // ↓決済代行IF拡張(2024-01-01~)
    // entryTranArgs?: IEntryTranArgs; // migrate to recipe(2024-06-05~)
    // entryTranResult?: IEntryTranResult; // migrate to recipe(2024-06-05~)
    // execTranArgs?: IExecTranArgs; // migrate to recipe(2024-06-05~)
    // execTranResult?: IExecTranResult | IExecTran3dsResult; // migrate to recipe(2024-06-05~)
    // paymentMethod: IPaymentMethodWithoutDetail; // 拡張(2024-01-04~) // migrate to acceptAction(2024-06-05~)
}
/**
 * 注文特典口座
 */
export interface IAwardAccount {
    typeOf: AccountType.Account;
    accountNumber: string;
}
export interface IObject {
    clientUser?: Omit<IClientUser, 'scope' | 'scopes'>;
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
     * 決済URLでの決済情報
     */
    paymentMethods?: IPaymentMethodByPaymentUrl;
    /**
     * WAITER許可証トークン
     */
    passportToken?: passport.IEncodedPassport;
    /**
     * WAITER許可証
     */
    passport?: passport.IPassport;
    // potentialActions?: {
    //     givePointAward?: IGivePointAwardParams[]; // 廃止(2024-03-12~)
    // };
}
export interface IStartParamsWithoutDetail {
    project: Pick<IProject, 'id' | 'typeOf'>;
    agent: IAgent;
    seller: {
        id: string;
    };
    object: {
        clientUser?: Omit<IClientUser, 'scope' | 'scopes'>;
        customer?: ICustomer;
        passport?: TransactionFactory.IPassportBeforeStart;
        /**
         * 注文名称
         */
        name?: string;
    };
}
export type ISeller = TransactionFactory.ISeller & Pick<OrderFactory.ISeller, 'additionalProperty'>;
export interface IInstrument {
    typeOf: CreativeWorkType.WebApplication;
    /**
     * アプリケーションID
     */
    id: string;
}
/**
 * 取引開始パラメーター
 */
export interface IStartParams extends Pick<
    TransactionFactory.IStartParams<TransactionType.PlaceOrder, IAgent, undefined, IObject>,
    'agent' | 'project' | 'object' | 'typeOf'
> {
    /**
     * 販売者
     */
    seller: ISeller;
    expiresInSeconds: number;
    instrument?: IInstrument; // add(2024-05-30~)
}
type ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;
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
export type IOrderAsResult = OrderFactory.IOrder;
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
     * 取引確定時の同期的な注文コード発行に対応(2024-02-05~)
     */
    code?: string;
    /**
     * 承認アクションID(2024-01-17~)
     */
    authorizeActions?: IAuthorizeActionAsResult[];
    /**
     * オファー数(2024-01-17~)
     */
    numAcceptedOffers?: number;
    options?: {
        /**
         * 取引resultの注文オファーを無視する(Orderに適用しない)
         */
        ignoreAccpetedOffersFromResult?: boolean;
    };
}
/**
 * エラー
 */
export type IError = any;
export interface IPotentialActions {
    order: Pick<IOrderActionAttributes, 'potentialActions'>; // optimize(2024-01-22~)
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
        orderNumber?: { $eq?: string };
    };
    result?: {
        order?: {
            confirmationNumber?: { $eq?: string };
            orderNumbers?: string[];
        };
    };
}
