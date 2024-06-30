import * as ActionFactory from '../../action';
import { ActionType } from '../../actionType';
import { AssetTransactionType } from '../../assetTransactionType';

export type IAgent = ActionFactory.IParticipantAsProject;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = any;
export interface IPayTransactionAsPurpose {
    id: string;
    typeOf: AssetTransactionType.Pay;
}
export interface IRefundTransactionAsPurpose {
    id: string;
    typeOf: AssetTransactionType.Refund;
}
export type IPurpose = IPayTransactionAsPurpose | IRefundTransactionAsPurpose;
export interface IResult {
    statusCode?: number;
    useFetchAPI?: boolean;
}
export interface IAttributes<TObject> extends Pick<
    ActionFactory.IAttributes<ActionType.InformAction, TObject, IResult>,
    'agent' | 'object' | 'project' | 'purpose' | 'recipient' | 'result' | 'typeOf'
> {
    agent: IAgent;
    recipient: IRecipient;
    // potentialActions?: IPotentialActions; // discontinue(2024-07-01~)
    purpose?: IPurpose;
}
/**
 * 通知アクション
 */
export type IAction<TAttributes extends IAttributes<IObject>> = ActionFactory.IAction<TAttributes>;
