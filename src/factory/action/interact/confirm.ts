import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import * as OrderFactory from '../../order';
import { TransactionType } from '../../transactionType';

// agent: Projectに統一(2022-05-16~)
export type IAgent = ActionFactory.IParticipantAsProject;
export type IObject = any;
export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}
export type IPurpose = ITransactionPurpose | OrderFactory.ISimpleOrder;
export type IResult = any;
export type IPotentialActions = any;
export interface IAttributes<TObject, TResult> extends Omit<ActionFactory.IAttributes<ActionType.ConfirmAction, TObject, TResult>, 'description' | 'location' | 'recipient'> {
    agent: IAgent;
    purpose: IPurpose;
}
/**
 * 確定アクション
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
