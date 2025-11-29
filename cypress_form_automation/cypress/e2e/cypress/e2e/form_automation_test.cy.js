describe("Business Registration Form functionality validation", () => {
  it("fills and submits the form with valid data", () => {
    cy.visit("https://form.jotform.com/242354571450554");

    // Fill out the form
    cy.get('input[name="q4_businessOwner[first]"]').type("James");
    cy.get('input[name="q4_businessOwner[last]"]').type("Bond");
    cy.get('input[name="q6_businessName"]').type("Bond Company");
    cy.get('input[name="q12_contactNumber[full]"]').type("(000) 000-0000");
    cy.get('input[name="q5_email"]').type("jbond@example.com");

    // Address fields
    cy.get('input[name="q3_address3[addr_line1]"]').type("123 London Street");
    cy.get('input[name="q3_address3[addr_line2]"]').type("Apt 2");
    cy.get('input[name="q3_address3[city]"]').type("London");
    cy.get('input[name="q3_address3[state]"]').type("Maryland");
    cy.get('input[name="q3_address3[postal]"]').type("20902");

    // Select Type of Business
    cy.get('select').select("Store");

    // Message
    cy.get('textarea').type("This is a sample text.");

    // Submit the form
    cy.get('button[type="submit"], input[type="submit"]').click();

    // Assert success
    cy.contains(/thank you|submission/i, { timeout: 15000 }).should('be.visible');
  });
});