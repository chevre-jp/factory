import * as ActionFactory from '../../../action';
import AssetTransactionType from '../../../assetTransactionType';
// import * as GivePointAwardActionFactory from '../give/pointAward';
import { ISimpleOrder } from '../../../order';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象はポイント特典入金資産取引
 */
// export type IObject = GivePointAwardActionFactory.IAction;
export interface IObject {
    typeOf: AssetTransactionType.MoneyTransfer;
    identifier?: string;
}
export type IPurpose = ISimpleOrder;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * ポイントインセンティブ返却アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
