var Search = require('./../js/search.js').searchModule;

var displaySearchResults = function(repoData){
  $('#displayed-search-result').text(repoData);
};

//  ========================== Search =========================== //

$(document).ready(function(){

var currentSearchObject = new Search();

$('#username-search-form').submit(function(event){
  event.preventDefault();
  var username = $('#username').val();

  $('#displayed-username').text(' "' + username + '"');
  $('#search-result-section').show();
}); // end submit

//  =======================Display Results ======================= //

$('#display-repo-description')

}); //end ready
