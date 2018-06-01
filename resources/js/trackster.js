$(document).ready(function() {
  $('#search').click(function() {
    Trackster.searchTracksByTitle($('#search-box').val());
  }
  );

  const API_KEY = "7e4e79931b06123421ab8955413c0deb";

  var Trackster = {};



  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {

  };

  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
    $.ajax({url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json", success: function() {
      console.log('successful');
    }});
  };

});
