const ActionHelper = require('../helpers/actionHelpers');
const fadData=require('../data/FAD.data')

class SharpHomePage {

    get hamburgerMenu   () {
        return $('.no-xlarge.sixteen .ss-rows')
    }
    
    get findAdoctorMenuTab() {
        return $('#mobile-nav-fad')
    }

    getObjectLocator() {
        return require('../screens/web/google.screen.js');
    }

    async selectFADmenuTab () {
        ActionHelper.click(this.hamburgerMenu)
        ActionHelper.click(this.findAdoctorMenuTab)
    }


    launchSharp() {
        ActionHelper.launchBrowserUrl('https://sharp.com');
        ActionHelper.pauseFor(2);
    }

   
}

module.exports = SharpHomePage;
