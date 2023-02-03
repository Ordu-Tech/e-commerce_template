$(document).ready(function() {
	// banner owl-carousel
	$('#banner-area .owl-carousel').owlCarousel({
		dots: true,
		items: 1,
		loop:true,
	    autoplay:true,
	    autoplayHoverPause:true
	})

	// top sale owl-carousel
	$('#top-sale .owl-carousel').owlCarousel({
		dots: false,
		nav: true,
		loop:true,
	    responsive: {
	    	0:{
	    		items:1
	    	},
	    	600:{
	    		items:3
	    	},
	    	1000:{
	    		items:5
	    	}
	    }
	})

	// isotope filter

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	// filter items on click button
	$('.button-group').on('click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({filter: filterValue})
	})

	// new arrivals owl-carousel
	$('#new-arrivals .owl-carousel').owlCarousel({
		dots: true,
		nav: false,
		loop:true,
	    responsive: {
	    	0:{
	    		items:1
	    	},
	    	600:{
	    		items:3
	    	},
	    	1000:{
	    		items:5
	    	}
	    }
	})

	// blog owl-carousel
	$('#blogs .owl-carousel').owlCarousel({
		dots: true,
		nav: false,
		loop:true,
	    responsive: {
	    	0:{
	    		items:1
	    	},
	    	600:{
	    		items:3
	    	}
	    }
	})


})

let qty_down = document.querySelectorAll('.qty .qty-down');
let qty_up = document.querySelectorAll('.qty .qty-up');
let qty_input = document.querySelectorAll('.qty .qty-input');
qty_down.forEach((down)=>{
	let data_id = down.getAttribute('data-id')
	down.onclick = ()=>{
		qty_input.forEach((input)=>{
			let input_data_id = input.getAttribute('data-id')
			if (input_data_id == data_id) {
				if (input.value >= 2) {
					return --input.value;
				}
			}
			
		})		
	}

})

qty_up.forEach((up)=>{
	let data_id = up.getAttribute('data-id')
	up.onclick = ()=>{
		qty_input.forEach((input)=>{
			let input_data_id = input.getAttribute('data-id')
			if (input_data_id == data_id) {
				if (input.value <= 9) {
					return ++input.value;
				}
			}
			
		})		
	}
})
