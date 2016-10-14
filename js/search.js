var apiKey = require('./../.env').apiKey;

function Search(){
}

Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#displayed-username').text(response.login);
    $('#no-results-for-username').text("");
    $('.list-group').empty();
    $('#search-result-section').show();

  }).fail(function(error){
    $('#no-results-for-username').text("Username " + error.responseJSON.message);
    $('#search-result-section').hide();
  });

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);

    for (var repo = 0; repo < response.length; repo++){
      $(".list-group").append("<li id='displayed-repository-name' class='list-group-item'>" + response[repo].name + "</li>")
    }
  }).fail(function(error){
    $(".list-group").append("<li id='displayed-repository-name' class='list-group-item'>" + error.responseJSON.message + "</li>");
  });
};


exports.searchModule = Search;
