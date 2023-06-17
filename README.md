
# Angular Countries App

This is an Angular application that displays a list of regions, countries, and country details using Angular, TypeScript, Observables, and NGRX.


## Demo

https://amit-b-shelar.github.io/

## Source Repository

https://github.com/amit-b-shelar/amit-b-shelar.github.io


## Run Locally

Clone the project

```bash
  git clone https://github.com/amit-b-shelar/amit-b-shelar.github.io.git
```

Go to the project directory

```bash
  cd amit-b-shelar.github.io
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Usage

    1. Select a region from the "Region" dropdown.
    2. Once a region is selected, the "Country" dropdown will be enabled and populated with countries from the selected region.
    3. Select a country from the "Country" dropdown.
    4. The country details, including Name, Capital, Population, Currencies, and Flag, will be displayed in a table.


## Screenshots

![App Screenshot](https://amit-b-shelar.github.io/assessment.jpg)


## Optimizations & Efficiency

- **Caching** - Added caching in NgRx Effect to save response of country details against region.
- **Reusable Component** - Created reusable dropdown component in Shared Module.
- **State Optimization** - Saved only required fields from country details API response to optimize application state.
- **Responsive** - mobile first approach
- **Unit Testing** - Added Unit Tests
- **Type Safety** - Used Typescript interfaces for type safety.


## Coding Style and Standards

- The coding style follows the Angular Style Guide (https://angular.io/guide/styleguide).
- CSS styles follows the Bootstrap Style Guide (https://rapidwebltd.github.io/bootstrap-styleguide/)
- Code is formatted using Prettier.


## Authors

- [@amit-b-shelar](https://github.com/amit-b-shelar)


## 🚀 About Me
I'm a full stack developer...


## Licence

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

