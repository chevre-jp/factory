import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

export enum CategorySetIdentifier {
    /**
     * 座席タイプ
     */
    SeatingType = 'SeatingType',
    /**
     * 上映方式タイプ
     */
    VideoFormatType = 'VideoFormatType',
    /**
     * 音響方式タイプ
     */
    SoundFormatType = 'SoundFormatType',
    /**
     * ムビチケ券種区分
     */
    MovieTicketType = 'MovieTicketType',
    /**
     * 興行区分
     */
    ServiceType = 'ServiceType'
}

/**
 * @see https://schema.org/CategoryCodeSet
 */
export interface ICategoryCodeSet extends IThing {
    typeOf: 'CategoryCodeSet';
    identifier: CategorySetIdentifier;
}

/**
 * @see https://schema.org/CategoryCode
 */
export interface ICategoryCode extends IThing {
    project: IProject;
    id?: string;
    typeOf: 'CategoryCode';
    codeValue: string;
    inCodeSet: ICategoryCodeSet;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: any;
    project?: { id?: { $eq?: string } };
    name?: { $regex?: string };
    codeValue?: { $eq?: string };
    inCodeSet?: {
        identifier?: { $eq?: string };
    };
}
