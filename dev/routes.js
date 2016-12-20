// Routes configuration

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Nothing here.');
});

// ---------- CRAWLER

// POST : user + mdp = token de connexion qui sera utilisé dans le HEADER
app.post('/crawler/', function(req, res){

});

// PUT : id ou nom de la cat + token de co depuis le HEADER = scrap la cat
app.put('/crawler/', function(req, res){

});

// UPDATE : id ou nom de la cat = met a jour la bdd en recrawlant la cat
app.update('/crawler/', function(req, res){

});

// DELETE : id + token de connexion en HEADER = supprime l'entrée dans la bdd
app.delete('/crawler/', function(req, res){

});


// ----------- CARD (les données scrappés)

// GET : id = JSON de la card
app.get('/card/', function(req, res){

});

app.listen(3000);
