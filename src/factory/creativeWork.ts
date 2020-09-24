import * as COA from '@motionpicture/coa-service';

import CreativeWorkType from './creativeWorkType';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import { IThing } from './thing';

export interface ICopyrightHolder {
    name: string;
}

export type IContentRating = COA.factory.master.IKubunNameResult | string;

/**
 * 作品インターフェース
 * @see https://schema.org/CreativeWork
 */
export interface ICreativeWork extends IThing {
    project: IProject;
    typeOf: CreativeWorkType;
    id?: string;
    identifier: string;
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
