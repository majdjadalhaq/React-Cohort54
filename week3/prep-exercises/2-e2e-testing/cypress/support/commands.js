// Custom command to check if a category is selected
Cypress.Commands.add('checkCategorySelection', (elementId, isSelected) => {
    cy.get(`[data-elementid="${elementId}"]`).should((el) => {
        expect(el.attr("data-selected")).to.equal(isSelected ? "true" : "false");
    });
});
