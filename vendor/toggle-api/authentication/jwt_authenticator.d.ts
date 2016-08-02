import { Authenticator } from './authentication';
export declare class JWTAuthenticator implements Authenticator {
    private jwt;
    constructor(jwt: string);
    buildAuthorizationHeader(): string;
}
