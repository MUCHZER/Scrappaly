// crawler file

// ------------- DECLARATIONS -------------

var Xray = require('x-ray');
var x = Xray();

// ------------- MODULES -------------

function card_crawler( cat_id ) {
	x( 'div.cards-container', [{
		card_title: '',
 		card_desc: '',
  		card_obj: x( '', [{
  			link: '',
  			favicon: ''
  		}])
  	}])
  	.write('results.json');
}

function cat_crawler() {
	x('https://papaly.com/', '', [{
		category_id: '',
		category_title: '',
		category_obj : 
			
	}]);
}