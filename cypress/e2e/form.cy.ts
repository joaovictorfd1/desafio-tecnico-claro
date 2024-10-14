describe('Teste do Formulário de Pedido', () => {
  beforeEach(() => {
    // Visita a página onde o formulário está localizado
    cy.visit('http://localhost:5173/');
  });

  it('deve preencher o formulário e enviar', () => {

    // Preenche todas as informações do formulário
    cy.get('#cake').type('01');
    cy.get('#name').type('João');
    cy.get('#lastName').type('Silva');
    cy.get('#deliveryDate').type('2024-10-15');
    cy.get('#deliveryTime').type('14:30');
    cy.get('#phone').type('(99) 99999-9999');
    cy.get('#email').type('joao@example.com');
    cy.get('#address').type('Rua Exemplo, 123');
    cy.get('#addressLine').type('Apto 456');
    cy.get('#city').type('São Paulo');
    cy.get('#region').type('SP');
    cy.get('#postal').type('12345-678');
    cy.get('#country').select('Brasil');

    // Envie o formulário
    cy.get('form').submit();

    // Verifique se o toast foi exibido
    cy.get('.Toastify__toast-body')
      .should('be.visible')
      .and('contain', 'Pedido realizado com sucesso');
  });
});
