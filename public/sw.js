if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>t(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e110b464dd3dcb2f0fc9250167ed94a6"},{url:"/_next/static/Oetg8tzzobeYYERkxAwT2/_buildManifest.js",revision:"2f90171cc6fab94556615fdfac0bf018"},{url:"/_next/static/Oetg8tzzobeYYERkxAwT2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/4bd1b696-472ee87c85bf8714.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/517-c6ac8c3b963e89b8.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/527-c0e5025081f7b8c1.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/896-53045c90e6533050.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/app/%5Bid%5D/page-3c3cca82a00cabb7.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/app/_not-found/page-a46eea66d146d0bf.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/app/layout-44765f0cf56168c4.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/app/page-fca6e7503bb566ba.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/main-3330834e81596ead.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/main-app-268340146716024b.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-aec9878b8d1ee206.js",revision:"Oetg8tzzobeYYERkxAwT2"},{url:"/_next/static/css/22d0cb1f04ee876c.css",revision:"22d0cb1f04ee876c"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
