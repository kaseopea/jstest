function Song(title,artist,duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}


Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var currentclass = (this.isPlaying) ? ' class="current"' : '';
  var htmlString = '<li' + currentclass + '><span class="icon"></span>' + this.title + ' - ' + this.artist + ' <span class="duration">' + this.duration + '</span></li>';
  return htmlString;
}
