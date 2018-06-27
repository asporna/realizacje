document.addEventListener('DOMContentLoaded', function () {


	let arrowNextSection = document.getElementById('next-section');
	let arrowBackToTop = document.getElementById('back-to-top');


	window.addEventListener('scroll', function () {

		let posScroll = window.pageYOffset;


		if (posScroll > 0) {
			arrowNextSection.classList.add('hidden');
		} else {
			arrowNextSection.classList.remove('hidden');
		}

		if (posScroll > 800) {
			arrowBackToTop.classList.remove('hidden');
		} else {
			arrowBackToTop.classList.add('hidden');
		}

	})

	let destination = 0;


	function runSmoothScroll(e) {
		e.preventDefault();
		e.stopPropagation();
		destination = document.querySelector(this.hash).offsetTop;
		smoothScrollTo(e.target);

	}

	function smoothScrollTo(target) {

		window.scrollBy(0, 20);

		let counterScroll = setTimeout(smoothScrollTo, 10);

		if (window.pageYOffset >= destination) {
			clearTimeout(counterScroll);
			return;
		}

	}


	function scrollToTop() {
		window.scrollBy(0, -20);

		let counterScroll = setTimeout(scrollToTop, 10);

		if (window.pageYOffset <= 0) {
			clearTimeout(counterScroll);
			return;
		}

	}

	arrowNextSection.addEventListener('click', runSmoothScroll);
	arrowBackToTop.addEventListener('click', function (e) {
		e.preventDefault();
		scrollToTop();
	});




	let projects = document.querySelectorAll('.project');



	for (let i = 0; i < projects.length; i++) {




		projects[i].addEventListener('click', function (e) {

			document.body.addEventListener('click', function (e) {
				if (!e.target.closest('.project')) {
						projects[i].querySelector('.project-links').style.pointerEvents = 'none';
				}
			})

			projects[i].querySelector('.project-links').style.pointerEvents = 'auto';

		});


	}




});
