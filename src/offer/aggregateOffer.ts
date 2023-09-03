import { IOffer } from '../offer';
import { OfferType } from '../offerType';
import { IUnitPriceOffer } from '../unitPriceOffer';

export type ISubOffer = IUnitPriceOffer;
/**
 * 集計オファー
 */
export interface IAggregateOffer extends Pick<IOffer, 'typeOf' | 'project'> {
    typeOf: OfferType.AggregateOffer;
    /**
     * サブオファー
     * 基本的に1つの基本オファーが含まれる
     * 条件によるバリエーションが存在する場合、2つ以上のオファーが含まれる
     */
    offers: ISubOffer[]; // 追加(2023-09-01~)
}