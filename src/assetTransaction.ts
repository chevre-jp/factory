import { AssetTransactionType } from './assetTransactionType';
import { IExtendId } from './autoGenerated';
import { OrganizationType } from './organizationType';
import { PersonType } from './personType';
import { SortType } from './sortType';
import { IIdentifier } from './thing';
import { TransactionStatusType } from './transactionStatusType';
import { TransactionTasksExportationStatus } from './transactionTasksExportationStatus';

/**
 * 販売者主体
 */
export interface IAgentAsSeller {
    typeOf: OrganizationType.Corporation;
    id: string;
    /**
     * 名称は必須
     */
    name: string;
    identifier?: IIdentifier;
}
/**
 * 管理者主体
 */
export interface IAgentAsPerson {
    typeOf: PersonType.Person;
    id: string;
    /**
     * 名称は必須
     */
    name: string;
    identifier?: IIdentifier;
}
/**
 * 資産取引主体は販売者or管理者
 */
export type IAgent = IAgentAsSeller | IAgentAsPerson;
export interface IProject {
    id: string;
    typeOf: OrganizationType.Project;
}
/**
 * 資産取引開始パラメータ
 */
export interface IStartParams<T extends AssetTransactionType, TAgent extends IAgent, TRecipient, TObject> {
    project: IProject;
    /**
     * 取引タイプ
     */
    typeOf: T;
    /**
     * 取引識別子
     */
    identifier?: string;
    /**
     * 取引番号
     */
    transactionNumber: string;
    /**
     * 取引主体
     */
    agent: TAgent;
    /**
     * 取引物受取者
     */
    recipient?: TRecipient;
    /**
     * 取引対象
     */
    object: TObject;
    /**
     * 取引進行期限
     */
    expires: Date;
}
/**
 * 資産取引属性
 */
export type IAttributes<TStartParams, TResult, TError, TPotentialActions> = TStartParams & {
    purpose?: any;
    /**
     * 取引状態
     */
    status: TransactionStatusType;
    /**
     * 取引結果
     */
    result?: TResult;
    /**
     * 取引エラー
     */
    error?: TError;
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
    tasksExportedAt?: Date;
    /**
     * タスクエクスポート状態
     */
    tasksExportationStatus: TransactionTasksExportationStatus;
    /**
     * 事後に発生するアクション
     */
    potentialActions?: TPotentialActions;
};
/**
 * 資産取引
 */
export type ITransaction<TStartParams, TResult, TError, TPotentialActions> =
    IExtendId<IAttributes<TStartParams, TResult, TError, TPotentialActions>>;
/**
 * ソート条件
 */
export interface ISortOrder {
    startDate?: SortType;
}
export interface ISearchConditions<T extends AssetTransactionType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    /**
     * 取引タイプ
     */
    typeOf: T;
    /**
     * IDリスト
     */
    ids?: string[];
    /**
     * ステータスリスト
     */
    statuses?: TransactionStatusType[];
    /**
     * 開始日時(から)
     */
    startFrom?: Date;
    /**
     * 開始日時(まで)
     */
    startThrough?: Date;
    /**
     * 終了日時(から)
     */
    endFrom?: Date;
    /**
     * 終了日時(まで)
     */
    endThrough?: Date;
    agent?: {
        ids?: string[];
    };
    transactionNumber?: {
        $eq?: string;
    };
    tasksExportationStatuses?: TransactionTasksExportationStatus[];
}
