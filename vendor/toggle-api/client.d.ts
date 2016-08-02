import { Authenticator } from './authentication/authentication';
import { Toggle, ToggleSelection } from './toggle';
export declare class ToggleAPIClient {
    private authenticator;
    constructor(authenticator: Authenticator);
    getToggles(): Promise<Toggle[]>;
    getUserToggles(userId: string): Promise<ToggleSelection[]>;
}
