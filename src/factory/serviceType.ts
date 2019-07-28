import IMultilingualString from './multilingualString';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import SortType from './sortType';

/**
 * サービスタイプ(興行区分)インターフェース
 */
export interface IServiceType {
    project: IProject;
    typeOf: 'ServiceType';
    id: string;
    identifier: string;
    name: string | IMultilingualString;
    description?: string;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    _id?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
    name?: string;
    ids?: string[];
    identifiers?: string[];
}
