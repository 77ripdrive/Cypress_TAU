
import '@applitools/eyes-cypress/commands'


// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
