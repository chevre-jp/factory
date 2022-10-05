import { IOrder, IOrderedItem, IProductAsOrderedItem } from './order';

// スマシ外取引の注文を連携することができれば、注文に関する機能は自動的に連動する
// tslint:disable-next-line:no-suspicious-comment
// TODO プロダクト管理に興行外(スマシ外取引対象プロダクトが必要か？アドオンを利用か？)
// そうすれば、外部注文を、外部プロダクトに対する注文として検索可能になる
export interface IExternalProductAsOrderedItem extends IProductAsOrderedItem {
    name?: { ja?: string };
}
export interface IExternalOrderedItem extends IOrderedItem {
    orderedItem: IExternalProductAsOrderedItem;
}
export type IExternalOrder = Pick<
    IOrder,
    'project' | 'typeOf'
    | 'seller' // 決定するはず
    | 'customer' // プロフィールを任意で(posクライアントとして)
    | 'confirmationNumber' | 'orderNumber' // 自動発行
    | 'price' | 'priceCurrency' | 'orderDate' | 'name' | 'orderStatus' | 'orderedItem' | 'paymentMethods'
> & {
    orderedItem?: IExternalOrderedItem[];
};
