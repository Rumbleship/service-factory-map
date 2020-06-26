export interface RFIFactory<T> {
  make: (...args: any[]) => T;
}

export abstract class ServiceFactoryMap extends Map<string, RFIFactory<any>> {}
class SingletonMap extends ServiceFactoryMap {}
export const ServiceFactories = new SingletonMap();
