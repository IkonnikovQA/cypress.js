describe('Тестирование', function () {
    
    it('авторизация верная', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').click();
        cy.get('.auth-form > form > [type="email"]').type('atletov92@gmail.com');
        cy.get('.auth-form > form > [type="password"]').click();
        cy.get('.auth-form > form > [type="password"]').type('Melgibson@1');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');

        })
})
