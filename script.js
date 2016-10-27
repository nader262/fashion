
$(document).ready(function() {
	$(".video").hover( hoverVideo, hideVideo );
	$('.video').get(0).currentTime = 0.98814;
});

function hoverVideo(e) {
    $(this).get(0).play(); 
}

function hideVideo(e) {
    $(this).get(0).pause(); 
}