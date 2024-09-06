document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {
duration: 300,
dist: -500,
shift: 10,
padding: 50,
numVisibe: 30,
indicators:true,

noWrap: true
	}); 



});


/*<!---Adrian Rivas Escarcega   Today is Saturday May 16th, 2020 -->*/