import { IAttributes as ICheckMovieTicketActionAttributes } from '../action/check/paymentMethod/movieTicket';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export type IData = ICheckMovieTicketActionAttributes;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.CheckMovieTicket;
    data: IData;
}
/**
 * 決済カード認証タスク
 */
export type ITask = IExtendId<IAttributes>;
