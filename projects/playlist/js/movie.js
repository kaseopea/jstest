function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
}


Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var currentclass = (this.isPlaying) ? ' class="current"' : '';
  var htmlString = '<li' + currentclass + '><span class="icon"></span>' + this.title + ' - (' + this.year + ') <span class="duration">' + this.duration + '</span></li>';
  return htmlString;
}
