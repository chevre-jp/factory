import SortType from './sortType';

/**
 * サービスタイプ(興行区分)インターフェース
 */
export interface IServiceType {
    typeOf: 'ServiceType';
    id: string;
    name: string;
    description?: string;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    startDate?: SortType;
    endDate?: SortType;
    status?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    name?: string;
    ids?: string[];
}
