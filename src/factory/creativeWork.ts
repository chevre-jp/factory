import CreativeWorkType from './creativeWorkType';

export interface ICopyrightHolder {
    name: string;
}

/**
 * 作品インターフェース
 * @see https://schema.org/CreativeWork
 */
export interface ICreativeWork {
    identifier: string;
    name: string;
    alternateName?: string | null;
    alternativeHeadline?: string | null;
    contentRating?: string | null;
    copyrightHolder?: ICopyrightHolder | null;
    copyrightYear?: number | null;
    datePublished?: Date;
    description?: string | null;
    headline?: string | null;
    license?: string | null;
    thumbnailUrl?: string | null;
    typeOf: CreativeWorkType;
}
