import * as CreativeWorkFactory from '../../creativeWork';
import { CreativeWorkType } from '../../creativeWorkType';
import { IIdentifier } from '../../thing';

/**
 * ウェブアプリケーション
 */
export interface ICreativeWork extends Pick<CreativeWorkFactory.ICreativeWork, 'id' | 'identifier' | 'typeOf'> {
    typeOf: CreativeWorkType.WebApplication;
    /**
     * アプリケーションクライアントID
     */
    id: string;
    identifier?: IIdentifier;
}
