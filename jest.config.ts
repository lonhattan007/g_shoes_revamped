import type { Config } from 'jest';
import nextJest from 'next/jest.js';
import '@testing-library/jest-dom';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
};

export default createJestConfig(config);
