var parse5 = require('parse5'),
	fs   = require( 'fs' );


fs.readFile('./api.html', function (err, html) {
	console.log(html);
	//var document = parse5.parse(html.toString());
	//console.log(document);
});


/*
var doc = new dom().parseFromString(html);
var nodes = xpath.select("//title", doc);
 
console.log(nodes[0].localName + ": " + nodes[0].firstChild.data);
console.log("node: " + nodes[0].toString());*/