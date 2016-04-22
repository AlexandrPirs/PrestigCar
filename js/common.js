$(function() {

	
	
	//details FORM
	$("#hidden_form .bottom_form_title a").click(function()	{
		$("#hidden_form .bottom_form_title .details").slideToggle();
	});

	//navigation mob
	$("header .navigation i").click(function()	{
		$("header .navigation ul").slideToggle();
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//owl
	$(".owl-carousel_1").owlCarousel({
		items : 1,
		loop : true,
		smartSpeed : 1000,
		navText : "",
		autoplay : true,
	});

	//owl2 News
	$(".owl-carousel_2").owlCarousel({
		items : 3,
		loop : true,
		//nav : true,
		autoplay : true,
		smartSpeed : 1000,
		navText : "",
		margin : 30,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	});

	//
	// initialize input widgets first
    $('#datepairExample .time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });

    $('#datepairExample .date').datepicker({
        'format': 'yyyy-m-d',
        'autoclose': true
    });

    // initialize datepair
    $('#datepairExample').datepair();


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
