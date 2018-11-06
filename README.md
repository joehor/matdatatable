# Matdatatable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instalação do Materialize ...

-- fonte
https://material.angular.io/guide/getting-started

-- MS Dos
-- Step 1: Install Angular Material, Angular CDK and Angular Animations
npm install --save @angular/material @angular/cdk @angular/animations

-- Step 2: Configure animations
-- app.modules.ts
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }

-- Step 3: Import the component modules
-- app.modules.ts
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class PizzaPartyAppModule { }

-- Step 4: Include a theme
-- sytyles.css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

-- Step 5: Gesture Support
-- MS Dos
npm install --save hammerjs

-- Step 6 (Optional): Add Material Icons
-- index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">