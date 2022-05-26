import {
    IAgent as IMoneyTransferAgent,
    IAttributes as IMoneyTransferActionAttributes,
    ILocation, IPendingTransaction,
    IRecipient as IMoneyTransferRecipient
} from '../action/transfer/moneyTransfer';
import * as TransactionFactory from '../assetTransaction';
import { AssetTransactionType } from '../assetTransactionType';
import { IExtendId } from '../autoGenerated';
import { IMonetaryAmount } from '../monetaryAmount';
import { OrderType } from '../order';
import { PermitType } from '../permit';

export type IAgent = IMoneyTransferAgent & { name: string };
export type IRecipient = IMoneyTransferRecipient & { name: string };
export type IFromLocation = ILocation;
export type IToLocation = ILocation;
/**
 * ペイメントカード
 */
export interface IPaymentCard {
    typeOf: PermitType;
    identifier: string;
    accessCode?: string;
    hasNoPermit?: boolean;
    issuedThrough: {
        /**
         * カード発行サービスID
         */
        id: string;
    };
}
/**
 * トークン化されたペイメントカードンターフェース
 */
export type ITokenizedPaymentCard = string;
/**
 * 転送元としての注文
 */
export interface IOrderAsFromLocation {
    typeOf: OrderType;
    confirmationNumber: string;
    orderNumber: string;
}
export type IFromLocationBeforeStart = IOrderAsFromLocation | IPaymentCard | ITokenizedPaymentCard;
export type IToLocationBeforeStart = IOrderAsFromLocation | IPaymentCard;
/**
 * 取引対象物
 */
export interface IObject {
    /**
     * 金額
     */
    amount: IMonetaryAmount;
    /**
     * 転送元
     */
    fromLocation: IFromLocation;
    /**
     * 転送先
     */
    toLocation: IToLocation;
    /**
     * 取引説明
     */
    description?: string;
    pendingTransaction?: IPendingTransaction;
    /**
     * 負の残高でも強制的に出金するかどうか
     */
    force?: boolean;
}
export type IObjectWithoutDetail = IObject;
export interface IObjectBeforeStart {
    /**
     * 金額
     */
    amount: IMonetaryAmount;
    /**
     * 転送元
     */
    fromLocation: IFromLocation | IFromLocationBeforeStart;
    /**
     * 転送先
     */
    toLocation: IToLocation | IToLocationBeforeStart;
    /**
     * 取引説明
     */
    description?: string;
    pendingTransaction?: IPendingTransaction;
    /**
     * 負の残高でも強制的に出金するかどうか
     */
    force?: boolean;
}
export interface IStartParamsWithoutDetail
    extends TransactionFactory.IStartParams<AssetTransactionType.MoneyTransfer, IAgent, IRecipient, IObjectWithoutDetail> {
    recipient: IRecipient;
}
export interface IStartParamsBeforeStart
    extends TransactionFactory.IStartParams<AssetTransactionType.MoneyTransfer, IAgent, IRecipient, IObjectBeforeStart> {
    recipient: IRecipient;
}
export interface IStartParams extends TransactionFactory.IStartParams<AssetTransactionType.MoneyTransfer, IAgent, IRecipient, IObject> {
    recipient: IRecipient;
}
export type IResult = any;
export type IError = any;
export interface IPotentialActions {
    /**
     * 通貨転送アクション
     */
    moneyTransfer: IMoneyTransferActionAttributes[];
}
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
/**
 * 転送取引
 */
export type ITransaction = IExtendId<IAttributes>;
export interface ISearchConditions extends TransactionFactory.ISearchConditions<AssetTransactionType.MoneyTransfer> {
    object?: {
        fromLocation?: {
            identifier?: {
                $eq?: string;
            };
        };
        toLocation?: {
            identifier?: {
                $eq?: string;
            };
        };
        pendingTransaction?: {
            identifier?: {
                $eq?: string;
            };
        };
    };
}
