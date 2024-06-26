import { IExtendId } from './autoGenerated';
import { IProject } from './project';
import { SortType } from './sortType';
import { TaskName } from './taskName';
import { TaskStatus } from './taskStatus';

export type IData = any;
export type IExecutionErrorAsObject = Error;
/**
 * タスク実行結果
 */
export interface IExecutionResult {
    executedAt: Date;
    endDate: Date;
    error: string | IExecutionErrorAsObject;
}
export interface IExecutor {
    name: string;
}
/**
 * タスク
 */
export type ITask = IExtendId<IAttributes>;
export interface IAttributes {
    /**
     * タスク識別子
     * 冗長なタスク作成を回避するために使用(2023-09-01~)
     */
    identifier?: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * タスク名
     */
    name: TaskName;
    /**
     * タスク状況
     */
    status: TaskStatus;
    /**
     * いつ実行するか
     */
    runsAt: Date;
    /**
     * あと何回トライできるか
     */
    remainingNumberOfTries: number;
    /**
     * 最終トライ日時
     */
    lastTriedAt?: Date;
    /**
     * すでにトライした回数
     */
    numberOfTried: number;
    /**
     * 実行結果リスト
     */
    executionResults: IExecutionResult[];
    executor?: IExecutor;
    /**
     * データ
     * TaskNameによってインターフェースが決定する
     */
    data: IData;
    /**
     * 中止日時
     */
    dateAborted?: Date;
    /**
     * 実行期限
     */
    expires?: Date; // add(2024-04-34~)
}
/**
 * ソート条件
 */
export interface ISortOrder {
    runsAt?: SortType;
}
export interface IDataSearchConditions {
    object?: {
        id?: { $eq?: string };
        orderNumber?: { $eq?: string };
        transactionNumber?: { $eq?: string };
    };
    purpose?: {
        id?: { $eq?: string };
        orderNumber?: { $eq?: string };
    };
}
/**
 * タスク検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    id?: { $eq?: string };
    project?: {
        id?: { $eq?: string };
    };
    name?: string | {
        $in?: string[];
        $nin?: string[];
    };
    statuses?: TaskStatus[];
    runsFrom?: Date;
    runsThrough?: Date;
    lastTriedFrom?: Date;
    lastTriedThrough?: Date;
    data?: IDataSearchConditions;
    dateAborted?: {
        $gte?: Date;
        $lte?: Date;
    };
}
