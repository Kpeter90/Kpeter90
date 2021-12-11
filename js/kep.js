$(document).on("click","img",function(){
	$(this).animate({
		opacity: 0.50,
		width: "50%"
	}, 5000, function() {
	});
});