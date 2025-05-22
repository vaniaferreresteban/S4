// .eslintrc.cjs (o .eslintrc.js si usas "type": "module")
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true, // O la versión de ECMAScript que uses, e.g., es2015 para ES6
        node: true,
        jest: true, // Añade esto si vas a usar Jest
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest', // Permite la última sintaxis de ECMAScript
        sourceType: 'module', // Permite el uso de imports
        project: './tsconfig.json', // Necesario para algunas reglas de TypeScript
    },
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:prettier/recommended',
        // Asegúrate de que sea el último para que pueda sobrescribir otras configuraciones
    ],
    rules: {
        // Aquí puedes añadir o sobrescribir reglas específicas
        // Por ejemplo:
        // '@typescript-eslint/no-unused-vars': 'warn',
        // 'import/order': ['error', {
        //   'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        //   'newlines-between': 'always',
        //   'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
        // }],
        // ... más reglas
    },
    settings: {
        'import/resolver': {
            typescript: {}, // Permite a eslint-plugin-import resolver rutas de TypeScript
        },
    },
    ignorePatterns: ['dist', 'node_modules', '*.cjs'], // Archivos/carpetas a ignorar
};