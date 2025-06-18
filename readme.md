# S4. API - Web de Acudits (Jokes Web)

This project involves building a web application that displays jokes, interacts with external APIs, and tracks user engagement.

## Table of Contents

* [Description](#description)
* [API Information](#api-information)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Dependencies](#dependencies)
* [Scripts](#scripts)
* [Contributing](#contributing)
* [License](#license)

## Description

In previous exercises, we hardcoded data directly into our web applications, which is not a common practice in real-world scenarios. This project focuses on consuming data from an external API to retrieve a list of jokes. The main technologies to be put into practice are typescript and data fetching from API.

## API Information

The documentation for the first jokes API to consume is:
[icanhazdadjoke.com](https://icanhazdadjoke.com/)

The documentation for the second jokes API to consume is:
[chucknorris.io](https://api.chucknorris.io/) 

The documentation for the weather API to consume is:
[opendata.aemet.es](https://opendata.aemet.es/centrodedescargas/inicio) 

## Project Structure

The project has the following main directories and files:

* `public/`: Public assets.
* `src/`: Source code.
* `tests/`: Test files.
* `.eslintrc.cjs`: ESLint configuration.
* `.gitignore`: Git ignore file.
* `.prettierignore`: Prettier ignore file.
* `.prettierrc.json`: Prettier configuration.
* `index.html`: Main HTML file.
* `jest.config.cjs`: Jest configuration.
* `package-lock.json`: Node package lock file.
* `package.json`: Project dependencies and scripts.
* `tsconfig.json`: TypeScript configuration.

## Getting Started

    Clone the repository:
    Bash

git clone [https://github.com/vaniaferresterban/S4.git](https://github.com/vaniaferresterban/S4.git)

Navigate to the project directory:
Bash

cd S4

Install dependencies:
Bash

npm install

Start the development server:
Bash

    npm run dev

## Dependencies

The project uses the following dependencies, as seen in package.json:

    @types/jest: "^29.5.14"
    @typescript-eslint/eslint-plugin: "^8.32.1"
    @typescript-eslint/parser: "^8.32.1"
    cross-env: "^7.0.3"
    eslint: "^9.27.0"
    eslint-config-prettier: "^10.1.5"
    eslint-plugin-import: "^2.31.0"
    eslint-plugin-prettier: "^5.4.0"
    jest: "^29.7.0"
    prettier: "^3.3.3"
    sass: "^1.69.0"
    ts-jest: "^29.3.4"
    typescript: "^5.8.3"
    vite: "^6.3.5"

## Scripts
There are several scripts to look at package.json, but the most important to watch the changes in the browser is:

    dev: Starts the development server with Vite.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is open-source and available under the MIT License.
