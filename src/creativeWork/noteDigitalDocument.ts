import * as CreativeWorkFactory from '../creativeWork';
import { CreativeWorkType } from '../creativeWorkType';
import { IOrder } from '../order';
import { IPerson } from '../person';
import { IProject } from '../project';
import { SortType } from '../sortType';

export type IAboutAsOrder = Pick<IOrder, 'orderNumber' | 'typeOf'> & {
    id: string;
};
export type IAbout = IAboutAsOrder;
export type ICreator = Pick<IPerson, 'id' | 'typeOf'>;
export type IEditor = Pick<IPerson, 'id' | 'typeOf'>;
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
    creator: ICreator; // 作成者
    editor?: IEditor; // 変更者
    version: string; // バージョン
    typeOf: CreativeWorkType.NoteDigitalDocument;
}

/**
 * ソート条件
 */
export interface ISortOrder {
    dateCreated?: SortType;
}

/**
 * 検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
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
    };
}
