var apiKey = require('./../.env').apiKey;

function Search(){
}
// Get user
Search.prototype.getUser = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.display-user-info').show();
    $('#display-username').text(response.login);
    $('#user-avatar').attr('src', response.avatar_url);
    $('#repo-count').text(response.public_repos + " public repositories");
    $('#no-results-for-username').text("");
  }).fail(function(error){
    $('.display-user-info').hide();
    $('#user-avatar').attr('src', 'img/octocat_sad.gif');
    $('#no-results-for-username').text("User " + error.responseJSON.message);
    $('#search-result-section').hide();
  });

}

// Get repositories
Search.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    $(".display-results").text("");
    $('#username').val("");
    for (var repo = 0; repo < response.length; repo++){
      $(".display-results").append("<tr><td><a href='" + response[repo].html_url + "'target='_blank'>" + response[repo].name + "</a></td><td>" + response[repo].description + "</td><td>" + response[repo].language + "</td></tr>");
    }

  $('#search-result-section').show();

  }).fail(function(error){
    console.log(error.responseJSON.message);

  });

}

exports.searchModule = Search;
