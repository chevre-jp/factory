import { IProject } from './project';
import { IThing } from './thing';

/**
 * payment method interface
 */
export interface IPaymentMethod extends IThing {
    project: IProject;
    typeOf: string;
    identifier: string;
}
