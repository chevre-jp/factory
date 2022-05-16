import { IAttributes as IConfirmPayActionAttributes } from '../action/interact/confirm/pay';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export type IData = IConfirmPayActionAttributes;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ConfirmPayTransaction;
    data: IData;
}
/**
 * 決済資産取引確定タスク
 */
export type ITask = IExtendId<IAttributes>;
