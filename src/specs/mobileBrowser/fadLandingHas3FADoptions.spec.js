// eslint-disable-next-line no-unused-vars
const ActionHelper = require('../../helpers/actionHelpers');
// eslint-disable-next-line no-unused-vars
const FADladingPage=require('../../pages/FAD.page')
const FADPage = new FADladingPage();
// eslint-disable-next-line no-unused-vars
const fadData=require('../../data/FAD.data')

const SharpHomePage = require('../../pages/Sharp.page');
const SharpPage = new SharpHomePage();

//const assert = require('assert');

describe('Verify on FAD page', () => {
    before('Go to FAD', (browser) => {
        SharpPage.launchSharp();
        SharpPage.selectFADmenuTab(browser)
    });
    it('FAD Landing has 3 Active "Find a ..." buttons',() => {
        expect(FADPage.findAprimaryCare).toBeDisplayed();
    });


});
