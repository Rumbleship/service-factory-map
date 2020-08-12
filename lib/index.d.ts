export interface RFIFactory<T> {
    make: (...args: any[]) => T;
}
export declare abstract class ServiceFactoryMap extends Map<string, RFIFactory<any>> {
}
declare class SingletonMap extends ServiceFactoryMap {
    testClear(force?: boolean): void;
}
export declare const ServiceFactories: SingletonMap;
export {};
