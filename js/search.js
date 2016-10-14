var apiKey = require('./../.env').apiKey;

function Search(){
}
// Get user
Search.prototype.getUser = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#displayed-username').text(" " + response.login + " - " + response.public_repos + " results");
    $('#no-results-for-username').text("");
    alert("We have our object");
  }).fail(function(error){
    alert("This username does not exist");
    $('#no-results-for-username').text("User " + error.responseJSON.message);
    $('#search-result-section').hide();
  });

}

// Get repositories
Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $(".list-group").text("");
    $('#username').val("");
    for (var repo = 0; repo < response.login.length; repo++){
      $(".list-group").append("<li class='list-group-item'>" + response.login + "</li>");
    }

  $('#search-result-section').show();

  }).fail(function(error){
    console.log(error.responseJSON.message);

  });

}

exports.searchModule = Search;
