/* GET home page. */
var qs = require('querystring');
var wcAPI = require('kimono-worldcup-api-wrapper');
var wcClient = wcAPI('7d6b9fe6904c1788053de874a26e2b42');


exports.all = function(req, res){

  var querystring = qs.parse(req.url.split('?')[1]);
    
  wcClient.get.players(querystring).done(function (players) {
    
    var players = JSON.parse(players[0].body);
    res.render('player', { title: 'players', players: players });
  });
};
