import * as CreativeWorkFactory from '../../creativeWork';
import { CreativeWorkType } from '../../creativeWorkType';

export interface IAttributes {
    typeOf: CreativeWorkType.WebApplication;
    id: string;
}

/**
 * ウェブアプリケーションインターフェース
 */
export type ICreativeWork = IAttributes & CreativeWorkFactory.ICreativeWork;
