import { CreativeWorkType } from './creativeWorkType';
import { OrganizationType } from './organizationType';
import { PersonType } from './personType';
import { SortType } from './sortType';

export enum RoleType {
    OrganizationRole = 'OrganizationRole'
}
export interface IRole {
    typeOf: RoleType;
    permissions: string[];
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
// export type IMemberHasRole = Pick<IRole, 'typeOf' | 'memberOf' | 'roleName'>[];
export type IMemberHasRole = Pick<IRole, 'typeOf' | 'roleName'>[];
export interface IMemberOfRole {
    typeOf: IMemberType;
    id: string;
    image?: string;
    name?: string;
    username?: string;
    hasRole: IMemberHasRole;
    // memberOfを必須化(2023-07-24~)
    memberOf: { typeOf: OrganizationType.Corporation | OrganizationType.Project; id: string };
}
export interface IMember {
    typeOf: RoleType;
    project: { typeOf: OrganizationType.Project; id: string };
    member: IMemberOfRole;
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
        // memberOfを必須化(2023-07-24~)
        memberOf?: {
            id?: { $eq?: string };
            typeOf?: { $eq?: OrganizationType.Corporation | OrganizationType.Project };
        };
    };
}
