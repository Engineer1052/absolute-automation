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
                    <div class="bg-background-dark border border-white/10 rounded-2xl w-full max-w-sm p-8 relative transform scale-95 transition-transform duration-300 shadow-[0_0_50px_rgba(0,180,255,0.15)]">
                        <!-- Close Button -->
                        <button class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" data-action="close">
                            <span class="material-icons-round">close</span>
                        </button>
                        
                        <!-- Content -->
                        <div class="text-center">
                            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span class="material-icons-round text-primary">contact_support</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">Connect</h3>
                            <p class="text-slate-400 text-sm mb-8">
                                Choose a channel to initiate contact.
                            </p>
                            
                            <div class="space-y-4">
                                <!-- Email Link -->
                                <a href="mailto:AbsoluteAutomation@AA.com" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all group">
                                    <div class="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                        <span class="material-icons-round text-sm">email</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="text-[10px] font-mono uppercase tracking-widest text-slate-500">Email</div>
                                        <div class="font-bold text-sm">AbsoluteAutomation@AA.com</div>
                                    </div>
                                </a>

                                <!-- Phone Link -->
                                <a href="tel:+15550000000" class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all group">
                                    <div class="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                        <span class="material-icons-round text-sm">phone</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="text-[10px] font-mono uppercase tracking-widest text-slate-500">Phone</div>
                                        <div class="font-bold text-sm">(555) 000-0000</div>
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
