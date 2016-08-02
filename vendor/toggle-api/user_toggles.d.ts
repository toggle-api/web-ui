export declare class UserToggles {
    private publicKey;
    private userId;
    private version;
    private anonymous;
    private client;
    private initialLoad;
    private initialLoadComplete;
    private toggleSelections;
    constructor(publicKey: string, userId: string, version?: string, anonymous?: boolean);
    waitForLoad(): Promise<UserToggles>;
    getToggle(id: string, defaultValue?: string): string;
    getTruthyToggle(id: string, defaultValue?: boolean): boolean;
    private loadToggles();
}
