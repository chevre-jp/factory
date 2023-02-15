import { IExtendId } from '../autoGenerated';
import { OrganizationType } from '../organizationType';
import { SortType } from '../sortType';
import { TransactionStatusType } from '../transactionStatusType';
// import { TransactionTasksExportationStatus } from '../transactionTasksExportationStatus';
import * as MoneyTransferActionFactory from './action/moneyTransfer';
import { AccountTransactionType } from './transactionType';

export import IAgent = MoneyTransferActionFactory.IAgent;
export import IRecipient = MoneyTransferActionFactory.IRecipient;
export interface ISimpleAccount {
    accountNumber: string;
}
export interface IProject {
    id: string;
    typeOf: OrganizationType.Project;
}
export interface IObjectWithoutDetail {
    // clientUser?: IClientUser;
    amount: {
        value: number;
    };
    description?: string;
}
export interface IObject {
    // clientUser?: IClientUser;
    /**
     * 金額
     */
    amount: {
        value: number;
    };
    description?: string;
}
/**
 * 口座取引開始パラメータ
 */
export interface IStartParams<T extends AccountTransactionType, TObject extends IObject> {
    project: IProject;
    /**
     * 取引タイプ
     */
    typeOf: T;
    /**
     * 取引識別子
     * 同識別子に対する進行中取引のユニークネスは保証される
     */
    identifier?: string;
    /**
     * 取引番号
     * サービス使用側が指定するグローバルユニークな番号
     * 必須化(2022-09-26~)
     */
    transactionNumber: string;
    /**
     * 取引主体
     */
    agent: IAgent;
    /**
     * 取引物受取者
     */
    recipient: IRecipient;
    /**
     * 取引対象
     */
    object: TObject;
    /**
     * 取引進行期限
     */
    expires: Date;
}
export interface IPotentialActions {
    moneyTransfer: MoneyTransferActionFactory.IAttributes;
}
/**
 * エラー
 */
// export type IError = any;
// tslint:disable-next-line:no-empty-interface
// export interface IResult {
// }
/**
 * 口座取引属性
 */
export type IAttributes<TStartParams> = TStartParams & {
    /**
     * 取引状態
     */
    status: TransactionStatusType;
    /**
     * 取引結果
     */
    // result?: IResult;
    /**
     * 取引エラー
     */
    // error?: IError;
    /**
     * 取引開始日時
     */
    startDate: Date;
    /**
     * 取引終了日時
     */
    endDate?: Date;
    /**
     * タスクエクスポート日時
     */
    // tasksExportedAt?: Date;
    /**
     * タスクエクスポート状態
     */
    // tasksExportationStatus: TransactionTasksExportationStatus;
    /**
     * 事後に発生するアクション
     */
    potentialActions?: IPotentialActions;
};
/**
 * 口座取引
 */
export type ITransaction<TStartParams> = IExtendId<IAttributes<TStartParams>>;
export interface ISortOrder {
    startDate?: SortType;
}
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { id?: { $eq?: string } };
    typeOf?: { $eq?: AccountTransactionType };
    status?: { $in?: TransactionStatusType[] };
    startDate?: {
        $gte?: Date;
        $lte?: Date;
    };
    identifier?: { $eq?: string };
    transactionNumber?: { $eq?: string };
    object?: {
        fromLocation?: { accountNumber?: { $eq?: string } };
        toLocation?: { accountNumber?: { $eq?: string } };
        location?: {
            /**
             * 口座番号
             */
            accountNumber?: { $eq?: string };
        };
    };
}
