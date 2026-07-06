// ===== VIEW ALL PROGRAMS (TOGGLE) =====
var viewAllBtn = document.getElementById('viewAllBtn');
var emergingTech = document.getElementById('emerging-tech');
var isVisible = false;

if (viewAllBtn) {
    viewAllBtn.onclick = function(e) {
        e.preventDefault();
        if (isVisible) {
            emergingTech.style.display = 'none';
            viewAllBtn.textContent = 'View All Programs →';
            isVisible = false;
        } else {
            emergingTech.style.display = 'block';
            viewAllBtn.textContent = 'Show Less ↑';
            isVisible = true;
            emergingTech.scrollIntoView({ behavior: 'smooth' });
        }
    };
}

// ===== SMOOTH SCROLL =====
var homeLink = document.querySelector('a[href="#home"]');
var aboutLink = document.querySelector('a[href="#about"]');
var tracksLink = document.querySelector('a[href="#tracks"]');
var coursesLink = document.querySelector('a[href="#courses"]');
var contactLink = document.querySelector('a[href="#contact"]');

function smoothScroll(targetId) {
    var target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

if (homeLink) {
    homeLink.onclick = function(e) {
        e.preventDefault();
        smoothScroll('#home');
    };
}

if (aboutLink) {
    aboutLink.onclick = function(e) {
        e.preventDefault();
        smoothScroll('#about');
    };
}

if (tracksLink) {
    tracksLink.onclick = function(e) {
        e.preventDefault();
        smoothScroll('#tracks');
    };
}

if (coursesLink) {
    coursesLink.onclick = function(e) {
        e.preventDefault();
        smoothScroll('#courses');
    };
}

if (contactLink) {
    contactLink.onclick = function(e) {
        e.preventDefault();
        smoothScroll('#contact');
    };
}