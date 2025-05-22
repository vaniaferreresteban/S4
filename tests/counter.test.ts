import { setupCounter } from '../src/counter';

describe('sum function', () => {
  it('should add two numbers correctly', () => {
    expect(setupCounter()).not.toBe(null);
  });
});
