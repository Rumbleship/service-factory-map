import { ServiceFactories } from './../src/index';
test('ServiceFactories is a Map', () => {
  expect(ServiceFactories).toBeInstanceOf(Map);
});
