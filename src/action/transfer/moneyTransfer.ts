import * as AccountFactory from '../../account';
import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import * as MoneyTransferTransactionFactory from '../../assetTransaction/moneyTransfer';
import { AssetTransactionType } from '../../assetTransactionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import { PermitType } from '../../permit';

/**
 * 進行中取引
 */
export interface IPendingTransaction {
    typeOf: AccountFactory.transactionType;
    // idは不要なので廃止(2023-02-20~)
    // id: string;
    identifier?: string;
    // 必須化(2022-09-26~)
    transactionNumber: string;
}
export type IAgent = ActionFactory.IParticipantAsProject
    | ActionFactory.IParticipantAsPerson
    | ActionFactory.IParticipantAsSeller;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 匿名ロケーション
 */
export interface IAnonymousLocation {
    id?: string;
    identifier?: string;
    name?: string;
    typeOf: string;
}
/**
 * ペイメントカード
 */
export import IPaymentCard = MoneyTransferTransactionFactory.IPaymentCard;
/**
 * 転送元あるいは転送先の場所インターフェース
 */
export type ILocation = IAnonymousLocation | IPaymentCard;
export interface IObject {
    typeOf: AccountFactory.transactionType;
    transactionNumber?: string;
    /**
     * 取引承認済の場合、進行中取引
     */
    pendingTransaction?: IPendingTransaction;
}
export type IResult = any;
export type IPotentialActions = any;
export interface ITransactionPurpose {
    typeOf: AssetTransactionType;
    id: string;
    identifier?: string;
}
export type IPurpose = ITransactionPurpose;
export type IAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'>;
export interface IAttributes extends ActionFactory.IAttributes<ActionType.MoneyTransfer, IObject, IResult> {
    typeOf: ActionType.MoneyTransfer;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: IAmount;
    /**
     * 転送元
     */
    fromLocation: ILocation;
    /**
     * 転送先
     */
    toLocation: ILocation;
}
export type IAction = ActionFactory.IAction<IAttributes>;

export type IPointAwardAmount = Pick<IMonetaryAmount, 'typeOf' | 'currency' | 'value'>;
/**
 * ポイント特典
 */
export interface IPointAward {
    typeOf: ActionType.MoneyTransfer;
    amount?: IPointAwardAmount;
    /**
     * 特典付与先
     */
    toLocation?: {
        typeOf: PermitType.Permit;
        /**
         * カード番号
         */
        identifier: string;
        issuedThrough: {
            /**
             * カード発行サービスID
             */
            id: string;
        };
    };
    description?: string;
    recipient?: IRecipient;
    purpose?: {
        /**
         * 特典識別子
         */
        identifier?: string;
    };
}
