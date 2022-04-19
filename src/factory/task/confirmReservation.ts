import { IAttributes as IConfirmReservationActionAttributes } from '../action/interact/confirm/reservation';
import { IExtendId } from '../autoGenerated';
import * as WebAPIFactory from '../service/webAPI';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export type IData = IConfirmReservationActionAttributes<WebAPIFactory.Identifier>;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ConfirmReservation;
    data: IData;
}
/**
 * 予約確定タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
