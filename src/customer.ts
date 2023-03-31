import { IMultilingualString } from './multilingualString';
import { IOrganization } from './organization';
import { OrganizationType } from './organizationType';
import { IProject } from './project';
import { SortType } from './sortType';

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
    project: Pick<IProject, 'id' | 'typeOf'>;
    /**
     * 顧客コード
     */
    branchCode?: string;
    id: string;
    /**
     * 連絡窓口
     */
    contactPoint?: IContactPoint[];
    /**
     * 名称
     */
    name: IMultilingualString;
    typeOf: OrganizationType.Organization;
}

/**
 * ソート条件
 */
export interface ISortOrder {
    branchCode?: SortType;
}
/**
 * 顧客検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    branchCode?: { $regex?: string };
    name?: { $regex?: string };
    project?: { id?: { $eq?: string } };
}
