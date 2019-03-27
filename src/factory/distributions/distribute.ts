import * as DistributionsFactory from '../distributions';

/**
 * 配給インターフェース
 */
export interface IDistributions extends DistributionsFactory.IDistributions {
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
