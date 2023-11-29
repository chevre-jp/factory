import { IPurpose as IAuthorizeEventServiceOfferPurpose } from '../action/authorize/offer/eventService';
import { IExtendId } from '../autoGenerated';
import { OrderStatus } from '../orderStatus';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import { TaskName } from '../taskName';

export type IPurpose = IAuthorizeEventServiceOfferPurpose & {
    // OrderCancelledに対応(2023-08-30~)
    result?: {
        order?: {
            orderStatus?: OrderStatus.OrderCancelled;
        };
    };
};
export interface IData {
    // agent?: { id: string }; // 廃止(2023-08-30~)
    /**
     * 承認アクションID指定であれば、指定アクションのみ中止
     */
    id?: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    purpose: IPurpose;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.VoidReserveTransaction;
    data: IData;
}

/**
 * 予約承認取消タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
