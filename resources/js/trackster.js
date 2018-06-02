$(document).ready(function() {
  $('#search').click(function() {
    $('#results').empty();
    Trackster.searchTracksByTitle($('#search-box').val());
  });

  $('#search-box').keypress(function(e) {
    if (e.which == 13) {
      $('#results').empty();
      Trackster.searchTracksByTitle($('#search-box').val());
    }
  });

  const API_KEY = "7e4e79931b06123421ab8955413c0deb";

  var Trackster = {};

  Trackster.searchTracksByTitle = function(title) {

    $.ajax({
      url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json",
      dataType: "jsonp",
      success: function(data) {
        $.each(data.results.trackmatches.track , function() {
          let htmlrowtrack =
          `<div class="row align-items-center results">
          <div class="col-md-1 play-button"><a href="${this.url}" target="_blank"><i class="far fa-play-circle fa-2x"></i></a></div>
            <div class="col-md-5"><span>${this.name}</span></div>
            <div class="col-md-2"><span>${this.artist}</span></div>
            <div class="col-md-2"><span><img src="${this.image[1]["#text"]}"></span></div>
            <div class="col-md-2"><span>${this.listeners}</span></div></div>`;
          $('#results').append(htmlrowtrack);

        });
      }});
  };
});
