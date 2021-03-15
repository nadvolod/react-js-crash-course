describe('My To Do application', () => {
    it('should be fast when redirecting to / from /about', () => {
        browser.execute('sauce:performanceDisable');
        browser.url('/about');
        browser.execute('sauce:performanceEnable');
        $(`[data-test='back']`).click();
    });
});

