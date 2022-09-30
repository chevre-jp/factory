import { IProject } from './project';
import { IThing } from './thing';

/**
 * payment method interface
 */
export interface IPaymentMethod extends Pick<IThing, 'name'> {
    name?: string;
    project: Pick<IProject, 'id' | 'typeOf'>;
    typeOf: string;
    identifier: string;
}
