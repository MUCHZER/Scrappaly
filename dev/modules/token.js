'use strict' ;
/**
*  User connexion, get token
*/

// IMPORTS
// ================================================================================================================


var rp = require( 'request' );

const url = 'https://papaly.com/login.json';


// ROUTINE
// ================================================================================================================

var user_connect = function ( mail, password ) {

    // var options = {
    //     method: 'POST',
    //     uri: url,
    //     formData: {
    //         'authenticity_token': '',
    //         'user[remember_me]': '1',
    //         'user[email]': mail,
    //         'user[password]': password
    //     },
    //     json: true
    // };

    // return rp( options )
    //     .then( function( parsedBody ) {
    //         console.log(parsedBody);
    //         return parsedBody.id;
    //     })
    //     .catch( function( err ) {
    //         // failed
    //         console.log( err );
    //     });

    rp
        .post({ url: url,
                form: {
                    'authenticity_token': '',
                    'user[remember_me]': '1',
                    'user[email]': mail,
                    'user[password]': password
                        }
                    }, 
                function(err, httpResponse, body) {
                    console.log( httpResponse );
                    console.log( body );
                });

}

// EXPORTS
// ================================================================================================================

exports.user_connect = user_connect ;