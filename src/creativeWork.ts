import * as COA from '@motionpicture/coa-service';

import { CreativeWorkType } from './creativeWorkType';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

export interface ICopyrightHolder {
    name: string;
}

export type IContentRating = COA.factory.master.IKubunNameResult | string;

/**
 * 作品
 * {@link https://schema.org/CreativeWork}
 */
export interface ICreativeWork extends Pick<IThing, 'name' | 'identifier'> {
    typeOf: CreativeWorkType;
    id?: string;
    alternativeHeadline?: string;
    contentRating?: IContentRating;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    headline?: string;
    license?: string;
    thumbnailUrl?: string;
    additionalProperty?: IPropertyValue<string>[];
}
