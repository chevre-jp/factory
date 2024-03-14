import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { ISimpleOrder } from '../../order';
import { TransactionType } from '../../transactionType';
// import { IAttributes as IGivePointAwardActionAttributes } from '../transfer/give/pointAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = ISimpleOrder;
export type IResult = any;
export type ISendOrderPotentialAction = Pick<ISendOrderActionAttributes, 'potentialActions'>;
export interface IPotentialActions {
    // givePointAward?: IGivePointAwardActionAttributes[]; // 廃止(2024-03-12~)
    // pay?: IPayActionAttributes[]; // 廃止(2023-02-03~)
    // sendOrder?: ISendOrderActionAttributes;
    sendOrder?: ISendOrderPotentialAction; // optimize(2024-01-16~)
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
