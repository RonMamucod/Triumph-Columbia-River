// Simple menu toggle/close logic for mobile
document.addEventListener('DOMContentLoaded', function() {
	var menuToggle = document.getElementById('menuToggleBtn');
	var menuClose = document.getElementById('menuCloseBtn');
	var navbarCollapse = document.getElementById('navbarSupportedContent');
	if (!menuToggle || !menuClose || !navbarCollapse) return;

	// Show menu
	menuToggle.addEventListener('click', function() {
		navbarCollapse.classList.add('show');
		menuToggle.style.display = 'none';
	});

	// Hide menu
	menuClose.addEventListener('click', function() {
		navbarCollapse.classList.remove('show');
		menuToggle.style.display = '';
	});

	// Hide menu-toggle if menu is open by other means (e.g., resize)
	var observer = new MutationObserver(function() {
		if (navbarCollapse.classList.contains('show')) {
			menuToggle.style.display = 'none';
		} else {
			menuToggle.style.display = '';
		}
	});
	observer.observe(navbarCollapse, { attributes: true, attributeFilter: ['class'] });
});
