export interface RFIFactory<T> {
  make: (...args: any[]) => T;
}

export abstract class ServiceFactoryMap extends Map<string, RFIFactory<any>> {}
class SingletonMap extends ServiceFactoryMap {
  testClear(force: boolean = false) {
    if (force) {
      return this.clear();
    }
    const beelineFactory = this.get('beelineFactory');
    this.clear();
    this.set('beelineFactory', beelineFactory!);
  }
}
export const ServiceFactories = new SingletonMap();
