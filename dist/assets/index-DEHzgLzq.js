(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();function p(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();const o=this.getAttribute("href");if(o==="#")return;const i=document.querySelector(o);i&&i.scrollIntoView({behavior:"smooth"})})});const e=document.querySelector('button[aria-label="System View"]');e&&e.addEventListener("click",()=>{const t=document.getElementById("systems");t&&t.scrollIntoView({behavior:"smooth"})})}class y{constructor(){this.render(),this.bindEvents()}render(){document.body.insertAdjacentHTML("beforeend",`
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
        `),this.el=document.getElementById("app-modal"),this.content=this.el.querySelector(".relative")}bindEvents(){document.querySelectorAll('[data-trigger="modal"]').forEach(t=>{t.addEventListener("click",s=>{s.preventDefault(),this.open()})}),this.el.querySelectorAll('[data-action="close"]').forEach(t=>{t.addEventListener("click",()=>this.close())}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()}),this.el.querySelector("form").addEventListener("submit",t=>{t.preventDefault();const s=t.target.querySelector("button"),o=s.innerText;s.innerText="VERIFYING...",s.classList.add("opacity-75","cursor-not-allowed"),setTimeout(()=>{s.innerText="ACCESS DENIED",s.classList.replace("bg-primary","bg-red-900"),setTimeout(()=>{s.innerText=o,s.classList.replace("bg-red-900","bg-primary"),s.classList.remove("opacity-75","cursor-not-allowed")},2e3)},1e3)})}open(){this.el.classList.remove("hidden"),requestAnimationFrame(()=>{this.el.classList.remove("opacity-0"),this.content.classList.remove("scale-95"),this.content.classList.add("scale-100")})}close(){this.el.classList.add("opacity-0"),this.content.classList.remove("scale-100"),this.content.classList.add("scale-95"),setTimeout(()=>{this.el.classList.add("hidden")},300)}}p();new y;const l=document.getElementById("shader-canvas"),n=l.getContext("2d");let a,c,u=[],d={x:-100,y:-100};class b{constructor(){this.reset()}reset(){this.x=Math.random()*a,this.y=Math.random()*c,this.size=Math.random()*2+.5,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.life=Math.random()*100+100,this.alpha=Math.random()*.3}update(){this.x+=this.vx,this.y+=this.vy;const t=d.x-this.x,s=d.y-this.y;Math.sqrt(t*t+s*s)<150&&(this.vx-=t*1e-4,this.vy-=s*1e-4),(this.x<0||this.x>a||this.y<0||this.y>c)&&this.reset()}draw(){n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2),n.fillStyle=`rgba(255, 30, 30, ${this.alpha})`,n.fill()}}function m(){a=l.width=window.innerWidth,c=l.height=window.innerHeight,v()}function v(){u=[];for(let e=0;e<150;e++)u.push(new b)}function f(){n.clearRect(0,0,a,c);const e=n.createRadialGradient(a/2,c/2,0,a/2,c/2,a);e.addColorStop(0,"rgba(3, 3, 5, 0)"),e.addColorStop(1,"rgba(255, 30, 30, 0.03)"),n.fillStyle=e,n.fillRect(0,0,a,c),u.forEach(t=>{t.update(),t.draw()}),requestAnimationFrame(f)}window.addEventListener("resize",m);window.addEventListener("mousemove",e=>{d.x=e.clientX,d.y=e.clientY});l&&(m(),f());const g={threshold:.1},x=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("opacity-100"),t.target.classList.remove("opacity-0","translate-y-10"))})},g);document.querySelectorAll(".bento-item").forEach(e=>{e.classList.add("transition-all","duration-1000","opacity-0","translate-y-10"),x.observe(e)});
