var Curl = require( '../node_modules/node-libcurl' ).Curl,
    path = require( 'path' ),
    fs   = require( 'fs' ),
    querystring = require( 'querystring' );

var curl = new Curl(),
    url = 'https://papaly.com/login.json',
    data = {
	'authenticity_token': '',
	'user[remember_me]': '1',
	'user[email]': '',
	'user[password]': ''
};

data = querystring.stringify( data );

curl.setOpt( Curl.option.URL, url );
curl.setOpt( Curl.option.POSTFIELDS, data );
curl.setOpt( Curl.option.VERBOSE, true );

curl.perform();

curl.on( 'end', function( statusCode, body ) {
    //console.log( body );
   	var result = JSON.parse(body);
	console.log(result.id);
    this.close();
});

curl.on( 'error', function() {
    this.close();
});






