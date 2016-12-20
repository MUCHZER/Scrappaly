/**
*  User connexion, get token
*/

// ------------- DECLARATIONS -------------

var Promise = require("bluebird");
// var Curl = Promise.promisify( require( 'node-libcurl' ).Curl );
var rp = require('request-promise');

var url = 'https://papaly.com/login.json';


// ------------- MODULES -------------

function user_connect( mail, password ) {

    var options = {
        method: 'POST',
        uri: url,
        formData: {
            'authenticity_token': '',
            'user[remember_me]': '1',
            'user[email]': mail,
            'user[password]': password
        },
        json: true
    };

    rp( options )
        .then( function( parsedBody ) {
            return parsedBody.id;
        })
        .catch( function( err ) {
            // failed
            console.log( err );
        });

}
