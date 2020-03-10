export interface RFIFactory<T> {
  make: (...args: any[]) => T;
}

class ServiceFactoryMap extends Map<string, RFIFactory<any>> {}
export const ServiceFactories = new ServiceFactoryMap();
