import { IExtendId } from './autoGenerated';
import SortType from './sortType';
import * as TaskExecutionResult from './taskExecutionResult';
import TaskName from './taskName';
import TaskStatus from './taskStatus';

export type IData = any;

/**
 * タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;

export interface IAttributes {
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
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    /**
     * データ
     * TaskNameによってインターフェースが決定する
     */
    data: any;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    runsAt?: SortType;
}

/**
 * タスク検索条件インターフェース
 */
export interface ISearchConditions<T extends TaskName | string> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    name?: T;
    statuses?: TaskStatus[];
    runsFrom?: Date;
    runsThrough?: Date;
    lastTriedFrom?: Date;
    lastTriedThrough?: Date;
}
