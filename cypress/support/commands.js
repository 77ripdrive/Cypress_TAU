let playersList;

Cypress.Commands.add("setToken", (username, password, url) => {
  Cypress.log({
    name: "login with",
    message: `${username} | ${password} | ${url}`,
  });

  const mutation = `
    mutation Login ($email: String!,$pass: String!){
        login(email: $email, pass: $pass) {
          token
           }
      }`;

  const variables = {
    email: `${username}`,
    pass: `${password}`,
  };

  cy.request({
    method: "POST",
    url: `${url}`,
    headers: { "Content-Type": "application/json", Accept: "*/*" },
    body: {
      query: mutation,
      variables: variables,
    },
    failOnStatusCode: false,
  }).then((resp) => {
    window.localStorage.setItem("token", resp.body.data.login.token);
    window.localStorage.setItem("tokenStartAt", Date.now());

    cy.log(resp.body.data.login.token);
    cy.log(Date.now());
  });
});

Cypress.Commands.add("forceVisit", (url) => {
  cy.window().then((win) => {
    return win.open(url, "_self");
  });
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("waitForPageLoadAfter", (block) => {
  // mark our window object to "know" when it gets reloaded
  cy.window().then((win) => {
    // eslint-disable-next-line no-param-reassign
    win.beforeReload = true;
  });
  // initially the new property is there
  cy.window().should("have.prop", "beforeReload", true);

  // Run the code that triggers the page reload/change
  block();

  // after reload the property should be gone
  cy.window().should("not.have.prop", "beforeReload");
});
