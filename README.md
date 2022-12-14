# browserStartpage

Are you switching browsers often?
Are you tired, that every browser uses it's own speeddial and you can't import that in your new browser?
The solution: host your own speeddial with this repo!
This is especially useful if you need/want to share a of bunch links with friends or colleagues.

## How does it work?

Just place the folder `/htdocs` on your own webserver. Make sure it supports _php_ - this is the only requirement.

### Want a demo?

[https://demo.saschadiercks.de/startpage/](https://demo.saschadiercks.de/startpage/)

Read more about it here (in german): [https://saschadiercks.de/projekte/browserstartpage/](https://saschadiercks.de/projekte/browserstartpage/)

![Screenshot](/.screenshots/startpage-macbook-iphone.jpg)

### Setup your own links

The browserStartpage comes with a default list of links, to show you how it works. It shows up with a list of popular browsers and some development-ressources. You change that. Just head over to `/htdocs/data/data.json` and play with that file. You can edit the tabs and links to your own liking. Just play with it - it's quite self explanatory. All you need to do is to create images for your links and place them on your server too. Usually here `/htdocs/assets/thumbnails`.

You can setup the usage of serviceworkers or define your own wallpaper in the json (on the top of the file).

## New

Add a hash to the url to open tabs via direct call like so: `yourUrl#tab-1`
You can just click on the desired tab and copy the url.

## Features

- call tabs via hash
- easy configurable Speeddial via json
- easily add bookmarks via json
- only requires php on your server
- uses vanillaJS
- uses apllicationCache to minimize traffic (it even works offline, after first visit)
- uses localStorage to store last opened tab

### Planned Features

- allow theming (see Hints & Tips)
- allow onsite-editing so you don't have to fiddle with the json-file
- allow static export of content to sync via Dropbox, iCloud or wathever

## Further insights (want to help building this?)

- `/src/manifests` Docker is used as a local development-environment
- `/src/scss` the development files to build the CSS (via gulp)
- `/src/js` the development JS to compile the JS (via gulp)
- `/src/data` dummy-datafile. Use `/htdocs/data/data.json` for local development
- `/htdocs/startpage.manifest.php` automatic generation of application cache
- `/htdocs/index.php`the speeddial itself
- `/htdocs/assets/css` compiled css-files (uesd live)
- `/htdocs/assets/js` compiled js-files (uesd live)
- `/htdocs/assets/thumbnails` store your link-images here

### Usage of docker (preferred)

1. install docker on your machine (https://docs.docker.com/get-docker/)
2. head to the local repository and run `docker-compose up`
3. Wait a while until all components are loaded an the box is running. (The first start can take a while)
4. visit (http://127.0.0.1:8080/)

### Usage of Vagrant

1. install vagrant on your machine (https://www.vagrantup.com/)
2. install Virtualbox (https://www.virtualbox.org/wiki/Downloads)
3. head to your local repository an enter `vagrant up`
4. Wait a while until all components are loaded an the box is running. (The first start can take a while)
5. visit (http://127.0.0.1:8080/)

### Usage of gulp

1. Make sure, you have node.js installed on your computer (https://nodejs.org/en/)
2. run `npm install gulp-cli -g` to install gulp
3. run `npm install` to install gulp in your project
4. use `gulp build` to compile the css and minify Javascript for production (without sourcemaps) and imagemin
5. use `gulp update` to compile the css and Javascript for development
6. use `gulp serve` start the server for local development (localhost:8080)
7. use `gulp stop` stop the server
8. use `gulp reboot` restart the server and build assets

Always run `gulp build`before deploying assets

### Hints & Tips

- Change the Wallpaper by changing the value of variable `wallpaper` in `/data/data.json` (at the top of the document)
- Do you want every link to be opened in a new tab? Change the value of `linktarget` in /data/data.json to a desired value. e.g. `_blank`
- if you want to change the look of the page, you can find more information in `src/scss/7-utilities/your-theme.scss`
