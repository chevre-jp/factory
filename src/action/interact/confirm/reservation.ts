import * as COA from '@motionpicture/coa-service';

import * as ReserveTransactionFactory from '../../../assetTransaction/reserve';
import { AssetTransactionType } from '../../../assetTransactionType';
import { ISimpleOrder } from '../../../order';
import * as WebAPIFactory from '../../../service/webAPI';
import * as ConfirmActionFactory from '../confirm';

export type IObject4COA = COA.factory.reserve.IUpdReserveArgs & {
    // 取引番号は必須
    transactionNumber: string;
    typeOf: 'COAReserveTransaction';
};
export type IObject4Chevre = Pick<
    ReserveTransactionFactory.IConfirmParams,
    // 'transactionNumber' | 'object' | 'potentialActions'
    'transactionNumber' | 'potentialActions'
> & {
    // 取引番号は必須
    transactionNumber: string;
    typeOf: AssetTransactionType.Reserve;
};
export type IObject<T extends WebAPIFactory.Identifier> =
    T extends WebAPIFactory.Identifier.COA ? IObject4COA :
    IObject4Chevre;

export type IPurpose = ISimpleOrder;
export type IResult = any;
export type IInstrument<T extends WebAPIFactory.Identifier> = WebAPIFactory.IService<T>;
export interface IAttributes<T extends WebAPIFactory.Identifier> extends ConfirmActionFactory.IAttributes<IObject<T>, IResult> {
    // agent: IAgent;
    instrument: IInstrument<T>;
    purpose: IPurpose;
}
/**
 * 予約確定アクション
 */
export type IAction<T extends WebAPIFactory.Identifier> = ConfirmActionFactory.IAction<IAttributes<T>>;
