export declare class UserToggles {
    private host;
    private publicKey;
    private userId;
    private version;
    private anonymous;
    private client;
    private initialLoad;
    private initialLoadComplete;
    private toggleSelections;
    constructor(host: string, publicKey: string, userId: string, version?: string, anonymous?: boolean);
    load(): Promise<UserToggles>;
    getToggle(id: string, defaultValue?: string): string;
    getTruthyToggle(id: string, defaultValue?: boolean): boolean;
    private loadToggles();
}
