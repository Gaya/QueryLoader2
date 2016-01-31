'use strict';
var AudioLoaded = require('./AudioLoaded.js');

var QueryLoaderAudio = {
  create: function() {
    this.element = document.createElement('audio');
    this.element.setAttribute('src', this.src);
  },

  preload: function(cb) {
    ImageLoaded(this.element, function(err, alreadyLoaded) {
      cb(err, alreadyLoaded);
    });
  },
};

module.exports = function(src) {
  var audio = Object.create(QueryLoaderAudio);

  audio.src = src;
  audio.element = null;

  if (typeof src !== 'undefined') {
    audio.create();
  }

  return audio;
};
