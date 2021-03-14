describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`/`);

        $('#username').setValue(username);
        $('#password').setValue(password);
        $('button[type="submit"]').click(); 

        expect($('#flash')).toBeExisting();
        expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

