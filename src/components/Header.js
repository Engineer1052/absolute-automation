export function loadHeader() {
    const headerHTML = `
    <header class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <nav class="glass flex items-center justify-between px-6 py-4 rounded-full border border-white/10 relative">
            <a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity z-50 relative">
                <img src="/absolute-logo.png" alt="Absolute Automation Solutions" class="h-16 w-auto object-contain" />
                <div class="flex flex-col font-mono font-bold tracking-tighter leading-[0.8] text-[10px] md:text-xs text-slate-800 dark:text-white justify-center translate-y-[2px]">
                    <span>ABSOLUTE</span>
                    <span>AUTOMATION</span>
                    <span>SOLUTIONS</span>
                </div>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
                <a class="hover:text-primary transition-colors nav-link" href="/about">About</a>
                
                <!-- Services Dropdown -->
                <div class="relative group">
                    <button class="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest">
                        Services
                        <span class="material-icons-round text-sm">expand_more</span>
                    </button>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block min-w-[300px]">
                        <div class="bg-white/[0.98] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden p-2 flex flex-col gap-1 shadow-2xl">
                            <a href="/services" class="block px-4 py-3 rounded-xl hover:bg-white/10 hover:text-primary transition-colors font-bold border-b border-black/5 mx-2">
                                All Services
                            </a>
                            <a href="/factory-automation.html" class="block px-4 py-2 rounded-xl hover:bg-black/5 hover:text-primary transition-colors text-xs">
                                Factory Automation
                            </a>
                            <a href="/compact-custom-machinery.html" class="block px-4 py-2 rounded-xl hover:bg-black/5 hover:text-primary transition-colors text-xs">
                                Compact Custom Machinery
                            </a>
                            <a href="/control-panel-assembly.html" class="block px-4 py-2 rounded-xl hover:bg-black/5 hover:text-primary transition-colors text-xs">
                                Control Panel Assembly
                            </a>
                            <a href="/systems-integration.html" class="block px-4 py-2 rounded-xl hover:bg-black/5 hover:text-primary transition-colors text-xs">
                                Control Systems Integration
                            </a>
                            <a href="/field-service.html" class="block px-4 py-2 rounded-xl hover:bg-black/5 hover:text-primary transition-colors text-xs">
                                Field Service
                            </a>
                        </div>
                    </div>
                </div>

                <a class="hover:text-primary transition-colors nav-link" href="/videos">Videos</a>
                <a class="hover:text-primary transition-colors nav-link" href="/case-studies">Case Studies</a>
            </div>
            
            <!-- Phone Number (Hidden on Mobile) -->
            <div class="hidden md:flex items-center gap-4">
                <a href="tel:3364628375" class="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-900/10 text-[10px] md:text-xs font-bold text-slate-900 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all backdrop-blur-sm">
                    <span class="material-icons-round text-sm">phone</span>
                    (336) 462-8375
                </a>
                
                <button data-trigger="modal"
                    class="bg-slate-900 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                    Contact
                </button>
            </div>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-btn" class="md:hidden z-50 text-slate-800 relative w-10 h-10 flex items-center justify-center border border-slate-200/20 rounded-full bg-white/50 backdrop-blur-md active:scale-95 transition-all">
                <span class="material-icons-round text-2xl">menu</span>
            </button>
        </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 z-[90] bg-gradient-to-b from-white to-blue-100/90 backdrop-blur-xl transform translate-x-full transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-start pt-32 overflow-y-auto opacity-0 pointer-events-none">
        <div class="flex flex-col items-center gap-8 text-2xl font-mono font-bold uppercase tracking-widest text-slate-900 w-full pb-10">
            <a class="mobile-link hover:text-primary transition-colors" href="/">Home</a>
            <a class="mobile-link hover:text-primary transition-colors" href="/about">About</a>
            <div class="flex flex-col items-center w-full">
                <div class="flex items-center gap-4">
                    <!-- Spacer to balance button width for perfect centering -->
                    <div class="w-8"></div>
                    <a class="mobile-link hover:text-primary transition-colors" href="/services">Services</a>
                    <button id="mobile-services-toggle" class="p-2 border border-slate-300 rounded-full w-8 h-8 flex items-center justify-center">
                        <span class="material-icons-round text-sm">expand_more</span>
                    </button>
                    <!-- Button occupies w-8 space on right -->
                </div>
                <!-- Mobile Sub-links (Hidden by default) -->
                <div id="mobile-services-dropdown" style="display: none;" class="hidden flex-col gap-4 text-sm text-slate-500 items-center text-center mt-4 mb-4 bg-white/[0.98] rounded-xl w-3/4 py-4 border border-white/20">
                    <a class="mobile-link hover:text-primary transition-colors" href="/factory-automation.html">Factory Automation</a>
                    <a class="mobile-link hover:text-primary transition-colors" href="/compact-custom-machinery.html">Compact Custom Machinery</a>
                    <a class="mobile-link hover:text-primary transition-colors" href="/control-panel-assembly.html">Panel Assembly</a>
                    <a class="mobile-link hover:text-primary transition-colors" href="/systems-integration.html">Systems Integration</a>
                    <a class="mobile-link hover:text-primary transition-colors" href="/field-service.html">Field Service</a>
                </div>
            </div>
            <a class="mobile-link hover:text-primary transition-colors" href="/videos">Videos</a>
            <a class="mobile-link hover:text-primary transition-colors" href="/case-studies">Case Studies</a>
            
            <!-- Mobile Phone & Contact -->
            <a href="tel:3364628375" class="flex items-center justify-center gap-2 text-white bg-slate-900 border border-slate-800 px-8 h-12 rounded-full mt-4 w-64 shadow-lg active:scale-95 transition-all text-sm font-bold tracking-widest uppercase">
                <span class="material-icons-round">phone</span>
                (336) 462-8375
            </a>
            <button data-trigger="modal" class="mobile-link flex items-center justify-center text-white border border-transparent px-8 h-12 rounded-full mt-4 bg-slate-900 shadow-lg active:scale-95 transition-all w-64 text-sm font-bold tracking-widest uppercase">
                Contact
            </button>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Active Link Highlighting (Desktop)
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('text-primary');
        }
    });

    // Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileBtn.querySelector('.material-icons-round');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            mobileOverlay.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
            menuIcon.textContent = 'close';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            // Ensure button is visible on light background
            mobileBtn.classList.add('bg-white', 'text-black');
            mobileBtn.classList.remove('bg-white/50', 'text-slate-800');
        } else {
            mobileOverlay.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
            menuIcon.textContent = 'menu';
            document.body.style.overflow = '';
            // Reset button style
            mobileBtn.classList.remove('bg-white', 'text-black');
            mobileBtn.classList.add('bg-white/50', 'text-slate-800');
        }
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // Mobile Services Sub-menu Toggle
    const servicesToggle = document.getElementById('mobile-services-toggle');
    const servicesMenu = document.getElementById('mobile-services-dropdown');

    if (servicesToggle && servicesMenu) {
        servicesToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent menu from closing if it bubbles up

            // Check if currently hidden (checking inline style OR class)
            const isHidden = servicesMenu.style.display === 'none' || servicesMenu.classList.contains('hidden');

            if (isHidden) {
                // Show it
                servicesMenu.style.display = 'flex';
                servicesMenu.classList.remove('hidden');
                servicesMenu.classList.add('flex');

                // Icon up
                const icon = servicesToggle.querySelector('.material-icons-round');
                icon.textContent = 'expand_less';
                servicesToggle.classList.add('bg-primary', 'text-white', 'border-transparent');
                servicesToggle.classList.remove('border-slate-300');
            } else {
                // Hide it
                servicesMenu.style.display = 'none';
                servicesMenu.classList.add('hidden');
                servicesMenu.classList.remove('flex');

                // Icon down
                const icon = servicesToggle.querySelector('.material-icons-round');
                icon.textContent = 'expand_more';
                servicesToggle.classList.remove('bg-primary', 'text-white', 'border-transparent');
                servicesToggle.classList.add('border-slate-300');
            }
        });
    }
}
