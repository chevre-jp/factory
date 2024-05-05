import { CreativeWorkType } from './creativeWorkType';
import { IMemberRole } from './iam';
import { IOrder } from './order';
import { OrganizationType } from './organizationType';
import { IOwnershipInfo, IPermitAsGood, IPermitIssuedThrough, IReservation } from './ownershipInfo';
import { PersonType } from './personType';
import { IProject } from './project';
import { SortType } from './sortType';

export type IOrderAsObject = Pick<IOrder, 'orderNumber' | 'typeOf'>;
export type IPermitIssuedThroughOfObjectTypeOfGood = Pick<IPermitIssuedThrough, 'id' | 'typeOf'>;
export type IPermitAsObjectTypeOfGood = Pick<IPermitAsGood, 'identifier' | 'typeOf'> & {
    issuedThrough?: IPermitIssuedThroughOfObjectTypeOfGood;
};
export type IPermitOwnershipInfoAsObject = Pick<IOwnershipInfo<IPermitAsObjectTypeOfGood>, 'id' | 'identifier' | 'typeOf' | 'typeOfGood'>;
export type IReservationOwnershipInfoAsObject = Pick<IOwnershipInfo<IReservation>, 'id' | 'identifier' | 'typeOf' | 'typeOfGood'>;
export type IOwnershipInfoAsObject = IPermitOwnershipInfoAsObject | IReservationOwnershipInfoAsObject;
export type IRoleAsObject = Pick<IMemberRole, 'roleName' | 'typeOf'>;
export type IObject = IOrderAsObject | IOwnershipInfoAsObject | IRoleAsObject[];
export interface IAudience {
    /**
     * クライアントID
     */
    id: string;
    typeOf: CreativeWorkType.SoftwareApplication | CreativeWorkType.WebApplication;
}
export interface IAuthor {
    id: string;
    typeOf: PersonType.Person | CreativeWorkType.WebApplication;
}
export interface IIssuedBy {
    id: string;
    typeOf: OrganizationType.Corporation | OrganizationType.Project;
}

/**
 * 承認
 */
export interface IAuthorization {
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: 'Authorization';
    id?: string;
    /**
     * 承認コード
     */
    code: string;
    /**
     * 承認対象
     */
    object: IObject;
    /**
     * 有効期間
     */
    validFrom: Date;
    /**
     * 有効期間
     */
    validUntil: Date;
    audience?: IAudience;
    author?: IAuthor;
    issuedBy?: IIssuedBy;
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
        $eq?: string;
        $in?: string[];
    };
    code?: {
        $eq?: string;
        $in?: string[];
    };
    validFrom?: Date;
    validThrough?: Date;
    object?: IObjectSearchConditions;
}
