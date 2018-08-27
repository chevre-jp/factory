import * as CreativeWorkFactory from '../creativeWork';

/**
 * 映画作品インターフェース
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    identifier: string;
    name: string;
    /**
     * 上映時間
     */
    duration: string;
    /**
     * 映倫区分(PG12,R15,R18)
     */
    contentRating: string;
}
/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    identifier?: string;
    name?: string;
}
