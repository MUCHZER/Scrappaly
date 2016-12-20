// app.js
// Test 
var Promise = require( 'bluebird' );

var Token = Promise.promisifyAll( require( './dev/modules/token.js' ) );

Token.
	user_connectAsync('mail', 'pass')
	.then( function( data ) {
		console.log( data );
	});
