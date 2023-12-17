import { IMultilingualString } from './multilingualString';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { SortType } from './sortType';
import { IThing } from './thing';

export enum CategorySetIdentifier {
    /**
     * レイティング区分
     */
    ContentRatingType = 'ContentRatingType',
    /**
     * 通貨区分
     */
    CurrencyType = 'CurrencyType',
    /**
     * カスタマータイプ
     */
    CustomerType = 'CustomerType',
    /**
     * 配給区分
     */
    DistributorType = 'DistributorType',
    /**
     * メンバーシップタイプ
     */
    MembershipType = 'MembershipType',
    /**
     * 決済カード区分
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
export interface ICategoryCodeSet {
    typeOf: 'CategoryCodeSet';
    identifier: CategorySetIdentifier;
}
/**
 * {@link https://schema.org/CategoryCode}
 */
export interface ICategoryCode extends Pick<IThing, 'color' | 'image' | 'name'> {
    additionalProperty?: IPropertyValue<string>[];
    project: Pick<IProject, 'id' | 'typeOf'>;
    id?: string;
    typeOf: 'CategoryCode';
    codeValue: string;
    inCodeSet: ICategoryCodeSet;
    name: IMultilingualString;
    paymentMethod?: {
        /**
         * 決済カード区分の場合、対応決済方法区分
         */
        typeOf?: string;
    };
}
/**
 * 検索条件
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: {
        codeValue?: SortType;
    };
    project?: { id?: { $eq?: string } };
    id?: {
        $eq?: string;
        $in?: string[];
    };
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
         * 決済カード区分の場合、対応決済方法区分
         */
        typeOf?: {
            $eq?: string;
            $in?: string[];
        };
    };
    additionalProperty?: {
        $elemMatch?: {
            name?: {
                /**
                 * 一致する名称の追加特性がひとつでも存在する
                 */
                $eq?: string;
            };
        };
    };
}
