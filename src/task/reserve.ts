import { IObject } from '../action/reserve';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export interface IPotentialReserveAction {
    /**
     * 予約番号だけあれば、自動的に予約取引を参照する
     */
    object: Pick<IObject, 'reservationNumber'>;
}
// export interface IData {
//     actionAttributes: IReserveActionAttributes[];
// }
export type IData = IPotentialReserveAction; // optimize(2024-07-01~)
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.Reserve;
    data: IData;
}
/**
 * 予約タスク
 */
export type ITask = IExtendId<IAttributes>;
