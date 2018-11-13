/**
 * 属性値インターフェース
 */
export interface IPropertyValue<T extends string> {
    name: string;
    value: T;
}
