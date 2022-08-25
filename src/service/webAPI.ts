export enum Identifier {
    COA = 'COA',
    Chevre = 'Chevre'
}

/**
 * WebAPIインターフェース
 */
export interface IService<T extends Identifier> {
    typeOf: 'WebAPI';
    identifier: T;
}
