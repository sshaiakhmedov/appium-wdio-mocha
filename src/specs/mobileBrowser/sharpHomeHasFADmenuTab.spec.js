/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const ActionHelper = require('../../helpers/actionHelpers');
const SharpHomePage = require('../../pages/Sharp.page');
const SharpPage = new SharpHomePage();
// eslint-disable-next-line no-unused-vars
const fadData=require('../../data/FAD.data')

//const assert = require('assert');

describe('Verify the Sharp page', () => {
    it('Has "Find a Doctor" Tab menu', () => {
        SharpPage.launchSharp();
        // eslint-disable-next-line no-undef
        expect(browser).toHaveUrl('https://www.sharp.com/')
    });

    it('"Find a Doctor" menu leads to the Page with valid Title',() => {
        // ActionHelper.click(SharpPage.findAdoctorMenuTab)
        // ActionHelper.pauseFor(3)
        SharpPage.selectFADmenuTab(browser)
        expect(browser).toHaveTitle(fadData.FAD.title);
    });
});
