'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8368ed235940589ce67c01f44a5ee1d3",
"assets/AssetManifest.json": "e7e264a007c0422dc412eec0fa4807a2",
"assets/assets/fonts/WorkSans-Bold.ttf": "1559ffc7cf61cbae7ea55a250722009c",
"assets/assets/fonts/WorkSans-Light.ttf": "02db4b738c689e05f3f12b3f22969815",
"assets/assets/fonts/WorkSans-Medium.ttf": "73f5c36f3da9740c41b2c1aeb7fc94e5",
"assets/assets/fonts/WorkSans-Regular.ttf": "a3d6c7f7606fc33a6ab5bed9688d1fe8",
"assets/assets/fonts/WorkSans-SemiBold.ttf": "c1b2dde1705db3ada7fd668c36523f66",
"assets/assets/fonts/ZenKakuGothicAntique-Black.ttf": "cb7ea5b4d127ee922fecae90039d9165",
"assets/assets/fonts/ZenKakuGothicAntique-Bold.ttf": "d48c0de7856f0700a3d3e4fbe4b96086",
"assets/assets/fonts/ZenKakuGothicAntique-Light.ttf": "5f15afdf63e6aa7c3b311080ea2104e5",
"assets/assets/fonts/ZenKakuGothicAntique-Medium.ttf": "c5e38d9e5d2cff5cb4f7c2bf4d751890",
"assets/assets/fonts/ZenKakuGothicAntique-Regular.ttf": "97dde17c369b76e9551dcaa6946bef58",
"assets/assets/images/client_1.png": "044af230bbfbd982f5505544a9d0134f",
"assets/assets/images/client_2.png": "ee7300205bf6d0de693a260b6fd995c8",
"assets/assets/images/client_3.png": "176ac7168a605f29361c19288fc6f051",
"assets/assets/images/client_4.png": "3dcd732c078f746677ab7cb81077e71f",
"assets/assets/images/ic_blue_arrow.svg": "e14798435923c210d410e459d64bdb1c",
"assets/assets/images/ic_circle_left_arrow.svg": "0be31fec80637a8ca410525d276cbdb9",
"assets/assets/images/ic_circle_right_arrow.svg": "d78eea2c185c1cdb2a609913f84256f9",
"assets/assets/images/ic_download.svg": "6aa9a0532e6d2d9040371b496d2deb54",
"assets/assets/images/ic_email.svg": "4baf9337a174ad3fc87a586c65485b99",
"assets/assets/images/ic_facebook.svg": "4ad21a44768d63430563ede7010071d7",
"assets/assets/images/ic_jquery.png": "b4bbbcf05358a15770550944ca87632b",
"assets/assets/images/ic_jquery.svg": "b7c5112417f49064d1eaa73d4bb32133",
"assets/assets/images/ic_less.png": "99b4bed55c3d78e28c171809a4bbb84f",
"assets/assets/images/ic_less.svg": "21d7026b2d2a0a8c23d225a009314741",
"assets/assets/images/ic_linkedin.svg": "7b9e3f414daa3c2017aaf725bb962863",
"assets/assets/images/ic_logo.svg": "744a5686becd0fb020d41fd91c9e2ebd",
"assets/assets/images/ic_menu.svg": "3f090c4e2468a7df45f07cc2399988e2",
"assets/assets/images/ic_saas.png": "a4a4c5f3326b838ea67e3046db57ecd7",
"assets/assets/images/ic_sass.svg": "2bc0bacea7fa3f784ade31a6b718fdf2",
"assets/assets/images/ic_spotify.png": "f8755f10cd2cd8ff52cef8ca1e71f58d",
"assets/assets/images/ic_spotify.svg": "9050ab1b02bc65bcff54282884974193",
"assets/assets/images/ic_star.png": "996dbbb50e1f0d499dbd254745900717",
"assets/assets/images/ic_star.svg": "e6c04c8e6a87fde1786cd513059221bf",
"assets/assets/images/ic_white_arrow.svg": "0edd2c156952b54aa40516454b781a1e",
"assets/assets/images/ic_white_logo.svg": "49d6db5b4bd189a03dc17ff43d1c596e",
"assets/assets/images/ic_wordpress.png": "4d23c860f4e27e894c01afeb1b1cb2c2",
"assets/assets/images/ic_wordpress.svg": "263bb9fef07dba284dc3048a4ecd322c",
"assets/assets/images/ic_work_blue.svg": "f73ab3b50bc27f13bb40c08d64c8d49c",
"assets/assets/images/ic_work_white.svg": "7a275870f1277f5929c83a3a82b029ba",
"assets/assets/images/ic_x.svg": "c5154edaf6a39d5ba16dee58a5791984",
"assets/assets/images/profile_1.png": "190a459f432223151bc1c3a636996332",
"assets/assets/images/profile_2.png": "00819b0a7e10c6b6a46e78f6b33f55e1",
"assets/assets/images/project_1.png": "c9bfca8b712316070b6c9c712d93b070",
"assets/assets/images/project_2.png": "271ccf151a27aab92fda5777aaf2251a",
"assets/assets/images/project_3.png": "175a72f6e4b73a90d593d98d3748ef0c",
"assets/assets/images/project_4.png": "4c9c5ce204d3a10444cb9258badc25ba",
"assets/assets/images/project_5.png": "c2cc09022d3ebe873a19cc2af7ea3f8f",
"assets/assets/images/project_6.png": "61c7832bdbe45ce0a430a440d036c17a",
"assets/FontManifest.json": "8673b7899a71b1702f3910ef4700346e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "70e339195acb72b663a839b69d34f9a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b301171bc277b76f7679b61d5dfd6a73",
"/": "b301171bc277b76f7679b61d5dfd6a73",
"main.dart.js": "da0a2ef5e0c6fec635a5a61785268b47",
"manifest.json": "2fb9188af0bb263135877d3e3a776209",
"version.json": "9094aacdae789dccd67fa32109ff1a18"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
