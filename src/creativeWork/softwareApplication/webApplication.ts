import * as CreativeWorkFactory from '../../creativeWork';
import { CreativeWorkType } from '../../creativeWorkType';
import { IIdentifier } from '../../thing';

export interface IWebApplicationAttributes {
    typeOf: CreativeWorkType.WebApplication;
    /**
     * アプリケーションクライアントID
     */
    id: string;
    identifier?: IIdentifier;
}
/**
 * ウェブアプリケーション
 */
export type ICreativeWork = CreativeWorkFactory.ICreativeWork & IWebApplicationAttributes;
