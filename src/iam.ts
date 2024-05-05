import { CreativeWorkType } from './creativeWorkType';
import { OrganizationType } from './organizationType';
import { PersonType } from './personType';
import { IProgramMembership } from './programMembership';
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

export type IMemberType = PersonType | CreativeWorkType.WebApplication | CreativeWorkType.SoftwareApplication;
export type IMemberRole = Pick<IRole, 'typeOf' | 'roleName'>;
export type IProgramMembershipOfProject = Pick<IProgramMembership, 'typeOf'> & {
    issuer: string;
    secret: string;
};
export interface IMemberOfAsProject {
    typeOf: OrganizationType.Project;
    id: string;
}
export interface IMemberOfAsSeller {
    typeOf: OrganizationType.Corporation;
    id: string;
}
export type IMemberOf = IMemberOfAsProject | IMemberOfAsSeller;
export interface IMemberOfWebApplication {
    memberOf?: IProgramMembershipOfProject;
}
export interface IMemberOfRole {
    typeOf: IMemberType;
    /**
     * クライアントID or Person ID
     */
    id: string;
    image?: string;
    name?: string;
    username?: string;
    hasRole: IMemberRole[];
    /**
     * プロジェクトメンバー or 販売者メンバー
     */
    memberOf: IMemberOf; // memberOfを必須化(2023-07-24~)
    /**
     * 所属会員
     */
    member?: IMemberOfWebApplication[]; // 所属メンバーシップを定義(2024-02-07~)
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
