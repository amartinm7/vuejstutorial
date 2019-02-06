# Markdown Notepad
Simple app to render markdown text to html


## to develop
```bash
install @vue/cli
npm install
npm run serve
```

### starting a localserver
```bash
python -m SimpleHTTPServer 8000
```

## to keep in mind: animations with css and js
- [animate.css](https://daneden.github.io/animate.css/)
- [velocityjs.js](http://velocityjs.org)


## Some useful Tips

## Closing ports
Closing ports, useful when the service is running and you want to kill it.
```
sudo lsof -i :8080
sudo kill -9 PID
```

## Using an local httpServer to develop static content
Install and run the local server to see the changes refreshed in the browser automatically.
```bash
npm install -g live-server
live-server
```
More info https://www.npmjs.com/package/live-server


#
