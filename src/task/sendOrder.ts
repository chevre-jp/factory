import * as SendOrderActionFactory from '../action/transfer/send/order';
import { IExtendId } from '../autoGenerated';
import { OrderStatus } from '../orderStatus';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export type IObject = SendOrderActionFactory.IObject & {
    confirmationNumber: string;
    /**
     * OrderInTransit導入期の互換性維持対応として
     */
    previousOrderStatus?: OrderStatus.OrderInTransit;
};
export interface IData {
    project: Pick<IProject, 'id' | 'typeOf'>;
    object: IObject;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.SendOrder;
    data: IData;
}
/**
 * 注文配送タスク
 */
export type ITask = IExtendId<IAttributes>;
