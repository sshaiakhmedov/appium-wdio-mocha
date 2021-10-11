const ActionHelper = require('../helpers/actionHelpers');

class GooglePage {

    getObjectLocator() {
        return require('../screens/web/google.screen.js');
    }

    launchGoogle() {
        ActionHelper.launchBrowserUrl(this.getObjectLocator().googleUrl);
        ActionHelper.pauseFor(2);
    }

    getTitle() {
        return ActionHelper.getTitle();
    }
}

module.exports = GooglePage;
