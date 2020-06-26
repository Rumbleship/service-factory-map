"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceFactoryMap extends Map {
}
exports.ServiceFactoryMap = ServiceFactoryMap;
class SingletonMap extends ServiceFactoryMap {
}
exports.ServiceFactories = new SingletonMap();
//# sourceMappingURL=index.js.map