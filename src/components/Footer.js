export function loadFooter() {
    const footerHTML = `
    <footer class="pt-20 pb-10 border-t border-white/5 overflow-hidden">
        <div class="mb-20">
            <div class="flex whitespace-nowrap animate-marquee">
                <span
                    class="text-[12vw] font-black tracking-tighter text-transparent stroke-text opacity-10 uppercase px-8"
                    style="-webkit-text-stroke: 1px #000;">DESIGN. FABRICATE. INTEGRATE. //</span>
                <span
                    class="text-[12vw] font-black tracking-tighter text-transparent stroke-text opacity-10 uppercase px-8"
                    style="-webkit-text-stroke: 1px #000;">DESIGN. FABRICATE. INTEGRATE. //</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
                <div class="flex items-center gap-3 mb-6">
                    <img src="/absolute-logo.png" alt="Absolute Automation Solutions" class="h-12 md:h-16 w-auto object-contain" />
                    <div class="flex flex-col font-mono font-bold tracking-tighter leading-none text-[11px] md:text-xs text-slate-800 justify-center translate-y-[2px]">
                        <span>ABSOLUTE</span>
                        <span>AUTOMATION</span>
                        <span>SOLUTIONS</span>
                    </div>
                </div>
                <p class="text-slate-600 max-w-sm text-sm leading-relaxed">
                    Automating North Carolina’s Manufacturing Future. <br />
                    Custom Robotics, PLC Control Systems, and Process Optimization for the Southeast.
                </p>
            </div>
            <div class="flex flex-col md:flex-row gap-12 text-sm font-mono uppercase tracking-widest text-slate-500">
                <div class="space-y-4">
                    <p class="text-slate-900">Social</p>
                    <a class="block hover:text-primary transition-colors" href="#">X / Twitter</a>
                    <a class="block hover:text-primary transition-colors" href="#">LinkedIn</a>
                </div>
            </div>
        </div>
        <div
            class="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-600 tracking-widest uppercase">
            <div class="flex items-center gap-4">
                <span>© 2024 ABSOLUTE AUTOMATION SOLUTIONS. ALL RIGHTS RESERVED.</span>
            </div>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
