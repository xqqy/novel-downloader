export declare function storageAvailable(type: string): any;
export declare class LocalStorageExpired {
    private storage;
    constructor();
    private init;
    set(key: string, value: any, expired: number): void;
    get(key: string): any;
    remove(key: string): void;
}
