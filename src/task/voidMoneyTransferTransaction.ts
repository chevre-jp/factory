import { IPurpose } from '../action/authorize/offer/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export interface IData {
    agent?: { id: string };
    /**
     * 承認アクションID指定であれば、指定アクションのみ中止
     */
    id?: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    purpose: IPurpose;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.VoidMoneyTransferTransaction;
    data: IData;
}

/**
 * 通貨転送中止タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
