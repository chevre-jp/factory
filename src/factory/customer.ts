import IMultilingualString from './multilingualString';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { IProject } from './project';

/**
 * 連絡窓口
 */
export interface IContactPoint {
    typeOf: 'ContactPoint';
    email?: string;
    name?: string;
    telephone?: string;
}

/**
 * 顧客
 */
export interface ICustomer extends IOrganization {
    project: IProject;
    // 顧客コード
    identifier?: string;
    id: string;
    /**
     * 連絡窓口
     */
    contactPoint?: IContactPoint[];
    /**
     * 名称
     */
    name: IMultilingualString;
    typeOf: OrganizationType;
}

/**
 * 顧客検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    identifier?: { $regex?: string };
    name?: { $regex?: string };
    project?: { id?: { $eq?: string } };
}
