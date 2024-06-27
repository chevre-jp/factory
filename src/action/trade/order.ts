import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { ISimpleOrder } from '../../order';
import { TransactionType } from '../../transactionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = ISimpleOrder;
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export interface IAttributes extends Pick<
    ActionFactory.IAttributes<ActionType.OrderAction, IObject, IResult>,
    'typeOf' | 'result' | 'purpose' | 'project' | 'object' | 'error' | 'agent'
> {
    // potentialActions?: IPotentialActions; // discontinue(2024-06-28~)
    purpose?: IPurpose;
}
/**
 * 注文アクション
 */
export type IAction = ActionFactory.IAction<IAttributes>;
