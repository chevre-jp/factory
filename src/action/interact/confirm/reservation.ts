import { IParticipantAsProject } from '../../../action';
import * as ReserveTransactionFactory from '../../../assetTransaction/reserve';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import { IRecipe, IUpdReserveArgs } from '../../../recipe/confirmCOAReserve';
import * as WebAPIFactory from '../../../service/webAPI';
import * as ConfirmActionFactory from '../confirm';

export {
    IRecipe as IConfirmCOAReserveRecipe
};
export type IAgent = IParticipantAsProject;
export type IObject4COA = IUpdReserveArgs & {
    /**
     * 取引番号は必須
     */
    transactionNumber: string;
    typeOf: 'COAReserveTransaction';
};
export type IObject4Chevre = Pick<
    ReserveTransactionFactory.IConfirmParams,
    'transactionNumber' | 'potentialActions'
> & {
    /**
     * 取引番号は必須
     */
    transactionNumber: string;
    typeOf: AssetTransactionType.Reserve;
};
export type IObject<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IObject4COA :
    IObject4Chevre;

export type IPurpose = ISimpleOrder;
// tslint:disable-next-line:no-empty-interface
export interface IResult { }
export type IInstrument<T extends WebAPIFactory.Identifier> = WebAPIFactory.IService<T>;
export interface IAttributes<T extends WebAPIFactory.Identifier> extends ConfirmActionFactory.IAttributes<IObject<T>, IResult> {
    agent: IAgent;
    // instrument: IInstrument<T>; // 廃止(2024-03-13~)
    purpose: IPurpose;
}
/**
 * 予約取引確定アクション
 */
export type IAction<T extends WebAPIFactory.Identifier> = ConfirmActionFactory.IAction<IAttributes<T>>;
