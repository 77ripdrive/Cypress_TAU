# TodoTAU-Cypress 
[TAU](https://testautomationu.applitools.com/)

Simple test project with Cypress.

 Required: NodeJS
 
# To run simple examples

* `npm install`
* `npx cypress run --spec the-test-file`

# To work with a project from scratch

* `npx cypress install --force`   flag '-- force' will help resolve the issue if the standard installation was unsuccessful
* `npx cypress open` 
* `npx cypress run`   or  npm test
* `npx cypress run --spec the-test-file`
* `npx cypress run --spec cypress/integration/todomvc-actions.spec.js`  Example from project

# To use Applitools

* `npm install @applitools/eyes-cypress`
* `npx eyes-setup`
* `export APPLITOOLS_API_KEY= {yourAPIKey}`
* `set APPLITOOLS_API_KEY= {yourAPIKey}`
