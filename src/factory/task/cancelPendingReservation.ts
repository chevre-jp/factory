/**
 * 仮予約キャンセルタスクファクトリー
 */
import { IAttributes as ICancelReservationActionAttributes } from '../action/cancel/reservation';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export interface IData {
    actionAttributes: ICancelReservationActionAttributes[];
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.CancelPendingReservation;
    data: IData;
}
export type ITask = IExtendId<IAttributes>;
