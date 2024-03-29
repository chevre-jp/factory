import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';
import { IObject as IMoneyTransferObject, ITransaction as IMoneyTransfer } from '../transaction/moneyTransfer';
import { IObject as IPlaceOrderObject, ITransaction as IPlaceOrder } from '../transaction/placeOrder';
import { IObject as IReturnOrderObject, ITransaction as IReturnOrder } from '../transaction/returnOrder';
import { TransactionType } from '../transactionType';

/**
 * オブジェクト特定方法
 */
export enum SpecifyingMethod {
    Id = 'Id',
    AgentId = 'AgentId'
}
export type IObjectAsMoneyTransfer = Pick<IMoneyTransfer, 'project' | 'id' | 'typeOf' | 'startDate' | 'endDate'> & {
    object: Pick<IMoneyTransferObject, 'pendingTransaction'>;
    specifyingMethod?: SpecifyingMethod.Id;
};
export type IObjectAsPlaceOrder = Pick<IPlaceOrder, 'project' | 'id' | 'typeOf' | 'startDate' | 'endDate'> & {
    object: Pick<IPlaceOrderObject, 'confirmationNumber' | 'orderNumber'>;
    specifyingMethod?: SpecifyingMethod.Id;
};
export type IObjectAsReturnOrder = Pick<IReturnOrder, 'project' | 'id' | 'typeOf' | 'startDate' | 'endDate'> & {
    object: Pick<IReturnOrderObject, 'order'>;
    specifyingMethod?: SpecifyingMethod.Id;
};
export interface IObjectByAgentId {
    specifyingMethod: SpecifyingMethod.AgentId;
    project: { id: string };
    typeOf: TransactionType;
    agent: { id: string };
}
export type IObject = IObjectAsMoneyTransfer | IObjectAsPlaceOrder | IObjectAsReturnOrder | IObjectByAgentId;
export interface IData {
    object: IObject;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.DeleteTransaction;
    data: IData;
}
/**
 * 取引削除タスク
 */
export type ITask = IExtendId<IAttributes>;
