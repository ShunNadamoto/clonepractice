const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js | jsx | ts | tsx)$': '<rootDir>/node_modules/babel-jest',
  },

  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
