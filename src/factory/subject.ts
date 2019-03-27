import SortType from './sortType';

export interface ISubjectAttributes {
    /**
     * 科目分類CD
     */
    subjectClassificationCd: string;
    /**
     * 科目分類名称
     */
    subjectClassificationName: string;
    /**
     * 科目CD
     */
    subjectCd: string;
    /**
     * 科目名称
     */
    subjectName: string;
    /**
     * 細目CD
     */
    detailCd: string;
    /**
     * 細目名称
     */
    detailName: string;
}
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    subjectClassificationCd?: SortType;
    subjectClassificationName?: SortType;
}
/**
 * 科目検索条件インターフェース
 */
export interface ISubjectSearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 細目CD
     */
    detailCd?: string;
}
/**
 * 科目インターフェース
 */
export type ISubject = ISubjectAttributes & {
    id: string;
};
