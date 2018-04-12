

$(function() {
	var clock;
	clock = $(".clock").FlipClock({
		clockFace: "DailyCounter",
		autoStart: false,
		collbacks: {
			stop: function() {
				$(".message").html("ВРЕМЯ ВЫШЛО")
			}
		}
	});

	var dt = "April 24 2018 17:00";
	var first = new Date(dt);
	last = Date.now();
	var rem = (first - last)/1000;

	clock.setTime(rem);
	clock.setCountdown(true);
	clock.start();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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
