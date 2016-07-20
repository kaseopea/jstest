var playlist = new Playlist();

var songs = [{"name":"Radiohead","albums":[{"title":"The King of Limbs","songs":[{"title":"Bloom","length":"5:15"},{"title":"Morning Mr Magpie","length":"4:41"},{"title":"Little by Little","length":"4:27"},{"title":"Feral","length":"3:13"},{"title":"Lotus Flower","length":"5:01"},{"title":"Codex","length":"4:47"},{"title":"Give Up the Ghost","length":"4:50"},{"title":"Separator","length":"5:20"}]},{"title":"OK Computer","songs":[{"title":"Airbag","length":"4:44"},{"title":"Paranoid Android","length":"6:23"},{"title":"Karma Police","length":"4:21"},{"title":"Fitter Happier","length":"1:57"},{"title":"No Surprises","length":"3:48"},{"title":"The Tourist","length":"5:24"}]}]},{"name":"Portishead","albums":[{"title":"Dummy","songs":[{"title":"It's a Fire","length":"3:49"},{"title":"Numb","length":"3:54"},{"title":"Biscuit","length":"5:01"},{"title":"Glory Box","length":"5:06"}]},{"title":"Third","songs":[{"title":"Silence","length":"4:58"},{"title":"The Rip","length":"4:29"},{"title":"We Carry On","length":"6:27"},{"title":"Machine Gun","length":"4:43"},{"title":"Small","length":"6:45"},{"title":"Magic Doors","length":"3:32"},{"title":"Threads","length":"5:45"}]}]}];

for (var i = 0; i < songs.length; i++)  {
  var artist = songs[i];
  var albums = artist.albums;
  for ( var j = 0; j < albums.length; j++) {
    var albumSongs = albums[j].songs;
    for ( var k = 0; k < albumSongs.length; k++) {
      var song = albumSongs[k];
      playlist.add(new Song(song.title, artist.name, song.length));
    }


  }
}

playlist.add(new Movie('Man of Steel', '2013', '2:30:00'));
var playlistElement = document.getElementById('playlist');

playlist.render(playlistElement);

var playButton = document.getElementById('play');
var nextButton = document.getElementById('next');
var stopButton = document.getElementById('stop');

playButton.onclick = function() {
  playlist.play();
  playlist.render(playlistElement);
}

nextButton.onclick = function() {
  playlist.next();
  playlist.render(playlistElement);
}

stopButton.onclick = function() {
  playlist.stop();
  playlist.render(playlistElement);
}
