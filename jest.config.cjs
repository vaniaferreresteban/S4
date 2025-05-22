// jest.config.cjs
module.exports = {
    // ...toda tu configuración de Jest aquí...
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            useESM: true,
            tsconfig: 'tsconfig.json',
            // useESM: true, // Dejaremos esto comentado por ahora
        }],
    },
};