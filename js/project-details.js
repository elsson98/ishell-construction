document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId) {
        loadProjectDetails(projectId);
    }

    // Set up thumbnail click handlers
    setupThumbnailGallery();
});

function loadProjectDetails(projectId) {
    // In a real application, you would fetch project data from a server
    // For now, we'll use some dummy data based on the project ID

    let projectData = {};

    switch(projectId) {
        case 'modern-home':
            projectData = {
                title: 'Modern Family Home',
                subtitle: 'Contemporary residential construction with sustainable features',
                location: 'London, UK',
                type: 'Residential',
                size: '3,500 sq ft',
                date: '2023',
                description: 'This modern family home features sustainable construction techniques and smart home technology throughout. The open-concept design maximizes natural light and creates a seamless flow between indoor and outdoor living spaces. High-efficiency systems and premium materials ensure long-term durability and comfort for the homeowners.',
                features: [
                    'Open-concept floor plan with vaulted ceilings',
                    'Energy-efficient windows and HVAC system',
                    'Smart home automation throughout',
                    'Custom kitchen with premium appliances',
                    'Outdoor living space with built-in kitchen'
                ],
                testimonial: 'Ishell Construction exceeded our expectations in every way. Their attention to detail and commitment to quality was evident throughout the entire process. We couldn\'t be happier with our new home.',
                testimonialAuthor: 'The Johnson Family'
            };
            break;

        case 'office-complex':
            projectData = {
                title: 'Riverside Office Complex',
                subtitle: 'Multi-tenant commercial building with LEED certification',
                location: 'Manchester, UK',
                type: 'Commercial',
                size: '45,000 sq ft',
                date: '2022',
                description: 'This state-of-the-art office complex provides modern workspace for multiple businesses. The design emphasizes sustainability and employee well-being, with ample natural light, efficient systems, and collaborative spaces. The project achieved LEED Gold certification for its environmental performance.',
                features: [
                    'LEED Gold certified building',
                    'Floor-to-ceiling windows with river views',
                    'Central atrium with natural light',
                    'Rooftop garden and meeting spaces',
                    'Underground parking with EV charging stations'
                ],
                testimonial: 'Working with Ishell Construction was a seamless experience from start to finish. They managed our complex requirements efficiently and delivered a building that exceeded our expectations.',
                testimonialAuthor: 'Robert Wilson, Developer'
            };
            break;

        // Add more cases for other projects

        default:
            projectData = {
                title: 'Project Details',
                subtitle: 'Comprehensive information about this construction project',
                location: 'United Kingdom',
                type: 'Construction',
                size: 'Various',
                date: '2023',
                description: 'Project information not found. Please return to the projects page and select a valid project.',
                features: [],
                testimonial: '',
                testimonialAuthor: ''
            };
    }

    // Update page with project data
    document.getElementById('project-title').textContent = projectData.title;
    document.getElementById('project-subtitle').textContent = projectData.subtitle;
    document.getElementById('project-location').textContent = projectData.location;
    document.getElementById('project-type').textContent = projectData.type;
    document.getElementById('project-size').textContent = projectData.size;
    document.getElementById('project-date').textContent = projectData.date;
    document.getElementById('project-description').textContent = projectData.description;

    // Update features list
    const featuresList = document.getElementById('project-features');
    featuresList.innerHTML = '';
    projectData.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Update testimonial
    if (projectData.testimonial) {
        document.getElementById('project-testimonial').textContent = projectData.testimonial;
        document.getElementById('testimonial-author').textContent = '- ' + projectData.testimonialAuthor;
    } else {
        document.querySelector('.project-testimonial').style.display = 'none';
    }
}

function setupThumbnailGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-project-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update main image
            const thumbnailImg = this.querySelector('img');
            mainImage.src = thumbnailImg.src.replace('600x400', '1200x800');
            mainImage.alt = thumbnailImg.alt;
        });
    });
}