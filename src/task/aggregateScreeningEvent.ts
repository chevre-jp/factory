import { IExtendId } from '../autoGenerated';
import { EventType } from '../eventType';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export interface IData {
    typeOf: EventType.Event | EventType.ScreeningEvent;
    id: string;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.AggregateScreeningEvent;
    data: IData;
}
/**
 * イベント予約集計タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
