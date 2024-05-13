import * as CreativeWorkFactory from '../creativeWork';
import { CreativeWorkType } from '../creativeWorkType';

/**
 * ソフトウェア
 */
export interface ISoftwareApplication extends Pick<CreativeWorkFactory.ICreativeWork, 'id' | 'typeOf'> {
    id: string;
    typeOf: CreativeWorkType.SoftwareApplication;
}
