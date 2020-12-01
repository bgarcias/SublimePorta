$(function(event) {
	
	$(window).scroll(function(event) { //scroll
		
		if($('#habilidades').is(':appeared')){
			
			$('.chart').easyPieChart({ //if aparece ejecuta el script
				scaleColor: "black",
				lineWidth: 15,
				lineCap: 'butt',
				barColor: 'black',
				trackColor:	"#ecf0f1",
				size: 160,
				animate: 1800,
				
			  });
		};
	
	});

	///SOLO ESTO


	$(document).scroll(function () {
			var scroll = $(this).scrollTop();

			if (scroll >= 425) {


					// $(".nav.navbar-nav>li>a").css("color", "#fff");
					$(".nav_green").addClass("top_fix");
					$(".space").addClass("pd_80");		
				} else {

					$(".nav_green").removeClass("top_fix");	
					$(".space").removeClass("pd_80");						
				}

	});



	$(document).ready(function(){
	  $('.parallax').parallax();
	});

});


