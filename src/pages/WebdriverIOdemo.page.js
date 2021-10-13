/* eslint-disable max-len */
const ActionHelper = require('../helpers/actionHelpers');
// eslint-disable-next-line no-unused-vars
const fadData=require('../data/FAD.data')

class WDIO {


    get WDIOtitle () {
        return $('//XCUIElementTypeStaticText[@name="WEBDRIVER"]')
    }

    get webView_menuTab () {
        return $('//XCUIElementTypeButton[@name="Webview"]')
    }

    get webViewTitle () {
        return $('~Next-gen browser and mobile automation test framework for Node.js')
    }


    

   
}

module.exports = WDIO;
