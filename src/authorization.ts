import { IOrder } from './order';
import { IGood, IOwnershipInfo } from './ownershipInfo';
import { IProject } from './project';
import { SortType } from './sortType';

// strict definetion(2023-01-31~)
export type IOrderAsObject = Pick<IOrder, 'orderNumber' | 'typeOf'>;
// export type IObject = IOwnershipInfo<IGood> | ISimpleOrder;
export type IObject = IOwnershipInfo<IGood> | IOrderAsObject;

/**
 * 承認
 */
export interface IAuthorization {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: 'Authorization';
    code: string;
    object: IObject;
    validFrom: Date;
    validUntil: Date;
}

/**
 * ソート条件
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
 * 承認検索条件
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
