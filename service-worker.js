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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ad14abfd7a6cd8bb9f10848ce6ce8e0"
  },
  {
    "url": "assets/css/3.styles.daf9872f.css",
    "revision": "3e56ac8124f9c18a5c01f22481a1434e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.0d368f27.js",
    "revision": "43d8e4f4eae9540aefa12c954445636d"
  },
  {
    "url": "assets/js/1.c53494c4.js",
    "revision": "1875a98d1e91bec5e5ea3fd3d07a370c"
  },
  {
    "url": "assets/js/2.4c3aabc2.js",
    "revision": "02f4ca435267afe1b95cc3c174558270"
  },
  {
    "url": "assets/js/app.e107d4a3.js",
    "revision": "501e3c9f952214e446eadf3f3421f37c"
  },
  {
    "url": "contribute/index.html",
    "revision": "55206d5be6026d874cdf8986e63493d7"
  },
  {
    "url": "contribute/one.html",
    "revision": "11fe4fa102d2c6895c5694b9357d1cba"
  },
  {
    "url": "index.html",
    "revision": "4360cb302151122b657e475ff6cce5b3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
