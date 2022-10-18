describe('Тестирование', function () {
    
    it('неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').click();
        cy.get('#pass').type('iLooveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        })
})
