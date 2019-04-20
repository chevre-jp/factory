import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import SortType from './sortType';

export interface IDefinedTerm {
    typeOf: 'DefinedTerm';
    termCode: string;
    name?: string;
    description?: string;
}

/**
 * 勘定科目インターフェース
 * @see https://pending.schema.org/CategoryCode
 */
export interface IAccountTitle {
    project: IProject;
    typeOf: 'AccountTitle';
    /**
     * A short textual code that uniquely identifies the value.
     */
    codeValue: string;
    /**
     * The name of the item.
     */
    name?: string;
    /**
     * A description of the item.
     */
    description?: string;
    /**
     * A CategoryCodeSet that contains this catagory code.
     */
    inCodeSet?: IAccountTitle;
    /**
     * A Category code contained in this code set.
     */
    hasCategoryCode?: IAccountTitle[];
    /**
     * A DefinedTermSet that contains this term.
     */
    inDefinedTermSet?: IDefinedTerm;
    /**
     * A Defined Term contained in this term set.
     */
    hasDefinedTerm?: IDefinedTerm[];
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    codeValue?: SortType;
    name?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
    codeValue?: string;
    name?: string;
    inCodeSet?: {
        codeValue?: string;
        name?: string;
        inCodeSet?: {
            codeValue?: string;
            name?: string;
        };
    };
}
