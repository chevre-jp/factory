import { IAttributes as IReturnOrderActionAttributes } from '../action/transfer/return/order';
import { IExtendId } from '../autoGenerated';
import { ICustomerRemorseReturnFeesMovieTicket, IMerchantReturnPolicy, ReturnFeesEnumeration } from '../merchantReturnPolicy';
import { IOfferItemCondition } from '../offerItemCondition';
import { IProject } from '../project';
import * as TransactionFactory from '../transaction';
import { TransactionType } from '../transactionType';

export type IAgent = TransactionFactory.IAgent;
export import ISeller = TransactionFactory.ISeller;
export type IResult = any;
export type IError = any;
/**
 * 返品理由
 */
export enum Reason {
    /**
     * カスタマー都合での返品
     */
    Customer = 'Customer',
    /**
     * 販売者都合での返品
     */
    Seller = 'Seller'
}
/**
 * 返品可能な注文
 */
export interface IReturnableOrder {
    confirmationNumber: string;
    orderNumber: string;
}
/**
 * 注文返品開始パラメータ
 */
export interface IStartParamsWithoutDetail {
    project: Pick<IProject, 'id' | 'typeOf'>;
    // expiresInSeconds指定に変更(2022-11-30~)
    // expires: Date;
    expiresInSeconds?: number;
    agent: IAgent;
    object: {
        order: IReturnableOrder | IReturnableOrder[];
        reason: Reason;
    };
    seller: {
        id: string;
    };
}
/**
 * 取引開始パラメータ
 */
export interface IStartParams extends Omit<TransactionFactory.IStartParams<TransactionType.ReturnOrder, IAgent, undefined, IObject>, 'expires'> {
    /**
     * 販売者
     */
    seller: ISeller;
    expiresInSeconds: number;
}
type ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;
/**
 * 返金アクションカスタムパラメータ
 */
export interface IRefundParams {
    object: {
        object: {
            paymentMethod: {
                /**
                 * 返金対象決済ID
                 */
                paymentMethodId: string;
            };
        }[];
    };
    potentialActions?: {
        /**
         * 返金メールカスタマイズ
         */
        sendEmailMessage?: ISendEmailMessageParams;
    };
}
export interface IReturnOrderActionParams {
    object?: {
        /**
         * 返品対象注文番号
         */
        orderNumber?: string;
    };
    /**
     * 注文返品後アクション
     */
    potentialActions?: {
        /**
         * クレジットカード返金アクションについてカスタマイズする場合に指定
         * 属性名称がrefundCreditCardであるが、全ての決済方法に適用可能
         */
        // chevre/apiへ移行できるか
        refundCreditCard?: IRefundParams[];
        /**
         * ムビチケ着券取消を実行するかどうか
         */
        // 廃止(2022-06-08~)
        // refundMovieTicket?: boolean;
        /**
         * Eメール送信アクション
         */
        sendEmailMessage?: ISendEmailMessageParams[];
    };
}
export interface IPotentialActionsParams {
    /**
     * 注文返品アクション
     */
    returnOrder?: IReturnOrderActionParams | IReturnOrderActionParams[];
}
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
}
export interface IReturnFeesMovieTicket {
    /**
     * 決済カードコード
     */
    identifier: string;
    /**
     * 着券取消実行有無
     */
    returnFees: ICustomerRemorseReturnFeesMovieTicket;
    serviceOutput: {
        /**
         * 決済方法区分
         */
        typeOf: string;
    };
}
export type IReturnPolicyItemCondition = IOfferItemCondition;
/**
 * 取引に適用される返品ポリシー
 */
export type IReturnPolicy = Pick<IMerchantReturnPolicy, 'typeOf' | 'merchantReturnDays' | 'restockingFee' | 'returnFees'> & {
    returnFees: ReturnFeesEnumeration;
    /**
     * 決済カードコードごとの着券取消実行有無
     */
    returnFeesMovieTicket?: IReturnFeesMovieTicket[];
    itemCondition?: IReturnPolicyItemCondition;
};
/**
 * 取引対象物
 */
export interface IObject {
    order: IReturnableOrder[];
    reason: Reason;
    returnPolicy: IReturnPolicy;
}
export interface IPotentialActions {
    /**
     * 注文返品アクション属性
     */
    returnOrder: IReturnOrderActionAttributes[];
}
export interface IAttributes extends
    TransactionFactory.IAttributes<Omit<IStartParams, 'expiresInSeconds'>, IResult, IError, IPotentialActions> {
}
/**
 * 返品取引
 */
export type ITransaction = IExtendId<IAttributes>;
export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.ReturnOrder> {
    object?: {
        order?: {
            /**
             * 返品対象注文番号
             */
            orderNumbers?: string[];
        };
        result?: {
        };
    };
}
