export function loadHeader() {
    const headerHTML = `
    <header class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <nav class="glass flex items-center justify-between px-6 py-4 rounded-full border border-white/10 relative">
            <a href="/" class="flex items-center gap-4 hover:opacity-80 transition-opacity z-50 relative">
                <img src="/absolute-logo.png" alt="Absolute Automation Solutions" class="h-12 w-auto object-contain" />
                <span class="font-mono font-bold tracking-tighter text-sm md:text-lg hidden xs:block">ABSOLUTE AUTOMATION SOLUTIONS</span>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
                <a class="hover:text-primary transition-colors nav-link" href="/about">About</a>
                <a class="hover:text-primary transition-colors nav-link" href="/services">Services</a>
                <a class="hover:text-primary transition-colors nav-link" href="/videos">Videos</a>
                <a class="hover:text-primary transition-colors nav-link" href="/case-studies">Case Studies</a>
            </div>
            
            <a href="/contact"
                class="hidden md:block bg-white text-black text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                Contact
            </a>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-btn" class="md:hidden z-50 text-slate-800 relative w-10 h-10 flex items-center justify-center border border-slate-200/20 rounded-full bg-white/50 backdrop-blur-md active:scale-95 transition-all">
                <span class="material-icons-round text-2xl">menu</span>
            </button>
        </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 z-[90] bg-gradient-to-b from-white to-blue-100/90 backdrop-blur-xl transform translate-x-full transition-transform duration-500 ease-in-out md:hidden flex items-center justify-center opacity-0 pointer-events-none">
        <div class="flex flex-col items-center gap-8 text-2xl font-mono font-bold uppercase tracking-widest text-slate-900">
            <a class="mobile-link hover:text-primary transition-colors" href="/">Home</a>
            <a class="mobile-link hover:text-primary transition-colors" href="/about">About</a>
            <a class="mobile-link hover:text-primary transition-colors" href="/services">Services</a>
            <a class="mobile-link hover:text-primary transition-colors" href="/videos">Videos</a>
            <a class="mobile-link hover:text-primary transition-colors" href="/case-studies">Case Studies</a>
            <a class="mobile-link text-primary border border-primary/30 px-8 py-3 rounded-full mt-8 bg-white/50" href="/contact">Contact</a>
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
}
