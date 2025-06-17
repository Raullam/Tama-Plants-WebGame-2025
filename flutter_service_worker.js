'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "24f7cf8ffee4ef402b0f6ac6aaecaf8c",
"assets/AssetManifest.bin.json": "224b70a047a4801456b1ca788fac7c0e",
"assets/AssetManifest.json": "33093370f27d6b4eb7a467fef5698d2a",
"assets/assets/atacs/b.gif": "64d624abcdeafc9a873a31ff8456fe39",
"assets/assets/atacs/estrelles.gif": "e56a323f548f6b622eb095b48e86d5dd",
"assets/assets/atacs/foc.gif": "57a2b4bbbe8474de6e7ab3aba63ff856",
"assets/assets/atacs/source.gif": "c3334c7691b738ab09dc2c94e6d26cb7",
"assets/assets/atacs/tro.gif": "cda28826300559e2d2afa7473097bb9a",
"assets/assets/audio/win.mp3": "bb5f2a7623f3e607520488e48895df64",
"assets/assets/cesped.png": "476655bdf3ff6b06d67485f979c65c30",
"assets/assets/cofres/cofre.png": "2e05e427cf538ec687dc8c8a0c5b73d6",
"assets/assets/cofres/cofre12.png": "69b5eb06722b520aa7221a109baf5596",
"assets/assets/cofres/cofre4.png": "2e05e427cf538ec687dc8c8a0c5b73d6",
"assets/assets/cofres/cofre8.png": "21ef735c7537efb788f1a45787f3348a",
"assets/assets/default_avatar.png": "d2c893f55930c7cb5bfe41538be295d7",
"assets/assets/diagramUML._MAL.puml": "0cc99b296c682808a3a38f498da21bb6",
"assets/assets/fondoBatalla.jpg": "544a701ea4bfcbdf5ad492fd88e494a9",
"assets/assets/fonts/RiverAdventurer.ttf": "165d3be4bf62492eeb9949d5adf159d1",
"assets/assets/foto%2520raul.jpg": "8fbdeced4b5077ba186293428c2cf56b",
"assets/assets/galeriaPlantes/1.png": "4cb0b629127b7cec92a5f14a6408d2d6",
"assets/assets/galeriaPlantes/10.png": "dd8c7ad1d26de13f29da527c7e726ba4",
"assets/assets/galeriaPlantes/11.png": "51b0735ebfa354ad2301d8c8953b6bc7",
"assets/assets/galeriaPlantes/12.png": "4877e6d896f55d1618dc0f2eca517fab",
"assets/assets/galeriaPlantes/13.png": "bd71fc45bbf111cf5638f61c4cd75b90",
"assets/assets/galeriaPlantes/14.png": "465fecef53b57ad80417c599ae821949",
"assets/assets/galeriaPlantes/15.png": "ae8f9b950a4dfd32266a044752ffe36f",
"assets/assets/galeriaPlantes/16.png": "3086c5a1a816deff17a03b9f0aeb8c9a",
"assets/assets/galeriaPlantes/17.png": "249650d5ab24c1f634532a5fb1357b2e",
"assets/assets/galeriaPlantes/18.png": "0dd538269680151a6df9302bc7085041",
"assets/assets/galeriaPlantes/19.png": "44d0b6a09626334957375aac726dc362",
"assets/assets/galeriaPlantes/2.png": "9143ac3a4d90da882f657fdeceb82c55",
"assets/assets/galeriaPlantes/20.png": "ea816858969cc8ebaa4d2a631104b9d2",
"assets/assets/galeriaPlantes/21.png": "9b1b96a949a65b37895d6f561f409b19",
"assets/assets/galeriaPlantes/22.png": "d8c98fe9e5b1ac30c70043203bb1db1d",
"assets/assets/galeriaPlantes/23.png": "d336f9553f9e358302d069edb4535a26",
"assets/assets/galeriaPlantes/24.png": "606a30c4c593ab8b9b6959387e6c9824",
"assets/assets/galeriaPlantes/25.png": "51636f01434e11d4ae64ddf317f25c4d",
"assets/assets/galeriaPlantes/26.png": "af7cfa19fe0f2f3fc45c060476402033",
"assets/assets/galeriaPlantes/27.png": "80c4b6f27041a776f70d266ea1ebad56",
"assets/assets/galeriaPlantes/28.png": "b120e00c9d08a8cb1ab5ddfbf232a97c",
"assets/assets/galeriaPlantes/29.png": "dcedc8ea59a12627c686f24f9cb20a67",
"assets/assets/galeriaPlantes/3.png": "de37e7d1efe77d9cf51b575a6adb4e3e",
"assets/assets/galeriaPlantes/30.png": "6193fc27a5ad2931255032c1ff758f25",
"assets/assets/galeriaPlantes/31.png": "893d94ad12344c54544e78723b1487e9",
"assets/assets/galeriaPlantes/32.png": "ef712ead96331137be3ae68e9d0182f9",
"assets/assets/galeriaPlantes/33.png": "473d1bf4ea951814ab170084c775ef18",
"assets/assets/galeriaPlantes/34.png": "e889e7e181aced421faf2b1ccdc02461",
"assets/assets/galeriaPlantes/35.png": "6d99cdc69d8c67284843f731c35adadb",
"assets/assets/galeriaPlantes/36.png": "69f6c10faa65099458a57bca3a719430",
"assets/assets/galeriaPlantes/37.png": "cb6e53d199caab46e5da6dce8ad00a67",
"assets/assets/galeriaPlantes/38.png": "595cc400d4291992ef2b97e6218196bc",
"assets/assets/galeriaPlantes/39.png": "02436ec12acf5fd7438b6526711850ac",
"assets/assets/galeriaPlantes/4.png": "7802d170fb241aa339f181f189edbeaf",
"assets/assets/galeriaPlantes/40.png": "9738466b580c5802453ca180603404c1",
"assets/assets/galeriaPlantes/41.png": "c420c011728051d128b91fee4370d968",
"assets/assets/galeriaPlantes/42.png": "2677f5ee4a32d731190699f497de7990",
"assets/assets/galeriaPlantes/43.png": "8fca9a61e9eb9ab83a82cfec09eb2d61",
"assets/assets/galeriaPlantes/44.png": "3089b35d69b16039a4ed62de35e4aba8",
"assets/assets/galeriaPlantes/45.png": "e3efd487322d63af568a2bff116e240a",
"assets/assets/galeriaPlantes/46.png": "8ccebc345c6cbe7510652ee0b0da0b90",
"assets/assets/galeriaPlantes/47.png": "d6e631db924004d4d4f95ebc94e3b932",
"assets/assets/galeriaPlantes/48.png": "7fd5ca77011404ccf7f27f5d56784213",
"assets/assets/galeriaPlantes/49.png": "ec81af91c56b71beff5b4d676a9f12cd",
"assets/assets/galeriaPlantes/5.png": "f196e4b2de170785f7bcafe7668d1bf8",
"assets/assets/galeriaPlantes/6.png": "3c77c6d58735e543f0e28a2507796966",
"assets/assets/galeriaPlantes/7.png": "ae442786a08c1f8a8a5e41774e299f88",
"assets/assets/galeriaPlantes/8.png": "c93ab4117834f80a33bb6af717fa29a8",
"assets/assets/galeriaPlantes/9.png": "384a52a1d002cda97403a7a765c146e2",
"assets/assets/galeriaPlantes/agua/1.png": "d9a613d494b67f9389bfff98803d4021",
"assets/assets/galeriaPlantes/agua/2.png": "b24c5c1747d3510ababf38fc318db354",
"assets/assets/galeriaPlantes/agua/3.png": "369448697fd9694d89c40aa2b79cb994",
"assets/assets/galeriaPlantes/agua/4.png": "2eaa9361e913d93996f3675e935bda5a",
"assets/assets/galeriaPlantes/agua/5.png": "17ee3c19f43585f869c79f903d5532f0",
"assets/assets/galeriaPlantes/agua/6.png": "77696ff923631c409ff98a1a7e05d150",
"assets/assets/galeriaPlantes/agua/7.png": "db72fc989a9abca3722331647bad1940",
"assets/assets/galeriaPlantes/agua/8.png": "37aeb30198d0c9535a7538ca8e31164f",
"assets/assets/galeriaPlantes/aire/1.png": "d8c98fe9e5b1ac30c70043203bb1db1d",
"assets/assets/galeriaPlantes/aire/2.png": "d336f9553f9e358302d069edb4535a26",
"assets/assets/galeriaPlantes/aire/3.png": "606a30c4c593ab8b9b6959387e6c9824",
"assets/assets/galeriaPlantes/aire/4.png": "51636f01434e11d4ae64ddf317f25c4d",
"assets/assets/galeriaPlantes/electrico/1.png": "80c4b6f27041a776f70d266ea1ebad56",
"assets/assets/galeriaPlantes/electrico/2.png": "5c6fe42be0f1ffbf145eb80ddb854a2f",
"assets/assets/galeriaPlantes/electrico/3.png": "29b7bf3038f1230840b05e9032caeca5",
"assets/assets/galeriaPlantes/electrico/4.png": "23c3a983ad0302e7ae328cea2f124bf3",
"assets/assets/galeriaPlantes/electrico/5.png": "2821560948a03260c5b0f26fba453f4e",
"assets/assets/galeriaPlantes/electrico/6.png": "2574eb8a1f98179508e658ee5820f83f",
"assets/assets/galeriaPlantes/electrico/7.png": "d044a61391afef622aa0d7fdce5efc45",
"assets/assets/galeriaPlantes/electrico/8.png": "59b039714bc9620afa69aa0e9d3aac54",
"assets/assets/galeriaPlantes/electrico/9.png": "ff4c7b92052eb86b7d852dbcddcc4b4c",
"assets/assets/galeriaPlantes/foc/1.png": "dcedc8ea59a12627c686f24f9cb20a67",
"assets/assets/galeriaPlantes/foc/10.png": "595cc400d4291992ef2b97e6218196bc",
"assets/assets/galeriaPlantes/foc/11.png": "02436ec12acf5fd7438b6526711850ac",
"assets/assets/galeriaPlantes/foc/12.png": "9738466b580c5802453ca180603404c1",
"assets/assets/galeriaPlantes/foc/13.png": "c420c011728051d128b91fee4370d968",
"assets/assets/galeriaPlantes/foc/14.png": "2677f5ee4a32d731190699f497de7990",
"assets/assets/galeriaPlantes/foc/15.png": "8fca9a61e9eb9ab83a82cfec09eb2d61",
"assets/assets/galeriaPlantes/foc/16.png": "3089b35d69b16039a4ed62de35e4aba8",
"assets/assets/galeriaPlantes/foc/17.png": "e3efd487322d63af568a2bff116e240a",
"assets/assets/galeriaPlantes/foc/18.png": "8ccebc345c6cbe7510652ee0b0da0b90",
"assets/assets/galeriaPlantes/foc/19.png": "d6e631db924004d4d4f95ebc94e3b932",
"assets/assets/galeriaPlantes/foc/2.png": "6193fc27a5ad2931255032c1ff758f25",
"assets/assets/galeriaPlantes/foc/20.png": "7fd5ca77011404ccf7f27f5d56784213",
"assets/assets/galeriaPlantes/foc/21.png": "ec81af91c56b71beff5b4d676a9f12cd",
"assets/assets/galeriaPlantes/foc/3.png": "893d94ad12344c54544e78723b1487e9",
"assets/assets/galeriaPlantes/foc/4.png": "ef712ead96331137be3ae68e9d0182f9",
"assets/assets/galeriaPlantes/foc/5.png": "473d1bf4ea951814ab170084c775ef18",
"assets/assets/galeriaPlantes/foc/6.png": "e889e7e181aced421faf2b1ccdc02461",
"assets/assets/galeriaPlantes/foc/7.png": "6d99cdc69d8c67284843f731c35adadb",
"assets/assets/galeriaPlantes/foc/8.png": "69f6c10faa65099458a57bca3a719430",
"assets/assets/galeriaPlantes/foc/9.png": "cb6e53d199caab46e5da6dce8ad00a67",
"assets/assets/galeriaPlantes/pantano/1.png": "4cb0b629127b7cec92a5f14a6408d2d6",
"assets/assets/galeriaPlantes/pantano/2.png": "51b0735ebfa354ad2301d8c8953b6bc7",
"assets/assets/galeriaPlantes/pantano/3.png": "4877e6d896f55d1618dc0f2eca517fab",
"assets/assets/galeriaPlantes/pantano/4.png": "a37b5bf2b2784038eb2f3a0ee7d6a473",
"assets/assets/galeriaPlantes/planta/1.png": "9143ac3a4d90da882f657fdeceb82c55",
"assets/assets/galeriaPlantes/planta/10.png": "af7cfa19fe0f2f3fc45c060476402033",
"assets/assets/galeriaPlantes/planta/11.png": "b120e00c9d08a8cb1ab5ddfbf232a97c",
"assets/assets/galeriaPlantes/planta/12.png": "847e19c86fb66f5e2efa0eb3c17c8ed0",
"assets/assets/galeriaPlantes/planta/2.png": "c93ab4117834f80a33bb6af717fa29a8",
"assets/assets/galeriaPlantes/planta/3.png": "384a52a1d002cda97403a7a765c146e2",
"assets/assets/galeriaPlantes/planta/4.png": "dd8c7ad1d26de13f29da527c7e726ba4",
"assets/assets/galeriaPlantes/planta/5.png": "bd71fc45bbf111cf5638f61c4cd75b90",
"assets/assets/galeriaPlantes/planta/6.png": "465fecef53b57ad80417c599ae821949",
"assets/assets/galeriaPlantes/planta/7.png": "3086c5a1a816deff17a03b9f0aeb8c9a",
"assets/assets/galeriaPlantes/planta/8.png": "44d0b6a09626334957375aac726dc362",
"assets/assets/galeriaPlantes/planta/9.png": "9b1b96a949a65b37895d6f561f409b19",
"assets/assets/galeriaPlantes/tierra/1.png": "1e465726e3d11eb3bb68a19bbdf66b07",
"assets/assets/galeriaPlantes/tierra/2.png": "c228a65cdac8f2b8f29b6463e88395d9",
"assets/assets/galeriaPlantes/tierra/3.png": "900263aa1548fb5734d91760f710cd67",
"assets/assets/galeriaPlantes/tierra/4.png": "d57716b4a2e34bfe9b4729f557b92065",
"assets/assets/galeriaPlantes/tierra/5.png": "253537496252bffb600415f3cf0c88cd",
"assets/assets/google_icon.png": "798d75b1740647a1cb38f80262186f89",
"assets/assets/gor.jpg": "a332bb59e9885fb89cb7d0b325e67f95",
"assets/assets/gor2.jpg": "39c35bce0b7977ff4848e80441df2a20",
"assets/assets/gym1.png": "b5ab064945f32a1379199d69a4d53cf2",
"assets/assets/iconos/agua%25201,5l.png": "2638e8c0e2818323120e13773fb578dc",
"assets/assets/iconos/agua%252010l.png": "25f573e1b329fe15ee9aade1d5f78e3b",
"assets/assets/iconos/agua%25205l.png": "e7db5686ecb8c2198678528881d45d74",
"assets/assets/iconos/bebida-energetica.png": "2638e8c0e2818323120e13773fb578dc",
"assets/assets/iconos/bebida-energetica2.png": "e7db5686ecb8c2198678528881d45d74",
"assets/assets/iconos/bebida-energetica3.png": "25f573e1b329fe15ee9aade1d5f78e3b",
"assets/assets/iconos/blindaje.png": "f1dd1545d8a01baca803f504c85645bb",
"assets/assets/iconos/cartas.png": "a3cdae8120c11d398a8bfad560ae5bfb",
"assets/assets/iconos/cesped.png": "476655bdf3ff6b06d67485f979c65c30",
"assets/assets/iconos/compra.png": "c285d2c32c7f8de2e92f0bfa874b8891",
"assets/assets/iconos/dragon%2520fruit.png": "ba749519f66cbdf44aa24eeb0edc33a0",
"assets/assets/iconos/dragon-fruit.png": "ba749519f66cbdf44aa24eeb0edc33a0",
"assets/assets/iconos/escudo.png": "f8517e294c3a0e1e720494e1acede576",
"assets/assets/iconos/espadas.png": "b8b64985e7c8647bb320ea7b9af4973f",
"assets/assets/iconos/ficha-de-poker.png": "a587c3ad07770515dc190105046edd5b",
"assets/assets/iconos/lottery.png": "a4b873323418dc4ad4ce520252707c3b",
"assets/assets/iconos/lotteryy.png": "1423c4320ec099cc798b6417178e113b",
"assets/assets/iconos/mora.png": "6076a37461c7df9eb10c7687d630ae86",
"assets/assets/iconos/peligro.png": "a89222e5b3343f121df3c6f104c8b09f",
"assets/assets/iconos/semilla.png": "aa586bb8d2931ad07cdbbc4c919b0ef2",
"assets/assets/iconos/tragaperras.gif": "473eff9915f041f961987407873a4fe0",
"assets/assets/iconos/uvas.png": "7672bd5c585f8e088a59566f46e7c6ba",
"assets/assets/images/enemy.png": "ae442786a08c1f8a8a5e41774e299f88",
"assets/assets/images/player.png": "51b0735ebfa354ad2301d8c8953b6bc7",
"assets/assets/letreroMaderaa.webp": "dafe057ca48922d70a04f27998a022d4",
"assets/assets/loading.gif": "5fe4039b11fa6d042519dd1d049901c9",
"assets/assets/logo_tamaplant.webp": "437eadfb8839d45c15feadaf525cae4a",
"assets/assets/matchmakings.jpg": "7e911beb09ef8211709fac50f5b1053a",
"assets/assets/planta1.png": "7802d170fb241aa339f181f189edbeaf",
"assets/assets/planta2.png": "f196e4b2de170785f7bcafe7668d1bf8",
"assets/assets/planta3.png": "3c77c6d58735e543f0e28a2507796966",
"assets/assets/planta4.png": "9143ac3a4d90da882f657fdeceb82c55",
"assets/FontManifest.json": "191d0fab6db7b22fd6391c91a7b39355",
"assets/fonts/MaterialIcons-Regular.otf": "09d1ae816c4949137378881126aced6e",
"assets/NOTICES": "4ce9101e6ec1552c7748fd2ecfcf0eb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bca413367ef94e1d8d402e21ac1da35c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "7152cadda428aa94611c05660559aea7",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4924b930a90a4c15cfe68673e749b2e5",
"icons/Icon-192.png": "70b02deafd9c38cced859c1130a9a453",
"icons/Icon-512.png": "7201947e73315de9400d4186a4d3be5b",
"icons/Icon-maskable-192.png": "70b02deafd9c38cced859c1130a9a453",
"icons/Icon-maskable-512.png": "7201947e73315de9400d4186a4d3be5b",
"index.html": "8d680db3c80bff85a8bf6dc982f5f77b",
"/": "8d680db3c80bff85a8bf6dc982f5f77b",
"main.dart.js": "fab943c631e32b14bcb3979c3ff2ef68",
"manifest.json": "9a5c79649af6ffb02cb6ed26aecbaed8",
"version.json": "822941e8a07d0f95928cf43f4db8e9ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
