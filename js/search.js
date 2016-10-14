var apiKey = require('./../.env').apiKey;

function Search(){
}

Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#displayed-username').text(' "' + username + '"');
    $('#search-result-section').show();
    $('#no-results-for-username').text("");
  }).fail(function(error){
    $('#no-results-for-username').text("Username " + error.responseJSON.message);
    $('#search-result-section').hide();
  });
};


exports.searchModule = Search;
