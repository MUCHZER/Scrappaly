var xpath = require('xpath')
  , dom = require('xmldom').DOMParser
	fs   = require( 'fs' ),
	himalaya = require('himalaya'),
	replaceall = require("replaceall"),
	ent = require('ent');

fs.readFile('script/api.html', 'utf-8', function (err, html) {
	//console.log(html);
	var doc = new dom().parseFromString(html);
	var str = xpath.select("//div[@board-id='0a3fd0629f3a4c169d7c8d98132c8fe0']", doc);
	item = ent.decode(replaceall("/a>,<a h", "/a><a h", str.toString('utf8')));

	fs.writeFile('message.json', item, 'utf8', function() {
		console.log('is oké');
	});
});


/*


class="item-name"

board-id="0a3fd0629f3a4c169d7c8d98132c8fe0"

#<div class="item-name">[]


*/