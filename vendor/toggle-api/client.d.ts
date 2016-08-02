import { Authenticator } from './authentication/authentication';
import { Toggle, ToggleSelection } from './toggle';
export interface Client {
    getToggles(): Promise<Toggle[]>;
    getUserToggles(userId: string): Promise<ToggleSelection[]>;
    createToggle(toggleId: string): Promise<Toggle>;
    updateToggle(toggle: Toggle): Promise<Toggle>;
}
export declare class StaticClient implements Client {
    getToggles(): Promise<Toggle[]>;
    getUserToggles(userId: string): Promise<ToggleSelection[]>;
    createToggle(toggleId: string): Promise<Toggle>;
    updateToggle(toggle: Toggle): Promise<Toggle>;
}
export declare class APIClient extends StaticClient {
    private host;
    private authenticator;
    constructor(host: string, authenticator: Authenticator);
}
