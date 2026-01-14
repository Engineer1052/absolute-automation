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
                    <div class="bg-background-dark border border-white/10 rounded-2xl w-full max-w-md p-8 relative transform scale-95 transition-transform duration-300 shadow-[0_0_50px_rgba(0,180,255,0.15)]">
                        <!-- Close Button -->
                        <button class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors" data-action="close">
                            <span class="material-icons-round">close</span>
                        </button>
                        
                        <!-- Content -->
                        <div class="text-center">
                            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span class="material-icons-round text-primary">mail</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-2">Contact Us</h3>
                            <p class="text-slate-400 text-sm mb-6">
                                Ready to automate? Send us a message and our engineering team will respond within 24 hours.
                            </p>
                            
                            <form class="space-y-4 text-left">
                                <div>
                                    <label class="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Name</label>
                                    <input type="text" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Jane Doe">
                                </div>
                                <div>
                                    <label class="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Email</label>
                                    <input type="email" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="jane@company.com">
                                </div>
                                <div>
                                    <label class="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Message</label>
                                    <textarea required rows="3" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Project details..."></textarea>
                                </div>
                                <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(0,180,255,0.3)] uppercase tracking-widest text-sm">
                                    Send Message
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

        // Form Submission
        this.el.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'SENDING...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            // Simulate Network Request
            setTimeout(() => {
                btn.innerText = 'MESSAGE SENT!';
                btn.classList.replace('bg-primary', 'bg-green-600');
                btn.classList.remove('hover:shadow-[0_0_20px_rgba(0,180,255,0.3)]'); // remove initial shadow

                // Clear form
                e.target.reset();

                setTimeout(() => {
                    this.close();

                    // Reset button state after modal closes
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.classList.replace('bg-green-600', 'bg-primary');
                        btn.classList.remove('opacity-75', 'cursor-not-allowed');
                        btn.classList.add('hover:shadow-[0_0_20px_rgba(0,180,255,0.3)]');
                    }, 300);
                }, 1500);
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
