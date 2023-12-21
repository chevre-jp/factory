import { IMultilingualString } from './multilingualString';
import { IPropertyValue } from './propertyValue';

/**
 * 識別子インターフェース
 */
export type IIdentifier = IPropertyValue<string>[];

/**
 * {@link https://schema.org/Thing}
 */
export interface IThing {
    /**
     * An alias for the item.
     */
    alternateName?: string | IMultilingualString;
    /**
     * The color of the product.
     */
    color?: string;
    /**
     * A description of the item.
     * 説明
     */
    description?: string | IMultilingualString;
    /**
     * The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc.
     */
    identifier?: IIdentifier | string;
    /**
     * An image of the item.
     */
    image?: string;
    /**
     * The name of the item.
     * 名称
     */
    name?: string | IMultilingualString;
    sameAs?: string;
    /**
     * URL of the item.
     */
    url?: string;
}
