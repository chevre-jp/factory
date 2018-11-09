import SortType from './sortType';

/**
 * 勘定科目インターフェース
 */
export interface IAccountTitle {
    typeOf: 'AccountTitle';
    /**
     * 科目コード
     */
    identifier: string;
    /**
     * 科目名
     */
    name: string;
    /**
     * 内容
     */
    description?: string;
    /**
     * 分類
     */
    category?: IAccountTitle;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'category.category.identifier'?: SortType;
    'category.category.name'?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    identifier?: string;
}
