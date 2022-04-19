import { IProject } from './project';
import { SortType } from './sortType';

/**
 * 承認インターフェース
 */
export interface IAuthorization {
    project: IProject;
    typeOf: 'Authorization';
    code: string;
    object: any;
    validFrom: Date;
    validUntil: Date;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    validFrom?: SortType;
}

export interface IObjectSearchConditions {
    typeOfs?: string[];
    ids?: string[];
    typeOfGood?: {
        typeOfs?: string[];
        ids?: string[];
    };
}

/**
 * 承認検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    id?: {
        $in?: string[];
    };
    code?: {
        $in?: string[];
    };
    codes?: string[];
    validFrom?: Date;
    validThrough?: Date;
    object?: IObjectSearchConditions;
}
