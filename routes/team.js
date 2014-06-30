/* GET home page. */
var wcAPI = require('kimono-worldcup-api-wrapper');
var wcClient = wcAPI('7d6b9fe6904c1788053de874a26e2b42');

exports.all = function(req, res){


  wcClient.get.teams().done(function (teams) {
    var teams = JSON.parse(teams[0].body);
    res.render('team', { title: 'Teams', teams: teams });
  });
};
