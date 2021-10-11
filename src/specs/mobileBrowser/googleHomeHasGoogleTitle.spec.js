const GooglePage = require('../../pages/Google.page');
const googlePage = new GooglePage();
const assert = require('assert');

describe('Verify the Google home page', () => {
    it('Has valid "Google" title', () => {
        googlePage.launchGoogle();
        assert.equal(browser.getTitle(), 'Google');
    });
});
