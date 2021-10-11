const ActionHelper = require('../helpers/actionHelpers');
// eslint-disable-next-line no-unused-vars
const fadData=require('../data/FAD.data')

class FADladingPage {

    
    placeholder() {
    }

    get findAprimaryCare () {
        return $('#primary-care-doctor-drawer-open')
    }

    get findaSpecialist () {
        return $('#specialist-doctor-drawer-open')
    }

    get dindAdoctorByName () {
        return $('#doctor-drawer-open > span')
    }

    

   
}

module.exports = FADladingPage;
