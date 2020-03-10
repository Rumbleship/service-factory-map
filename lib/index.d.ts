export interface RFIFactory<T> {
    make: (...args: any[]) => T;
}
declare class ServiceFactoryMap extends Map<string, RFIFactory<any>> {
}
export declare const ServiceFactories: ServiceFactoryMap;
export {};
