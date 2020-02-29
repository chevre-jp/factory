import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

export enum CategorySetIdentifier {
    /**
     * 口座タイプ
     */
    AccountType = 'AccountType',
    /**
     * レーティングタイプ
     */
    ContentRatingType = 'ContentRatingType',
    /**
     * 配給区分
     */
    DistributorType = 'DistributorType',
    /**
     * ムビチケ券種区分
     */
    MovieTicketType = 'MovieTicketType',
    /**
     * オファーカテゴリータイプ
     */
    OfferCategoryType = 'OfferCategoryType',
    /**
     * 座席タイプ
     */
    SeatingType = 'SeatingType',
    /**
     * サービス区分
     */
    ServiceType = 'ServiceType',
    /**
     * 音響方式タイプ
     */
    SoundFormatType = 'SoundFormatType',
    /**
     * 上映方式タイプ
     */
    VideoFormatType = 'VideoFormatType'
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
    id?: { $eq?: string };
    name?: { $regex?: string };
    codeValue?: { $eq?: string };
    inCodeSet?: {
        identifier?: { $eq?: string };
    };
}
