import * as CreativeWorkFactory from '../creativeWork';
import { CreativeWorkType } from '../creativeWorkType';
import { IPerson } from '../person';
import { IProject } from '../project';
import { SortType } from '../sortType';

export interface IAbout {
    id: string;
    typeOf: string;
}
export type IAuthor = Pick<IPerson, 'id' | 'name' | 'typeOf'>;
export type IMention = Pick<IPerson, 'id' | 'name' | 'typeOf'>;
/**
 * コメント
 * {@link https://schema.org/Comment}
 */
export interface IComment extends Pick<CreativeWorkFactory.ICreativeWork, 'additionalProperty' | 'id' | 'typeOf'> {
    about: IAbout;
    author: IPerson;
    // commnet: Comment[]
    commentCount?: number;
    dateCreated: Date;
    dateModified?: Date;
    mentions?: IMention[];
    project: Pick<IProject, 'id' | 'typeOf'>;
    text: string;
    typeOf: CreativeWorkType.Comment;
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
    };
}
