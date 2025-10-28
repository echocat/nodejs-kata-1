import { describe, it, expect, vi } from 'vitest';
import { app } from './app';

describe('app', () => {
  it('should print hello world', () => {
    const stub = vi.spyOn(console, 'log');

    app();

    expect(stub).toHaveBeenCalledOnce();
    expect(stub).toHaveBeenCalledWith('Hello world!');

    stub.mockRestore();
  });
});
