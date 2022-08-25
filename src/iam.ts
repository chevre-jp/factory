import { CreativeWorkType } from './creativeWorkType';
import { OrganizationType } from './organizationType';
import { PersonType } from './personType';
import { SortType } from './sortType';

export enum RoleType {
    OrganizationRole = 'OrganizationRole'
}
export interface IRole {
    typeOf: RoleType;
    permissions?: string[];
    roleName: string;
    memberOf: { typeOf: OrganizationType.Project; id: string };
}

/**
 * IAMロール検索条件
 */
export interface IRoleSearchConditions {
    limit?: number;
    page?: number;
    sort?: {
        roleName?: SortType;
    };
    roleName?: {
        $eq?: string;
        $in?: string[];
    };
    permissions?: {
        $eq?: string;
    };
}

export type IMemberType = PersonType | CreativeWorkType.WebApplication;
export interface IMember {
    typeOf: RoleType;
    project: { typeOf: OrganizationType.Project; id: string };
    member: {
        typeOf: IMemberType;
        id: string;
        name?: string;
        username?: string;
        hasRole: IRole[];
    };
}

/**
 * プロジェクトメンバー検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: {
        'member.id'?: SortType;
    };
    id?: { $eq?: string };
    project?: {
        id?: {
            $eq?: string;
            $regex?: string;
        };
    };
    member?: {
        hasRole?: {
            roleName?: { $eq?: string };
        };
        id?: {
            $eq?: string;
            $in?: string[];
        };
        name?: { $regex?: string };
        typeOf?: {
            $eq?: string;
        };
    };
}
