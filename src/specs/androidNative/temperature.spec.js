/* eslint-disable max-len */
const CelsiusToFahrenheitConvertorPage = require('./../../pages/celsiusToFahrenheitConvertor.page');
const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();
const assert = require('assert');
const ActionHelper = require('../../helpers/actionHelpers');


describe('verify the C to F temperature', () => {
    // beforeEach(() => {
    //     celsiusToFahrenheitConvertorPage.launchApp();
    // });

    it('closes the "old version" window', () => {
        ActionHelper.click('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button');
    
    });
    it('to verify if 1 celcius is equal to 33.8', () => {
        celsiusToFahrenheitConvertorPage.enterCelsius('1');
        const fahrenheitValue = celsiusToFahrenheitConvertorPage.getFahrenheitValue();
        assert.equal(fahrenheitValue, '33.8');
    });

});
