const SettingsPage = require('../../pages/settings.page');
const settingsPage = new SettingsPage();
const assert = require('assert');
const WDIO=require('../../pages/WebdriverIOdemo.page')
const WdioPage=new WDIO();
const ActionHelper = require('../../helpers/actionHelpers');


describe('verify the iphones settings app', () => {
    // beforeEach(() => {
    //     settingsPage.launchApp();
    // });
    it('Main Screen title has "WEBDRIVER" copy', () => {
        expect(WdioPage.WDIOtitle).toHaveTextContaining('WEBDRIVER')
    });
    it('Main Screen has "Web View" Tab visible', () => {
        expect(WdioPage.webView_menuTab).toBeDisplayed()
    });
    it('Main Screen leads to when clicked', () => {
        ActionHelper.click(WdioPage.webView_menuTab)
        expect(WdioPage.webViewTitle).toBeDisplayed()
        ActionHelper.closeApp()
    });
    it('App can be deleted', () => {
        //ActionHelper.removeApp(${bunldeID})
        // don't know bundleID of the demo wdio app 
    });



});
