export function loadHeader() {
    const headerHTML = `
    <header class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl">
        <nav class="glass flex items-center justify-between px-6 py-4 rounded-full border border-white/10">
            <a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/absolute-logo.png" alt="Absolute Automation Solutions" class="h-16 w-auto object-contain" />
                <span class="font-mono font-bold tracking-tighter text-base hidden lg:block">ABSOLUTE AUTOMATION SOLUTIONS</span>
            </a>
            <div class="hidden md:flex items-center gap-6 text-xs font-bold font-mono tracking-widest uppercase text-slate-600">
                <a class="hover:text-black transition-colors nav-link" href="/about">About</a>
                <a class="hover:text-black transition-colors nav-link" href="/services">Services</a>
                <a class="hover:text-black transition-colors nav-link" href="/videos">Videos</a>
                <a class="hover:text-black transition-colors nav-link" href="/case-studies">Case Studies</a>
            </div>
            <a href="/contact"
                class="bg-white text-black text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                Contact
            </a>
        </nav>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Active Link Highlighting
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        // Simple check: if href matches path (handling root / vs /index.html if needed)
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('text-primary');
        }
    });
}
