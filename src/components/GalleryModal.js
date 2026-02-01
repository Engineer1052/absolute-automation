export class GalleryModal {
    constructor() {
        this.render();
        this.bindEvents();
    }

    render() {
        const modalHTML = `
            <div id="gallery-modal" class="fixed inset-0 z-[200] hidden opacity-0 transition-opacity duration-300" aria-modal="true" role="dialog">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/90 backdrop-blur-sm" data-action="close"></div>
                
                <!-- Modal Content Container -->
                <div id="gallery-modal-wrapper" class="fixed inset-0 flex items-center justify-center p-4">
                    <!-- Image Card -->
                    <div class="relative bg-transparent rounded-3xl overflow-hidden w-full max-w-5xl aspect-square md:aspect-[7/5] transform scale-95 transition-transform duration-300 shadow-2xl group">
                        
                        <!-- Close Button (Floating) -->
                        <button class="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/20" data-action="close">
                            <span class="material-icons-round">close</span>
                        </button>

                        <!-- The Image -->
                        <img id="gallery-modal-img" src="" alt="Gallery Image" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        this.el = document.getElementById('gallery-modal');
        this.content = this.el.querySelector('.relative'); // The card container
        this.img = document.getElementById('gallery-modal-img');
    }

    bindEvents() {
        // Target all images inside the gallery grid
        const galleryImages = document.querySelectorAll('#gallery .grid .group img');

        galleryImages.forEach(img => {
            // Make image appearing clickable
            img.closest('.group').style.cursor = 'pointer';

            img.closest('.group').addEventListener('click', (e) => {
                e.preventDefault();
                // Get data from the clicked card
                // Get data from the clicked card
                const src = img.src;

                this.open(src);
            });
        });

        // Close Triggers
        this.el.querySelectorAll('[data-action="close"]').forEach(btn => {
            btn.addEventListener('click', () => this.close());
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.el.classList.contains('hidden')) {
                this.close();
            }
        });

        // Close when clicking outside the image (on the wrapper)
        document.getElementById('gallery-modal-wrapper').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.close();
            }
        });
    }

    open(src) {
        // Set content
        this.img.src = src;

        this.el.classList.remove('hidden');
        // Animation frame for smooth transition
        requestAnimationFrame(() => {
            this.el.classList.remove('opacity-0');
            this.content.classList.remove('scale-95');
            this.content.classList.add('scale-100');
        });
    }

    close() {
        this.el.classList.add('opacity-0');
        this.content.classList.remove('scale-100');
        this.content.classList.add('scale-95');

        setTimeout(() => {
            this.el.classList.add('hidden');
            this.img.src = ''; // Clear source
        }, 300);
    }
}
