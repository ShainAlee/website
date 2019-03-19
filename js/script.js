var x =0;

//Supported by
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

//mail button click event

				function mailbtn(){
					$( "div.form" ).toggleClass( "hid");
					var tele = document.getElementById("telecon");
					var mail = document.getElementById("form");
					var some = document.getElementById("all");

				
				
				if(!mail.classList.contains("hid")){
				some.classList.add("cover");
				}
				}
				
				//just a test slert
				function test()
				{
					alert();
				}
				
// cover
function cover(){
	var tele = document.getElementById("telecon");
	var mail = document.getElementById("form");
	var some = document.getElementById("all");
	
	  if(!tele.classList.contains("hid")){
		  tele.classList.add("hid");
	  }
	  if(!mail.classList.contains("hid")){
		  mail.classList.add("hid");
	  }
	  some.classList.remove("cover");
}
//tele clicked
function tele(){
			$( "p.telecon" ).toggleClass( "hid");
				var tele = document.getElementById("telecon");
				var mail = document.getElementById("form");
				var some = document.getElementById("all");
				
				
				if(!tele.classList.contains("hid")){
				some.classList.add("cover");
				}
}
//main hover
$(document).ready(function(){
  $("#stop").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });
});
