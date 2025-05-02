document.addEventListener('DOMContentLoaded', function() {
    // Show/hide other project type field
    const projectTypeSelect = document.getElementById('projectType');
    const otherProjectTypeGroup = document.getElementById('otherProjectTypeGroup');

    if (projectTypeSelect && otherProjectTypeGroup) {
        projectTypeSelect.addEventListener('change', function() {
            if (this.value === 'other') {
                otherProjectTypeGroup.style.display = 'block';
            } else {
                otherProjectTypeGroup.style.display = 'none';
            }
        });
    }

    // Form submission handler
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert('Thank you for your quote request! We will contact you shortly.');
            quoteForm.reset();
        });
    }
});