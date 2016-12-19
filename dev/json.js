var xpath = require('xpath'),
    dom = require('xmldom').DOMParser
    fs   = require( 'fs' ),
    himalaya = require('himalaya'),
    replaceall = require("replaceall"),
    cheerio = require('cheerio');

/*fs.readFile('papaly.html', 'utf-8', function (err, html) {

  var doc = new dom().parseFromString(html);

  var str = xpath.select("//div[@board-id='0a3fd0629f3a4c169d7c8d98132c8fe0']", doc);

  item = replaceall("/a>,<a h", "/a><a h", str.toString('utf8'));


  //console.log(nodes);
  //console.dir(item);
  
  fs.writeFile('result.html', item, 'utf8', function() {
    console.log('is oké');
  });
});*/

fs.readFile('result.html', 'utf-8', function (err, html) {

  var $ = cheerio.load(html);

  console.log("board ACS");
$('a').each(function(i, element){
      var a = $(this);

      var title = a.text();
      var link = a.attr('href');


      // Our parsed meta data object
  
      console.log("title: " + title +"\n"+"link: " + link );
    });


/*  fs.writeFile('result2.html', , 'utf8', function() {
    console.log('is oké');
  });*/
});