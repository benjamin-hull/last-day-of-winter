//= require_tree ./vendor

$(function() {
  if (!Modernizr.touch) {
    var BV = new $.BigVideo();
    BV.init({useFlashForFirefox:false, container:$('#home.section')});
    BV.getPlayer().on('loadeddata', function(){
      $('html').addClass('video-loaded');
    })
    BV.show('http://winter-feast.s3.amazonaws.com/video/fire-slow.mp4', {ambient:true, container: $('#home.section')});
  }
});
