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
    contentRating?: string | null;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    description?: string;
    license?: string;
    thumbnailUrl?: string;
    typeOf: CreativeWorkType;
}
