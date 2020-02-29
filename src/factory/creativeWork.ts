import * as COA from '@motionpicture/coa-service';

import CreativeWorkType from './creativeWorkType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';

export interface ICopyrightHolder {
    name: string;
}

export type IContentRating = COA.services.master.IKubunNameResult | string;

/**
 * 作品インターフェース
 * @see https://schema.org/CreativeWork
 */
export interface ICreativeWork {
    project: IProject;
    id: string;
    identifier: string;
    name: string;
    alternateName?: string;
    alternativeHeadline?: string;
    contentRating?: IContentRating;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    description?: string;
    headline?: string;
    license?: string;
    thumbnailUrl?: string;
    typeOf: CreativeWorkType;
    additionalProperty?: IPropertyValue<string>[];
}
