window.onload = function() {
	const hamburger = document.querySelector('.navigation__hamburger');
	const navigation = document.querySelector('.navigation');
	const outerClick = document.querySelector('.navigation__outer-click');
	const hamburgerLines = document.querySelectorAll('.navigation__hamburger-line');
	const navItems = document.querySelectorAll('.navigation__nav-item');

	const toggleNavigation = () => {
		navigation.classList.toggle('navigation--active');
		hamburgerLines.forEach(line => {
			line.classList.toggle('navigation__hamburger-line--active');
		})
		console.log("click");
	};

	hamburger.addEventListener('click', toggleNavigation);
	outerClick.addEventListener('click', toggleNavigation);
	navItems.forEach(item => item.addEventListener('click', toggleNavigation));
};