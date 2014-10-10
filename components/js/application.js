
$(document).ready(function () {
	$('#left-off-canvas-toggle').mouseover(function(){
	  var newSrc = $(this).attr("src").replace("btns/menu_btn_up.png", "btns/menu_btn_over.png");
	  $(this).attr("src", newSrc); 
	});
	$('#left-off-canvas-toggle').mouseout(function(){
	  var newSrc = $(this).attr("src").replace("btns/menu_btn_over.png", "btns/menu_btn_up.png");
	  $(this).attr("src", newSrc); 
	});

	$('#right-off-canvas-toggle').mouseover(function(){
	  var newSrc = $(this).attr("src").replace("btns/notes_btn_up.png", "btns/notes_btn_over.png");
	  $(this).attr("src", newSrc); 
	});
	$('#right-off-canvas-toggle').mouseout(function(){
	  var newSrc = $(this).attr("src").replace("btns/notes_btn_over.png", "btns/notes_btn_up.png");
	  $(this).attr("src", newSrc); 
	});

	//Scrollable Div Plugin Initialization
	$("section#scrollableNav").smoothDivScroll({
		manualContinuousScrolling: true,
		touchScrolling: true,
	});

	$('.right-off-canvas-toggle').click(function() {
    $('.notes').slideToggle('fast');
	    return false;
	});
});
