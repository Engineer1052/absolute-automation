export class Modal {
    constructor() {
        this.render();
        this.bindEvents();
    }

    render() {
        const modalHTML = `
            <div id="app-modal" class="fixed inset-0 z-[200] hidden opacity-0 transition-opacity duration-300" aria-modal="true" role="dialog">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" data-action="close"></div>
                
                <!-- Modal Content -->
                <div class="fixed inset-0 flex items-center justify-center p-4">
                    <div class="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-8 relative transform scale-95 transition-transform duration-300 shadow-2xl">
                        <!-- Close Button -->
                        <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors" data-action="close">
                            <span class="material-icons-round">close</span>
                        </button>
                        
                        <!-- Content -->
                        <div class="text-center">
                            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span class="material-icons-round text-primary">contact_support</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-2 text-slate-900">Contact Us</h3>
                            <p class="text-slate-600 text-sm mb-8">
                                Reach out today to discuss your project!
                            </p>
                            
                            <div class="space-y-4">
                                <!-- Email Link -->
                                <a href="mailto:sales@absoluteautomationsolutions.com" class="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-primary/50 hover:shadow-lg transition-all group">
                                    <div class="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                        <span class="material-icons-round text-sm text-slate-600 group-hover:text-black">email</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="text-[10px] font-mono uppercase tracking-widest text-slate-500">Email</div>
                                        <div class="font-bold text-sm text-slate-900 break-all">sales@absoluteautomationsolutions.com</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        this.el = document.getElementById('app-modal');
        this.content = this.el.querySelector('.relative'); // The inner modal card
    }

    bindEvents() {
        // Open Triggers
        document.querySelectorAll('[data-trigger="modal"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
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
    }

    open() {
        this.el.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
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
        }, 300); // Match transition duration
    }
}
