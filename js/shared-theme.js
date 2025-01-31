// Theme toggle functionality
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Apply initial theme
    applyTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Update particles if they exist
        updateParticlesTheme(newTheme);
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update particles if they exist
    if (window.pJSDom && window.pJSDom[0]) {
        const particles = window.pJSDom[0].pJS.particles;
        particles.color.value = theme === 'dark' 
            ? ['#E77F00', '#9C27B0'] 
            : ['#FFB74D', '#CE93D8'];
        particles.line_linked.color = theme === 'dark' ? '#E77F00' : '#FFB74D';
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

function updateParticlesTheme(theme) {
    if (window.pJSDom && window.pJSDom[0]) {
        const particles = window.pJSDom[0].pJS.particles;
        particles.color.value = theme === 'dark' 
            ? ['#E77F00', '#9C27B0'] 
            : ['#FFB74D', '#CE93D8'];
        particles.line_linked.color = theme === 'dark' ? '#E77F00' : '#FFB74D';
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme); 