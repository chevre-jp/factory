import { IExtendId } from '../autoGenerated';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    project: IProject;
    /**
     * 劇場枝番号
     */
    locationBranchCode: string;
    /**
     * 仕入れ期間from
     */
    importFrom: Date;
    /**
     * 仕入れ期間through
     */
    importThrough: Date;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ImportEventsFromCOA;
    data: IData;
}

/**
 * イベントインポートタスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
