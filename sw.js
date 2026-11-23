const CACHE='dokugeki-30bec21ef7';
const ASSETS=["./", "index.html", "about.html", "privacy.html", "config.js", "app.css?v=30bec21ef7", "app.js?v=30bec21ef7", "data/data.js?v=30bec21ef7", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!=='dokugeki-fonts'&&k.startsWith('dokugeki-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
 if(u.origin===location.origin){e.respondWith(caches.match(e.request,{ignoreSearch:u.pathname.endsWith('/')||u.pathname.endsWith('index.html')}).then(r=>r||fetch(e.request)));return;}
 if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){e.respondWith(caches.open('dokugeki-fonts').then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(res=>{c.put(e.request,res.clone());return res;}))));}
});
