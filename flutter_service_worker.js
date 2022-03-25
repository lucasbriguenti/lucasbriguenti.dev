'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "04d1b26632917bfb3f034c60af41aafa",
"/": "158bb59813fac1486dbd077bd3cfb208",
"lucasbriguenti.dev/.git/config": "3993d5caae01f2c90611536294f97d2d",
"lucasbriguenti.dev/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"lucasbriguenti.dev/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"lucasbriguenti.dev/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"lucasbriguenti.dev/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"lucasbriguenti.dev/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"lucasbriguenti.dev/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"lucasbriguenti.dev/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"lucasbriguenti.dev/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"lucasbriguenti.dev/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"lucasbriguenti.dev/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"lucasbriguenti.dev/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"lucasbriguenti.dev/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"lucasbriguenti.dev/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"lucasbriguenti.dev/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"lucasbriguenti.dev/.git/index": "ab5c9824bdd5258ada96d2d6fa898d49",
"lucasbriguenti.dev/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"lucasbriguenti.dev/.git/logs/HEAD": "b475d9dde640e6020db5cbc2ddab7745",
"lucasbriguenti.dev/.git/logs/refs/heads/main": "b475d9dde640e6020db5cbc2ddab7745",
"lucasbriguenti.dev/.git/logs/refs/remotes/origin/HEAD": "b475d9dde640e6020db5cbc2ddab7745",
"lucasbriguenti.dev/.git/objects/pack/pack-d0221b57b0ef3e5da1ec9157fd5979f82a9d9459.idx": "ceae27e0171c2016bce9d36f5eb06903",
"lucasbriguenti.dev/.git/objects/pack/pack-d0221b57b0ef3e5da1ec9157fd5979f82a9d9459.pack": "425167a62f442df021151c55860a493e",
"lucasbriguenti.dev/.git/packed-refs": "4ca2a8447d1913e706c1fcd48dafe563",
"lucasbriguenti.dev/.git/refs/heads/main": "d01ca4965d9f9f0e42f9ad8f797529f2",
"lucasbriguenti.dev/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"lucasbriguenti.dev/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"lucasbriguenti.dev/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"lucasbriguenti.dev/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"lucasbriguenti.dev/assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"lucasbriguenti.dev/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"lucasbriguenti.dev/canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"lucasbriguenti.dev/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"lucasbriguenti.dev/canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"lucasbriguenti.dev/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"lucasbriguenti.dev/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"lucasbriguenti.dev/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"lucasbriguenti.dev/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"lucasbriguenti.dev/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"lucasbriguenti.dev/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"lucasbriguenti.dev/index.html": "158bb59813fac1486dbd077bd3cfb208",
"lucasbriguenti.dev/main.dart.js": "9fa785937ee37eef0398e9d03ae867a2",
"lucasbriguenti.dev/manifest.json": "43fc6697ae841b862b7459a00224bb88",
"lucasbriguenti.dev/version.json": "fa5464a3feb587bcaa5fecbf3e771206",
"main.dart.js": "534c757b0dc84f927e5159ffa8684a29",
"manifest.json": "43fc6697ae841b862b7459a00224bb88",
"version.json": "fa5464a3feb587bcaa5fecbf3e771206"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
