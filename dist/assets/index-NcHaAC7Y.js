(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();function x(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const i=this.getAttribute("href");if(i==="#"){window.scrollTo({top:0,behavior:"smooth"});return}const o=document.querySelector(i);o&&o.scrollIntoView({behavior:"smooth"})})});const s=document.querySelector('button[aria-label="System View"]');s&&s.addEventListener("click",()=>{const t=document.getElementById("systems");t&&t.scrollIntoView({behavior:"smooth"})})}class w{constructor(){this.render(),this.bindEvents()}render(){document.body.insertAdjacentHTML("beforeend",`
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
        `),this.el=document.getElementById("app-modal"),this.content=this.el.querySelector(".relative")}bindEvents(){document.querySelectorAll('[data-trigger="modal"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.open()})}),this.el.querySelectorAll('[data-action="close"]').forEach(t=>{t.addEventListener("click",()=>this.close())}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()}),this.el.querySelector("form").addEventListener("submit",t=>{t.preventDefault();const e=t.target.querySelector("button"),i=e.innerText;e.innerText="VERIFYING...",e.classList.add("opacity-75","cursor-not-allowed"),setTimeout(()=>{e.innerText="ACCESS DENIED",e.classList.replace("bg-primary","bg-red-900"),setTimeout(()=>{e.innerText=i,e.classList.replace("bg-red-900","bg-primary"),e.classList.remove("opacity-75","cursor-not-allowed")},2e3)},1e3)})}open(){this.el.classList.remove("hidden"),requestAnimationFrame(()=>{this.el.classList.remove("opacity-0"),this.content.classList.remove("scale-95"),this.content.classList.add("scale-100")})}close(){this.el.classList.add("opacity-0"),this.content.classList.remove("scale-100"),this.content.classList.add("scale-95"),setTimeout(()=>{this.el.classList.add("hidden")},300)}}x();new w;window.addEventListener("DOMContentLoaded",()=>{document.body.style.opacity="1"});const u=document.getElementById("shader-canvas"),n=u.getContext("2d");let a,c,b=[],h={x:-100,y:-100};class L{constructor(){this.reset()}reset(){this.x=Math.random()*a,this.y=Math.random()*c,this.size=Math.random()*3+1,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.life=Math.random()*100+100,this.alpha=Math.random()*.3}update(){this.x+=this.vx,this.y+=this.vy;const t=h.x-this.x,e=h.y-this.y;Math.sqrt(t*t+e*e)<150&&(this.vx-=t*1e-4,this.vy-=e*1e-4),(this.x<0||this.x>a||this.y<0||this.y>c)&&this.reset()}}function v(){a=u.width=window.innerWidth,c=u.height=window.innerHeight,E()}function E(){b=[];for(let s=0;s<150;s++)b.push(new L)}function g(){n.clearRect(0,0,a,c);const s=Math.min(window.scrollY/(document.body.scrollHeight-window.innerHeight),1),t=0,e=100,i=255,o=0,r=180,l=255,m=t+(o-t)*s,p=e+(r-e)*s,f=i+(l-i)*s;document.documentElement.style.setProperty("--primary-r",Math.round(m)),document.documentElement.style.setProperty("--primary-g",Math.round(p)),document.documentElement.style.setProperty("--primary-b",Math.round(f));const y=n.createRadialGradient(a/2,c/2,0,a/2,c/2,a);y.addColorStop(0,"rgba(3, 3, 5, 0)"),y.addColorStop(1,`rgba(${m}, ${p}, ${f}, 0.03)`),n.fillStyle=y,n.fillRect(0,0,a,c),b.forEach(d=>{d.update(),n.beginPath(),n.arc(d.x,d.y,d.size,0,Math.PI*2),n.fillStyle=`rgba(${m}, ${p}, ${f}, ${d.alpha})`,n.fill()}),requestAnimationFrame(g)}window.addEventListener("resize",v);window.addEventListener("mousemove",s=>{h.x=s.clientX,h.y=s.clientY});u&&(v(),g());const M={threshold:.1},S=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&(t.target.classList.add("opacity-100"),t.target.classList.remove("opacity-0","translate-y-10"))})},M);document.querySelectorAll(".bento-item").forEach(s=>{s.classList.add("transition-all","duration-1000","opacity-0","translate-y-10"),S.observe(s)});
