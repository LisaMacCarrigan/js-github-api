var Search = require('./../js/search.js').searchModule;

// var displaySearchResults = function(repoData){
//   $('#displayed-search-result').text(repoData);
// };

//  ========================== Search =========================== //

$(document).ready(function(){
  var currentSearch = new Search();
  $('#username-search-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    currentSearch.getRepos(username);
  }); // end submit
}); //end ready
