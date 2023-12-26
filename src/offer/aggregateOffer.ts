import { IOffer } from '../offer';
import { OfferType } from '../offerType';
import { IUnitPriceOffer } from '../unitPriceOffer';

export type ISubOffer = Omit<IUnitPriceOffer, 'id' | 'project'>;
/**
 * 集計オファー
 */
export interface IAggregateOffer extends Pick<IOffer, 'id' | 'typeOf' | 'project'> {
    typeOf: OfferType.AggregateOffer;
    highPrice?: number;
    lowPrice?: number;
    offerCount?: number;
    /**
     * サブオファー
     * 基本的に1つの基本オファーが含まれる
     * 条件によるバリエーションが存在する場合、2つ以上のオファーが含まれる
     */
    offers: ISubOffer[];
}
