type ILanguageName = 'Japanese';
/**
 * 言語インターフェース
 */
export interface ILanguage {
    typeOf: 'Language';
    name: ILanguageName;
    // alternateName?: string;
}
