import * as ActionFactory from '../action';
import { ActionType } from '../actionType';
import { TransactionType } from '../transactionType';

export type IObject = any;
export type IResult = any;
export interface IPurpose {
    /**
     * 注文取引ID
     */
    id: string;
    typeOf: TransactionType.PlaceOrder;
}
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.AcceptAction, TObject, TResult> {
    purpose?: IPurpose;
}
/**
 * 採用アクション
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
