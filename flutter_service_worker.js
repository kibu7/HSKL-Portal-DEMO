'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "a8bc9df82a2bba5d078944c6369da413",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "32c485e4e159ced8177e8ca0bca2c27e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6130c38695065f5b368e6e341500cb7a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff8cab55aa2f8340519bbffd0b29ee55",
".git/logs/refs/heads/master": "ff8cab55aa2f8340519bbffd0b29ee55",
".git/logs/refs/remotes/HSKL-Portal-DEMO/main": "74bd8088ada17e33f2011678a85698b2",
".git/objects/02/aea1efbad9d50c5255eb482c483912e6bf1c65": "5cc5faa5bb416803987d8557ba3a9bb9",
".git/objects/0a/0b769f94cba00bdc542fcb827478f6d3f06c4b": "c13c44e3f5352fc51b856f7b52d22e1e",
".git/objects/17/e4420f10a7dae87d8ccb69a90231fbec5742f6": "21402307e9ce16ff354aa541b5619037",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/25/a8911f029ddba8b986055cd0ef2e546f2f90f0": "d98f152123dc7fa55350fa8e418715d0",
".git/objects/27/d605e0e2364d5fab6fc34cfb556e59d5dbda84": "e8b56e5bcda3617ba63d7a6241d9cdfb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/e3a77998544581cabc5ff7e77ab5e695b3ea43": "8fcda6a9e4ba3f431134f618f8427052",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/76/2217eda5712935941fabc33df0159998d2a8ff": "3f353f2058f99ddf669bd31d10b62db7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/bfb6d79d509491687ca6738bbe36b729045c40": "5bd524529f86b6b2898a704b46b966db",
".git/objects/84/ca2f5b88d4a31d8c7a8b7aa50805a0ebf5da1f": "a4ddaf61138bc8f4f681c0c53df37983",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/750da98a871edc4145126e4e04a085a289442a": "5615bd901512e497c5451fe51904dcd3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/869cede53688be9ab28cbd39e1fa553084ca37": "1b4f6d5514a8343d7a32e6147b516004",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a0/a0220c4fd53cce715f658e563adbdc289a40cc": "bf0d8044bfe1d08e088cd6373a25368d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/d521be5a961177c8037c73d92261e2d0b2fc43": "999bfea555d2076779d8afab3a5c8e87",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b1/31d2726b442ed78f4009dbee47dfedf82c5721": "7d1d57c3255e408ddd35d01e9b822c18",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/0d968773ee607a420bc4bcf56281d08339faff": "38498490ff5c4f88661e8181376c2a83",
".git/objects/c0/772185a03123ad998401fa1570972d5899d740": "27ff43bb660c7779a53ec657e808101c",
".git/objects/c7/711b65cfa0a1a44c64f5d2914db541fe8572e7": "e0d63bc29a06577e96d1c5ac30d91618",
".git/objects/c9/6c2170f5a1a85a128bd4d7500becf729cdbf06": "388a3960d4d2572c2bd56a83b0b1127f",
".git/objects/ca/7a090d0d05e70148b9d15e2b219f5a79eed961": "c81f4ad9951b735da68014d6fd0e315e",
".git/objects/d5/bb5570cefec198cef2d566a20fb7662314adf8": "7824a95e7ce4de1d70131dcc18cd7aa4",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/e477ed1acc2cbfd5761e6d22a4054e602bf622": "d043f239f884c9f44a8430648a6a2841",
".git/objects/dd/fd68af788f2eb165c429c210449e9f6c7d5b50": "91c5dc0f29128dab57316f1c086c814c",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/0ce9a8a6a8cda7e1eb7a6006185c3d06b671d6": "446cb0896543e42be12cc267708274d8",
".git/objects/f4/24f87eb298fa88f66e40f1fdb7f0bbe0a8b8cb": "9baa00bfd5a4c2d6fcf5e7619298706e",
".git/objects/f8/6594fe56179dc6aa2c2190a1724c9c8981d19f": "64f2b04609da4a9a14ad53a50f171cdb",
".git/objects/f9/835e4c7293744097cd841cc78fda1fa0b02ded": "882123e537040d6bf12afe572bf2bc01",
".git/refs/heads/master": "792789db28d6c9a7d5065b43cbf3483d",
".git/refs/remotes/HSKL-Portal-DEMO/main": "792789db28d6c9a7d5065b43cbf3483d",
"assets/AssetManifest.json": "5d5d028b15777df26639c3fbcc4e19be",
"assets/assets/images/beebusy.png": "35ee4f019ed06ff9730084ac4f672f4c",
"assets/assets/images/brainwriter.png": "f694f29e03c02d9b72a4e5847c4b72db",
"assets/assets/images/conrad_profil_picutre.jpg": "f7f624b0db68edb2ad874fa945065578",
"assets/assets/images/folder_icon.png": "67c8e0873691c7503bb93f98db4014c3",
"assets/assets/images/jonas_profil_picutre.png": "27d31482e76fe7bf37e8c1f812e1bb60",
"assets/assets/images/kerpen.jpg": "cd3876b0d424e414e2ec9a7ce9de3ec2",
"assets/assets/images/logo.png": "fca0a9ab21450808006c95c1fc5d1629",
"assets/assets/images/sarah-janes-kvLRPcrfeN4-unsplash.jpg": "4409540f0e8bd88c9c956cbba51cb39e",
"assets/assets/images/standard_user_profil_picture.jpg": "e566f3374a24b373c3e2f03a4665a810",
"assets/assets/images/whitebird.png": "7a427bf9e82cacca84a39957e0d7e865",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8087d21f0512cfac775e5d3706a30991",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c8ce60b6a1aeb495004ca94a32922460",
"/": "c8ce60b6a1aeb495004ca94a32922460",
"main.dart.js": "d8bdc656ae383122d7c3d322069c83aa",
"manifest.json": "98dbe442869c42d328900d31a1bd0f8a",
"README.md": "64d42024f1a77ee5e61e4096bdebac78",
"version.json": "c4a579bfb28cabde2a279f64b18f0050"
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
