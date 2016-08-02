import { Authenticator } from './authentication';
export declare class PublicAuthenticator implements Authenticator {
    private public_key;
    constructor(public_key: string);
    buildAuthorizationHeader(): string;
}
