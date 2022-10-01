# 19 Progressive Web Applications (PWA): Text Editor

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Run locally

Install the packages `npm i`

Navigate to the client and run build `cd client` `npm run build`

Navigate back to the root directory and start the application(dev) `cd ..` `npm run start:dev`

View in the browser at `http://localhost:3000/`

## Test Client

Install the packages `npm i`

Navigate to the client and run build `cd client` `npm run build`

Open the `dist/index.html` in the browser

## Documentation

Add CSS loaders and babel to webpack webpack.config.js

- [Css-loader Webpack Docs](https://webpack.js.org/loaders/css-loader/)
- [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
- [Babel Loader Webpack Docs](https://webpack.js.org/loaders/babel-loader/)

Add and configure workbox plugins manifest file in webpack.config.js

- [Webpack PWA Manifest plugin documentation.](https://www.npmjs.com/package/webpack-pwa-manifest)

Implement asset caching src-sw.js

- [Workbox: Changing the Cache Used by a Strategy](https://developer.chrome.com/docs/workbox/modules/workbox-strategies/#changing-the-cache-used-by-a-strategy)
- [Workbox Cacheing Strategies](https://developer.chrome.com/docs/workbox/modules/workbox-strategies/#using-strategies)

Add and configure workbox plugins for a service worker webpack.config.js

- [Workbox docs on generating a service worker with webpack using GenerateSW](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)
- [Workbox docs on configuring GenerateSW](https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/#type-GenerateSWConfig)
- [Simulate offline behavior with Chrome DevTools](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers#simulate_offline_behavior)
- [Interact with service workers with Chrome DevTools](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers#interact_with_service_workers_in_the_browser)
- [Workbox docs on InjectManifest](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#injectmanifest_plugin)

Handle Button Intallation

- [Blog Make it Installable: PWA's](https://web.dev/codelab-make-installable/)
- [BeforeInstallPromptEvent.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent/prompt)
- [Window: appinstalled event](https://developer.mozilla.org/en-US/docs/Web/API/Window/appinstalled_event)
- [window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
