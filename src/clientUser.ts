/**
 * クライアントユーザー
 */
export interface IClientUser {
    sub: string;
    token_use: string;
    scope: string;
    scopes: string[];
    iss: string;
    exp: number;
    iat: number;
    version: number | string;
    jti: string;
    client_id: string;
    username?: string;

    aud?: string;
    typ?: string;
}
