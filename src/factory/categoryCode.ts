import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

export enum CategorySetIdentifier {
    /**
     * レーティングタイプ
     */
    ContentRatingType = 'ContentRatingType',
    /**
     * 通貨区分
     */
    CurrencyType = 'CurrencyType',
    /**
     * 配給区分
     */
    DistributorType = 'DistributorType',
    /**
     * メンバーシップタイプ
     */
    MembershipType = 'MembershipType',
    /**
     * 決済カード(ムビチケ券種)区分
     */
    MovieTicketType = 'MovieTicketType',
    /**
     * オファーカテゴリータイプ
     */
    OfferCategoryType = 'OfferCategoryType',
    /**
     * 決済方法タイプ
     */
    PaymentMethodType = 'PaymentMethodType',
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
 * {@link https://schema.org/CategoryCodeSet}
 */
export interface ICategoryCodeSet extends IThing {
    typeOf: 'CategoryCodeSet';
    identifier: CategorySetIdentifier;
}

/**
 * {@link https://schema.org/CategoryCode}
 */
export interface ICategoryCode extends IThing {
    project: IProject;
    id?: string;
    typeOf: 'CategoryCode';
    codeValue: string;
    inCodeSet: ICategoryCodeSet;
    additionalProperty?: IPropertyValue<string>[];
    paymentMethod?: {
        /**
         * 決済カード区分の場合、対応決済方法
         */
        typeOf?: string;
    };
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
    codeValue?: {
        $eq?: string;
        $in?: string[];
    };
    inCodeSet?: {
        identifier?: {
            $eq?: string;
            $in?: string[];
        };
    };
    paymentMethod?: {
        /**
         * 決済カード区分の場合、対応決済方法
         */
        typeOf?: {
            $eq?: string;
            $in?: string[];
        };
    };
}
