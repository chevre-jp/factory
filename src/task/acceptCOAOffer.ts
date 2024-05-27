import { IAttributes as IAcceptCOAOfferActionAttributes } from '../action/accept/coaOffer';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

// export interface IAppliesToSurfrock {
//     identifier: string;
//     serviceOutput: { typeOf: string };
// }
// export interface IData {
//     /**
//      * 承認アクションID
//      * 仮予約済の場合に指定
//      */
//     id?: string;
//     object: IObjectWithoutDetail<Identifier.COA>;
//     agent: { typeOf: PersonType.Person | CreativeWorkType.WebApplication };
//     purpose: { id: string };
//     appliesToSurfrock: IAppliesToSurfrock;
//     flgMember: COA.factory.reserve.FlgMember;
// }
export type IData = IAcceptCOAOfferActionAttributes;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.AcceptCOAOffer;
    data: IData;
}
/**
 * COA興行オファー採用タスク
 */
export type ITask = IExtendId<IAttributes>;