var menuButton = document.getElementById('menuButton');
var mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
	var isOpen = mobileMenu.style.display === 'block';

	mobileMenu.style.display = isOpen ? 'none' : 'block';
	menuButton.classList.toggle('active', !isOpen);
}
/*
$(document).ready(function ($) {
	console.clear();

	ScrollOut({
		cssProps: {
			visibleY: true,
			viewportY: true,
			scrollPercentY: true,
		},
		threshold: 0.2,
	});
});
*/
const inViewport = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		const id = entry.target.dataset.id;
		const image = document.querySelector(`#${id}`);

		if (entry.isIntersecting) {
			entry.target.dataset.view = 'in-view';

			if (id && image) {
				// check to see if there is another element in the DOM that has this ID
				image.dataset.show = 'true';
			}
		} else {
			if (id && image) {
				image.dataset.show = 'false';
			}

			if (entry.boundingClientRect.top > 0) {
				entry.target.dataset.view = 'below';
			} else {
				entry.target.dataset.view = 'above';
			}
		}
	});
});

const scrollerSections = document.querySelectorAll('.scroller-text-content');

scrollerSections.forEach((section) => {
	inViewport.observe(section);
});
