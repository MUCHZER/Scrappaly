// crawler file

// IMPORTS
// ================================================================================================================

var Xray = require('x-ray');
var x = Xray();
const makeDriver = require('request-x-ray')

const options = {
    method: "GET",                      //Set HTTP method
    jar: true,                          //Enable cookies
    headers: {                          //Set headers
        "User-Agent": "Firefox/48.0"
    }
}

const driver = makeDriver(options)      //Create driver

x.driver(driver)                        //Set driver

// ROUTINE
// ================================================================================================================

function card_crawler( cat_id ) {
	x( 'https://papaly.com/', 'div.cards-container', [{
		card_title: '',
 		card_desc: '',
  		card_obj: x( '', [{
  			link: '',
  			favicon: ''
  		}])
  	}]);
}

function cat_crawler() {
	x('https://papaly.com/', '', [{
		category_id: '',
		category_title: '',
		category_obj : 
			
	}]);
}


// EXPORTS
// ================================================================================================================

module.exports = Crawler ;