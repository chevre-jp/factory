export interface IBoxOfficeTypeAttributes {
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
/**
 * 興行区分インターフェース
 */
export type IBoxOfficeType = IBoxOfficeTypeAttributes & {
    id: string;
};
