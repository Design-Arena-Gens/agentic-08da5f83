import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};

export default createJestConfig(customJestConfig);
