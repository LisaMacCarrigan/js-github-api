var apiKey = require('./../.env').apiKey;

function Search(){
}
// Get user
Search.prototype.getUser = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#displayed-username').text(response.login);
    $('#no-results-for-username').text("");
    alert("Made it");
  }).fail(function(error){
    $('#no-results-for-username').text("User " + error.responseJSON.message);
    $('#search-result-section').hide();
  });

}

// Get repositories
// Search.prototype.getRepos = function(username){
//   $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
//
//     for (var repo = 0; repo < response.login.length; repo++){
//       alert("we are in the loop");
//       $(".list-group").append("<li class='list-group-item'>" + response[repo].login + "</li>");
//     }
//
//   $('#search-result-section').show();
//
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//
//   });
//
// }

exports.searchModule = Search;
