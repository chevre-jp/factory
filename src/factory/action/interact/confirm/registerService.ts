import * as ActionFactory from '../../../action';
import { ActionType } from '../../../actionType';
import * as OrderFactory from '../../../order';

export type IAcceptedOffer = OrderFactory.IAcceptedOffer<any>;
export type IObject = any;
export type IResult = any;
export type IPurpose = OrderFactory.ISimpleOrder;

export type IPotentialActions = any;

export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}

/**
 * サービス登録アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
