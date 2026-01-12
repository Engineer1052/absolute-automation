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
                    <div class="bg-background-dark border border-white/10 rounded-2xl w-full max-w-md p-8 relative transform scale-95 transition-transform duration-300 shadow-[0_0_50px_rgba(255,30,30,0.15)]">
                        <!-- Close Button -->
                        <button class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" data-action="close">
                            <span class="material-icons-round">close</span>
                        </button>
                        
                        <!-- Content -->
                        <div class="text-center">
                            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span class="material-icons-round text-primary">lock</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">Restricted Access</h3>
                            <p class="text-slate-400 text-sm mb-6">
                                This node requires secure clearance. Please sign in or contact administration for a neural link.
                            </p>
                            
                            <form class="space-y-4 text-left">
                                <div>
                                    <label class="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Operator ID</label>
                                    <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="OP_8829_X">
                                </div>
                                <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(255,30,30,0.3)] uppercase tracking-widest text-sm">
                                    Authenticate
                                </button>
                            </form>
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

        // Prevent form submission for demo
        this.el.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'VERIFYING...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                btn.innerText = 'ACCESS DENIED';
                btn.classList.replace('bg-primary', 'bg-red-900');

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.replace('bg-red-900', 'bg-primary');
                    btn.classList.remove('opacity-75', 'cursor-not-allowed');
                }, 2000);
            }, 1000);
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
