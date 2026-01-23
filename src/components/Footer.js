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
                <div class="flex items-center gap-4 mb-6">
                    <img src="/absolute-logo.png" alt="Absolute Automation Solutions" class="h-14 w-auto object-contain" />
                    <span class="font-mono font-bold tracking-tighter text-lg">ABSOLUTE AUTOMATION SOLUTIONS</span>
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
                <div class="space-y-4">
                    <p class="text-slate-900">Access</p>
                    <a class="block hover:text-primary transition-colors" href="#">Documentation</a>
                    <a class="block hover:text-primary transition-colors" href="#">API Portal</a>
                </div>
            </div>
        </div>
        <div
            class="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-600 tracking-widest uppercase">
            <div class="flex items-center gap-4">
                <span>© 2024 ABSOLUTE AUTOMATION. ALL RIGHTS RESERVED.</span>
                <div class="flex items-center gap-2">
                    <div
                        class="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-primary/30 bg-primary/5 text-primary animate-pulse-slow">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        SYSTEMS_ONLINE // v2.0.4
                    </div>
                    <div
                        class="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-primary/30 bg-primary/5 text-primary">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        COMMUNICATION_UPLINK
                    </div>
                </div>
            </div>
            <span>SECURE_ENCRYPTED_CONNECTION_NODE_04</span>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
