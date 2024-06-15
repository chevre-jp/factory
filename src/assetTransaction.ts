import { ActionStatusType } from './actionStatusType';
import { AssetTransactionType } from './assetTransactionType';
import { IExtendId } from './autoGenerated';
import { OrganizationType } from './organizationType';
import { PersonType } from './personType';
import { SortType } from './sortType';
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
    // identifier?: IIdentifier; // 廃止(2024-03-05~)
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
    // identifier?: IIdentifier; // 廃止(2024-03-05~)
}
/**
 * 資産取引主体は販売者or管理者
 */
export type IAgent = IAgentAsSeller | IAgentAsPerson;
export interface IProject {
    id: string;
    typeOf: OrganizationType.Project;
}
export interface ITasksExportAction {
    actionStatus: ActionStatusType;
    agent?: { name: string };
    startDate?: Date;
    endDate?: Date;
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
    tasksExportAction?: ITasksExportAction;
    /**
     * タスクエクスポート日時
     * @deprecated use tasksExportAction
     */
    tasksExportedAt?: Date;
    /**
     * タスクエクスポート状態
     * @deprecated use tasksExportAction
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
     * @deprecated use tasksExportAction
     */
    statuses?: TransactionStatusType[];
    status?: {
        $in?: TransactionStatusType[];
    };
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
        $in?: string[];
    };
    // tasksExportationStatuses?: TransactionTasksExportationStatus[]; // discontinue(2024-06-17~)
    tasksExportAction?: {
        actionStatus?: {
            $eq?: ActionStatusType;
            $in?: ActionStatusType[];
        };
    };
}
