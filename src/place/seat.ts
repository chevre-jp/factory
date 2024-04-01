import { ItemAvailability } from '../itemAvailability';
import { IMultilingualString } from '../multilingualString';
import * as OfferFactory from '../offer';
import * as PlaceFactory from '../place';
import { PlaceType } from '../placeType';
import { IPriceSpecification as ICategoryCodeChargeSpecification } from '../priceSpecification/categoryCodeChargeSpecification';
import { IPriceSpecification as ICompoundPriceSpecification } from '../priceSpecification/compoundPriceSpecification';

/**
 * 座席に対する価格構成要素
 */
export type IPriceComponent = Pick<
    ICategoryCodeChargeSpecification,
    'appliesToCategoryCode' | 'name' | 'price' | 'priceCurrency' | 'typeOf' | 'valueAddedTaxIncluded'
>;

/**
 * 座席に対する価格仕様
 */
export type IPriceSpecification = Pick<ICompoundPriceSpecification<IPriceComponent>, 'typeOf' | 'priceComponent'>;

/**
 * 座席に対するオファー
 */
export interface IOffer extends Pick<OfferFactory.IOffer, 'availability'> {
    availability: ItemAvailability;
    /**
     * 座席区分加算料金の存在する場合、価格仕様が含まれる
     */
    priceSpecification?: IPriceSpecification;
}

/**
 * 座席タイプ
 */
export type ISeatingType = string | string[];

/**
 * 座席
 */
export interface IPlace extends Pick<
    PlaceFactory.IPlace,
    'project' | 'typeOf' | 'branchCode' | 'containedInPlace' | 'additionalProperty' | 'name' | 'maximumAttendeeCapacity'
> {
    typeOf: PlaceType.Seat;
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 名称
     */
    name?: IMultilingualString;
    /**
     * 座席タイプ
     */
    seatingType?: ISeatingType;
}

export interface IPlaceWithOffer extends IPlace {
    offers?: IOffer[];
}
export type IKeyOfProjection =
    'typeOf' | 'branchCode' | 'name' | 'seatingType' | 'additionalProperty'
    | 'containedInPlace.containedInPlace' | 'containedInPlace.typeOf' | 'containedInPlace.branchCode' | 'containedInPlace.name';
export type IProjection = { [key in IKeyOfProjection]?: 0; };
export interface ISearchConditions {
    $projection?: IProjection;
    limit?: number;
    page?: number;
    sort?: any;
    project?: { id?: { $eq?: string } };
    parentOrganization?: {
        id?: { $eq?: string };
    };
    branchCode?: {
        $eq?: string;
        $in?: string[];
        $regex?: string;
    };
    containedInPlace?: {
        branchCode?: {
            $eq?: string;
            $in?: string[];
        };
        containedInPlace: {
            branchCode?: { $eq?: string };
            containedInPlace: {
                branchCode?: { $eq?: string };
            };
        };
    };
    name?: {
        $regex?: string;
    };
    seatingType?: { $eq?: string };
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
