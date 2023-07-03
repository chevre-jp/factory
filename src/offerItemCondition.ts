import { IMultilingualString } from './multilingualString';
import { ProductType } from './product';
import { IProject } from './project';
import { IQuantitativeValue } from './quantitativeValue';
import { ReservationType } from './reservationType';
import { SortType } from './sortType';
import { UnitCode } from './unitCode';

export type IGracePeriodBeforeStart = Pick<
    IQuantitativeValue<UnitCode.Sec>,
    'maxValue' | 'minValue' | 'typeOf' | 'unitCode'
>;
export interface IGracePeriodBeforeStartInDays {
    period: Pick<
        IQuantitativeValue<UnitCode.Day>,
        'value' | 'typeOf' | 'unitCode'
    >;
    time: string; // HH:mm:ssZ
    timezone: string; // Asia/Tokyo
}
export interface IItemOffered {
    typeOf: ProductType.EventService;
    serviceOutput?: {
        typeOf: ReservationType.EventReservation;
        /**
         * 未使用のみ
         */
        onlyUnused?: boolean;
        reservationFor: {
            /**
             * n秒前設定
             */
            gracePeriodBeforeStart?: IGracePeriodBeforeStart;
            /**
             * n日時前のHH:mm:ss設定
             */
            gracePeriodBeforeStartInDays?: {
                max?: IGracePeriodBeforeStartInDays;
                min?: IGracePeriodBeforeStartInDays;
            };
        };
    };
}
export interface IOfferItemCondition {
    id?: string;
    identifier: string;
    itemOffered: IItemOffered;
    name: IMultilingualString;
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: 'OfferItemCondition';
}

export interface ISortOrder {
    identifier?: SortType;
}

export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
    };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    identifier?: {
        $eq?: string;
        $in?: string[];
    };
}
