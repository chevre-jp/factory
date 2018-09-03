import IMultilingualString from './multilingualString';
import OrganizationType from './organizationType';
import { IURL } from './url';

/**
 * 組織インターフェース
 */
export interface IOrganization {
    id: string;
    identifier?: string;
    name: IMultilingualString;
    legalName?: IMultilingualString;
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: IURL;
    image?: string;
}
