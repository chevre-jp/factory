import { IThing } from './thing';

export enum CategorySetIdentifier {
    SeatingType = 'SeatingType',
    VideoFormatType = 'VideoFormatType',
    SoundFormatType = 'SoundFormatType',
    MovieTicketType = 'MovieTicketType'
}

/**
 * @see https://schema.org/CategoryCodeSet
 */
export interface ICategoryCodeSet extends IThing {
    typeOf: 'CategoryCodeSet';
    identifier: CategorySetIdentifier;
}

/**
 * @see https://schema.org/CategoryCode
 */
export interface ICategoryCode extends IThing {
    typeOf: 'CategoryCode';
    codeValue: string;
    inCodeSet: ICategoryCodeSet;
}
