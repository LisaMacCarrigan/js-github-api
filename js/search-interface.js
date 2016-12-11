var Search = require('./../js/search.js').searchModule;

//  ========================== Search =========================== //

$(document).ready(function(){
  var currentSearch = new Search();
  $('#username-search-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    currentSearch.getUser(username);
    currentSearch.getRepos(username);
  }); // end submit
}); //end ready
