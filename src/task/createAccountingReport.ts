import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export interface IData {
    object: {
        mainEntity: { orderNumber: string };
    };
    project: { id: string };
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.CreateAccountingReport;
    data: IData;
}
export type ITask = IExtendId<IAttributes>;
