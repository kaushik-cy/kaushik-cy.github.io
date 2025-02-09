let nav = document.getElementById('nav');
let hideTimeout;

function hideNav() {
	if(!nav.matches(':hover')) {
		nav.classList.add('nav-hidden');
	}
}

function resetHideTimeout() {
  clearTimeout(hideTimeout);
  nav.classList.remove('nav-hidden');
  hideTimeout = setTimeout(hideNav, 1000);
}

document.addEventListener('mousemove', resetHideTimeout);
hideTimeout = setTimeout(hideNav, 1000);
