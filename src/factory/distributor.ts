/**
 * 配給インターフェース
 */
export interface IDistributor {
    id: string;
    name: string;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    name?: string;
    id?: string;
}
