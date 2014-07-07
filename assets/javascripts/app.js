//= require_tree ./vendor

$(function() {
    var BV = new $.BigVideo();
    BV.init({useFlashForFirefox:false, container:$('#home.section')});
    BV.show('http://winter-feast.s3.amazonaws.com/video/fire-slow.mp4', {ambient:true, container: $('#home.section')});
});
