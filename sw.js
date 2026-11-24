const CACHE='dokugeki-16a5798d9a';
const ASSETS=["./", "index.html", "about.html", "privacy.html", "config.js", "app.css?v=16a5798d9a", "app.js?v=16a5798d9a", "data/data.js?v=16a5798d9a", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!=='dokugeki-fonts'&&k.startsWith('dokugeki-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
 if(u.origin===location.origin){
  if(e.request.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('.html')){e.respondWith(fetch(e.request).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return res;}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));return;}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return res;})));return;}
 if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){e.respondWith(caches.open('dokugeki-fonts').then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(res=>{c.put(e.request,res.clone());return res;}))));}
});
