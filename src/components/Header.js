export function loadHeader() {
    const headerHTML = `
    <header class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <nav class="glass flex items-center justify-between px-8 py-4 rounded-full border border-white/10">
            <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div class="w-8 h-8 bg-primary rounded-sm rotate-45 flex items-center justify-center">
                    <span class="font-bold text-white text-xs -rotate-45 font-mono">A<sup>2</sup></span>
                </div>
                <span class="font-mono font-bold tracking-tighter text-lg">ABSOLUTE AUTOMATION SOLUTIONS</span>
            </a>
            <div class="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
                <a class="hover:text-primary transition-colors nav-link" href="/about">About</a>
                <a class="hover:text-primary transition-colors nav-link" href="/services">Services</a>
                <a class="hover:text-primary transition-colors nav-link" href="/videos">Videos</a>
                <a class="hover:text-primary transition-colors nav-link" href="/case-studies">Case Studies</a>
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
