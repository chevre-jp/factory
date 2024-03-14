import { IParticipantAsProject } from '../../../action';
import * as RegisterServiceFactory from '../../../assetTransaction/registerService';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import * as ConfirmActionFactory from '../confirm';

export type IAgent = IParticipantAsProject;
export type IObject = Pick<RegisterServiceFactory.IConfirmParams, 'transactionNumber' | 'endDate'> & {
    transactionNumber: string;
    typeOf: AssetTransactionType.RegisterService;
    // permit.identifierでも確定可能にする(2022-07-19~)
    object?: { itemOffered?: { serviceOutput?: { identifier?: string } } };
};
export type IPurpose = ISimpleOrder;
export type IResult = any;
// export interface IPotentialActions {
// }
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    // potentialActions?: IPotentialActions; // 廃止(2024-03-11~)
    purpose: IPurpose;
}
/**
 * サービス登録確定アクション
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
