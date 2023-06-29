# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

# Usage

First add **code-extend-schematics** project to the main project's root. Now we can call it like a normal dependency inside **package.json**.

```json
"devDependencies": {
    "code-extend-schematics": "file:code-extend-schematics"
}
```

In order to include the custom schematics we need to add the following **json** config at the end of **angular.json** as **defaultCollection**.

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {},
  "cli": {
    "defaultCollection": "code-extend-schematics"
  }
}
```
