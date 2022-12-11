const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: '.' })

const customJestConfig = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/ClientApp'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/index.test.tsx'],
}

module.exports = createJestConfig(customJestConfig)
