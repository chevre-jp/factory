import * as CreativeWorkFactory from '../creativeWork';

/**
 * movie creativeWork interface
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    identifier: string;
    name: string;
    duration: string; // 上映時間
    contentRating: string; // 映倫区分(PG12,R15,R18)
}
