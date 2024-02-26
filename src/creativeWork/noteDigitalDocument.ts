import * as CreativeWorkFactory from '../creativeWork';
import { CreativeWorkType } from '../creativeWorkType';
import { IOrder } from '../order';
import { OrganizationType } from '../organizationType';
import { IPerson } from '../person';
import { IProject } from '../project';
import { SortType } from '../sortType';

export type IAboutAsOrder = Pick<IOrder, 'orderNumber' | 'typeOf'> & {
    id: string;
};
export type IAbout = IAboutAsOrder;
export type ICreator = Pick<IPerson, 'id' | 'typeOf'>;
export type IEditor = Pick<IPerson, 'id' | 'typeOf'>;
export interface IProvider {
    /**
     * 販売者ID
     */
    id: string;
    typeOf: OrganizationType.Corporation;
}
/**
 * メモ
 */
export interface INoteDigitalDocument extends Pick<CreativeWorkFactory.ICreativeWork, 'id' | 'typeOf'> {
    /**
     * メモ識別子
     */
    identifier: string;
    /**
     * メモコンテンツ
     */
    text: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    about: IAbout;
    dateCreated: Date;
    dateModified?: Date;
    /**
     * 作成者
     */
    creator: ICreator;
    /**
     * 変更者
     */
    editor?: IEditor;
    provider: IProvider;
    /**
     * バージョン
     */
    version: string;
    typeOf: CreativeWorkType.NoteDigitalDocument;
}

/**
 * ソート条件
 */
export interface ISortOrder {
    identifier?: SortType;
}

/**
 * 検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    id?: {
        $in?: string[];
    };
    project?: {
        id?: { $eq?: string };
    };
    provider?: {
        id?: { $eq?: string };
    };
    about?: {
        id?: {
            $eq?: string;
            $in?: string[];
        };
        orderNumber?: {
            $eq?: string;
            $in?: string[];
        };
    };
    identifier?: {
        $eq?: string;
        $in?: string[];
    };
}
