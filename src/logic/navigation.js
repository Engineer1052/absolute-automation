export function initNavigation() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // "System View" button scroll
    const systemViewBtn = document.querySelector('button[aria-label="System View"]');
    if (systemViewBtn) {
        systemViewBtn.addEventListener('click', () => {
            const modulesSection = document.getElementById('systems');
            if (modulesSection) {
                modulesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
