describe('Тестирование', function () {
    
    it('валидация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').click();
        cy.get('#pass').type('ilooveqastudio12');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
        })
})