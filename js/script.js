document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeaderAndFooter();

    // Initialize components when DOM is loaded
    setupMobileMenu();
    setupTestimonialSlider();
    setupProjectFilter();
    setupBackToTop();
});

// Header and Footer Loading
function loadHeaderAndFooter() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-include').innerHTML = data;
            setActiveNavItem();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-include').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Set active navigation item based on current page
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Remove active class from all nav items
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });

    // Set active class based on current page
    if (currentPage === 'index.html' || currentPage === '') {
        document.querySelector('#nav-home')?.classList.add('active');
    } else if (currentPage.includes('service')) {
        document.querySelector('#nav-services')?.classList.add('active');
    } else if (currentPage.includes('project')) {
        document.querySelector('#nav-projects')?.classList.add('active');
    } else if (currentPage.includes('about')) {
        document.querySelector('#nav-about')?.classList.add('active');
    } else if (currentPage.includes('contact')) {
        document.querySelector('#nav-contact')?.classList.add('active');
    }
}

// Mobile menu functionality
function setupMobileMenu() {
    document.addEventListener('click', function(e) {
        const hamburger = e.target.closest('.hamburger');
        if (hamburger) {
            hamburger.classList.toggle('active');
            document.querySelector('.nav-menu')?.classList.toggle('active');
        }

        // Close mobile menu when clicking a nav link
        if (e.target.closest('.nav-menu a')) {
            document.querySelector('.hamburger')?.classList.remove('active');
            document.querySelector('.nav-menu')?.classList.remove('active');
        }
    });
}

// Testimonial slider functionality
function setupTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0 || dots.length === 0) return;

    let currentSlide = 0;

    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show the current slide and activate its dot
        slides[n].style.display = 'block';
        dots[n].classList.add('active');
    }

    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-rotate slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

// Back to top button functionality
function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
}
function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.transformation-card');
    const noResults = document.getElementById('no-results');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            let visibleCount = 0;

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResults) {
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        });
    });
}