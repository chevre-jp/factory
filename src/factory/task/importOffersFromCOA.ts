import { IExtendId } from '../autoGenerated';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    project: IProject;
    theaterCode: string;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.AggregateScreeningEvent;
    data: IData;
}

/**
 * COA券種インポートタスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
