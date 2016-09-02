var Curl = require( '../node_modules/node-libcurl' ).Curl,
    path = require( 'path' ),
    fs   = require( 'fs' ),
    querystring = require( 'querystring' );

var curl = new Curl(),
    url = 'https://papaly.com/',
    cookie = "remember_user_token=" + token;
    cookieJarFile = cookie;


//data = querystring.stringify( data );

curl.setOpt( Curl.option.URL, url );
curl.setOpt( Curl.option.VERBOSE, true );
curl.setOpt( Curl.option.TIMEOUT, 5000 );
curl.setOpt( Curl.option.COOKIE, cookieJarFile );

curl.perform();

setTimeout(function(){
	curl.on( 'end', function( statusCode, body ) {
	    console.log(body);
	    fs.writeFile('api.html', body, '');
	    this.close();
	});

	curl.on( 'error', function() {
	    this.close();
	});
}, 5000);




