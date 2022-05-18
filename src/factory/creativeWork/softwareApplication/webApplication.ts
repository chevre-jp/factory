import * as CreativeWorkFactory from '../../creativeWork';
import { CreativeWorkType } from '../../creativeWorkType';

// export interface IAttributes {
//     typeOf: CreativeWorkType.WebApplication;
//     id: string;
// }
/**
 * ウェブアプリケーション
 */
export interface ICreativeWork extends CreativeWorkFactory.ICreativeWork {
    typeOf: CreativeWorkType.WebApplication;
    id: string;
}
