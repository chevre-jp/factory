import * as COA from '@motionpicture/coa-service';

import CreativeWorkType from './creativeWorkType';

export interface ICopyrightHolder {
    name: string;
}

export type IContentRating = COA.services.master.IKubunNameResult | string | null;

/**
 * 作品インターフェース
 * @see https://schema.org/CreativeWork
 */
export interface ICreativeWork {
    identifier: string;
    name: string;
    alternateName?: string | null;
    alternativeHeadline?: string | null;
    contentRating?: IContentRating;
    copyrightHolder?: ICopyrightHolder | null;
    copyrightYear?: number | null;
    datePublished?: Date;
    description?: string | null;
    headline?: string | null;
    license?: string | null;
    thumbnailUrl?: string | null;
    typeOf: CreativeWorkType;
}
