// Inisialisasi sidenav
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// Inisialisasi slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators: false,
	height: 500,
	duration: 1000,
	interval: 3000
});

// Inisialisasi dropdown
const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown, {
	alignment: 'left',
	coverTrigger: false,
	hover: false
});

// Inisialisai materialbox
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// Inisialisasi modal
const modal = document.querySelectorAll('.modal');
M.Modal.init(modal);