// WOW js
wow = new WOW(
	  {
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       0,          // default
	  mobile:       true,       // default
	  live:         true        // default
	}
	)
	wow.init();


// Counter Up
	$(document).ready(function(){
		$('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});
	});



// CountDown
	var countdown = $("#countdown").countdown360({
	    radius      : 60,
	    seconds     : 100,
	    fontColor   : '#FFFFFF',
	    autostart   : false,
	    onComplete  : function () { console.log('done') }
	});

	countdown.start();


// Stopwatch

	$(".incremental-counter").incrementalCounter({
	  		"digits": 4
	});