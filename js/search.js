var apiKey = require('./../.env').apiKey;

function Search(){
}

Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#displayed-username').text(" " + response.login);
    $('#no-results-for-username').text("");

  }).fail(function(error){
    $('#no-results-for-username').text("User " + error.responseJSON.message);
    $('#search-result-section').hide();
  });

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#search-result-section').show();

    for (var repo = 0; repo < response.length; repo++){
      console.log(response[repo].login);
      $(".list-group").append("<li class='list-group-item'>" + response[repo].login + "</li>");
    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.searchModule = Search;
