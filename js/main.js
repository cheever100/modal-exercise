$(document).ready(function(){
	
	$(".activate-modal").click(function(e){
		e.preventDefault();
		$("body").addClass("modal-on");
	});

 	$(".close").click(function(e){
 		e.preventDefault();
		$("body").removeClass("modal-on");
		if( $(this).hasClass("yes")) {
			window.location = "awesome.html";
		} else {
			window.location = "http://www.w3schools.com/";
		}
	});

 });