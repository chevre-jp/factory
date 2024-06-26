import { OrganizationType } from './organizationType';

export enum RecipeCategory {
    payCreditCard = 'payCreditCard',
    payMovieTicket = 'payMovieTicket',
    publishPaymentUrl = 'publishPaymentUrl',
    checkMovieTicket = 'checkMovieTicket',
    refundCreditCard = 'refundCreditCard',
    refundMovieTicket = 'refundMovieTicket',
    acceptCOAOffer = 'acceptCOAOffer',
    confirmCOAReserve = 'confirmCOAReserve',
    returnCOAReserve = 'returnCOAReserve',
    authorizeInvoice = 'authorizeInvoice',
    authorizeInvoice3ds = 'authorizeInvoice3ds'
}
export enum StepIdentifier {
    entryTran = 'entryTran',
    execTran = 'execTran',
    searchTrade = 'searchTrade',
    alterTran = 'alterTran',
    secureTran2 = 'secureTran2',
    seatInfoSync = 'seatInfoSync',
    seatInfoSyncCancel = 'seatInfoSyncCancel',
    purchaseNumberAuth = 'purchaseNumberAuth',
    updTmpReserveSeat = 'updTmpReserveSeat',
    updReserve = 'updReserve',
    stateReserve = 'stateReserve',
    delReserve = 'delReserve'
}
export interface IHowToDirection {
    typeOf: 'HowToDirection';
    beforeMedia?: any;
    afterMedia?: any;
    // text: string;
}
export interface IHowToStep {
    typeOf: 'HowToStep';
    identifier: StepIdentifier;
    itemListElement: IHowToDirection[];
}
export interface IHowToSection {
    typeOf: 'HowToSection';
    itemListElement: IHowToStep[];
}
/**
 * action recipe
 */
export interface IRecipe {
    project: { id: string; typeOf: OrganizationType.Project };
    typeOf: 'Recipe';
    recipeCategory: RecipeCategory;
    step: IHowToSection[];
}
