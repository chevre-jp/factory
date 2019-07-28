import { IProject } from './project';

/**
 * 配給インターフェース
 */
export interface IDistributor {
    project: IProject;
    id: string;
    name: string;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    project?: { ids?: string[] };
    name?: string;
    id?: string;
}
