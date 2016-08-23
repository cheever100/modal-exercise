$(document).ready(function(){
	
	$(".activate-modal").click(function(e){
		e.preventDefault();
		$("body").addClass("modal-on");
	});

 	$(".modal a").click(function(e){
 		e.preventDefault();
		$("body").removeClass("modal-on");
		if( $(this).hasClass("yes")) {
			window.location = "awesome.html";
		}
		else if( $(this).hasClass("no")) {
			window.location = "http://www.w3schools.com/";
		} else {
		}
	});

	$(".modal_wrapper").click(function(e){
		if( e.target.className == "modal_wrapper") {
			$("body").removeClass("modal-on");
		}
	});

 });