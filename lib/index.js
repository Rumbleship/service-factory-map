"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceFactoryMap extends Map {
}
exports.ServiceFactoryMap = ServiceFactoryMap;
class SingletonMap extends ServiceFactoryMap {
    resetForTests(force = false) {
        if (force) {
            return this.clear();
        }
        const beelineFactory = this.get('beelineFactory');
        this.clear();
        this.set('beelineFactory', beelineFactory);
    }
}
exports.ServiceFactories = new SingletonMap();
//# sourceMappingURL=index.js.map