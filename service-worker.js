/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6e923668d03dfb613e884f45cdef2266"
  },
  {
    "url": "assets/css/0.styles.1eab4a7b.css",
    "revision": "e8ae5260496c0d33b7059bcaee3264d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.157bace8.js",
    "revision": "529a600d1ef716d7fc471c8c821f0fac"
  },
  {
    "url": "assets/js/3.3918a260.js",
    "revision": "8fff4e5913674c04618edac2065f99a8"
  },
  {
    "url": "assets/js/4.00cb3c3f.js",
    "revision": "c9d644599b3785ee941702c91cb66340"
  },
  {
    "url": "assets/js/5.59349796.js",
    "revision": "d6ee6074bb3e34e8aac8409f0323a96e"
  },
  {
    "url": "assets/js/6.d94577c7.js",
    "revision": "6b62845919a1f5deef5eb1d591c453e6"
  },
  {
    "url": "assets/js/7.9bf301ff.js",
    "revision": "2cac042d9103c53813b439a994996b9b"
  },
  {
    "url": "assets/js/8.1a2ea778.js",
    "revision": "e72e6b31d5c495389aa7047f1a71c952"
  },
  {
    "url": "assets/js/9.0164cc35.js",
    "revision": "526468ce8062c14500b0852ffdb7d50d"
  },
  {
    "url": "assets/js/app.37528124.js",
    "revision": "742f87d679c84149467977d2efa55ac9"
  },
  {
    "url": "docs/index.html",
    "revision": "0c4c0c551d1e603fbc9896e065d136f7"
  },
  {
    "url": "examples/index.html",
    "revision": "4cf64569a2a895454dbd19caf0659f54"
  },
  {
    "url": "img/docs/approvals.png",
    "revision": "70cd79690c0bd156fd60fa6bc9fb227f"
  },
  {
    "url": "img/docs/mattermost-configuration.png",
    "revision": "ec3da758e1a390286b8c36a7d6ff32f1"
  },
  {
    "url": "img/docs/mattermost-icon-username.png",
    "revision": "85f5056f2898683a92eef57082d88aa3"
  },
  {
    "url": "img/docs/mattermost-notification.png",
    "revision": "0458f73822003cdd94b0efc0e3d525f9"
  },
  {
    "url": "img/docs/mattermost-webhooks.png",
    "revision": "6180f9b2345fe44f923e8d659c52ecdb"
  },
  {
    "url": "img/docs/notify-per-chart.png",
    "revision": "e8af30a1e09377c8ce0d17be5b57790d"
  },
  {
    "url": "img/docs/notify-per-deployment.png",
    "revision": "4fdf361f0d467c261d28787a0dd8f133"
  },
  {
    "url": "img/docs/slack-bot-name.png",
    "revision": "8bf28966565f4666dc21a5089e8da27b"
  },
  {
    "url": "img/docs/slack-bots.png",
    "revision": "55dcbba729e64ab7b74d8f8133b59bf7"
  },
  {
    "url": "img/docs/slack-notifications.png",
    "revision": "0e6fed4688df892b2d90a13545ede92d"
  },
  {
    "url": "img/examples/configure-autobuild.png",
    "revision": "6d0f96928ac08b622837e60498d45f4f"
  },
  {
    "url": "img/examples/docker-build-config.png",
    "revision": "76c6a38212db92e629a9d7717dd3ab79"
  },
  {
    "url": "img/examples/dockerhub-webhook.png",
    "revision": "5ec464d082c645b588d3bafd9a88edaf"
  },
  {
    "url": "img/examples/force-workflow.png",
    "revision": "1b53975fda037888af129a2ba8982221"
  },
  {
    "url": "img/examples/keel-quick-start.png",
    "revision": "aae9e2997e396e15248eaa69a23a7541"
  },
  {
    "url": "img/examples/whr-dockerhub-relayed.png",
    "revision": "98c939f78d5a3efcde27f6f62a8856fe"
  },
  {
    "url": "img/keel_high_level.png",
    "revision": "d8533a1ee65feb5668ac9bdaa4864ddd"
  },
  {
    "url": "img/keel_ui.png",
    "revision": "71a9783344090102dc408a78ff55bae6"
  },
  {
    "url": "img/logo_small.png",
    "revision": "f9f595a928d090e168d35707d1a8f8fc"
  },
  {
    "url": "img/logo.png",
    "revision": "fcc544ab74c3128a2cb92582f291ea15"
  },
  {
    "url": "index.html",
    "revision": "5595962e30e8792beddfd39c4dbb3458"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
