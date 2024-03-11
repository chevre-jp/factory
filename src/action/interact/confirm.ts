import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import * as OrderFactory from '../../order';
import { TransactionType } from '../../transactionType';

/**
 * 確定アクション主体
 * Projectに統一(2022-05-16~)
 * 決済取引に関してはクライアントによる確定がありうるので拡張(2024-03-11~)
 */
export type IAgent = ActionFactory.IParticipantAsPerson | ActionFactory.IParticipantAsProject | ActionFactory.IParticipantAsWebApplication;
// export type IAgent = ActionFactory.IParticipantAsProject;
export type IObject = any;
export interface ITransactionPurpose {
    typeOf: TransactionType.MoneyTransfer | TransactionType.PlaceOrder;
    id: string;
}
export type IPurpose = ITransactionPurpose | OrderFactory.ISimpleOrder;
export type IResult = any;
export type IPotentialActions = any;
export interface IAttributes<TObject, TResult> extends Pick<
    ActionFactory.IAttributes<ActionType.ConfirmAction, TObject, TResult>,
    'agent' | 'error' | 'instrument' | 'object'
    // | 'potentialActions' // 廃止(2024-03-11~)
    | 'project' | 'purpose' | 'result' | 'typeOf'
> {
    agent: IAgent;
    purpose: IPurpose;
}
/**
 * 確定アクション
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
