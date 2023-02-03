import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import * as OrderFactory from '../../order';
import { TransactionType } from '../../transactionType';
import { IAttributes as IGivePointAwardActionAttributes } from '../transfer/give/pointAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = OrderFactory.ISimpleOrder;

export type IResult = any;

export interface IPotentialActions {
    /**
     * ポイント付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePointAward?: IGivePointAwardActionAttributes[];
    /**
     * 決済アクションリスト
     * 廃止(2023-02-03~)
     */
    // pay?: IPayActionAttributes[];
    /**
     * 注文配送アクション
     */
    sendOrder?: ISendOrderActionAttributes;
}

export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}

export interface IAttributes extends ActionFactory.IAttributes<ActionType.OrderAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}

/**
 * 注文アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
