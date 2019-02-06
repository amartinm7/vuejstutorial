# vuejs tutorial

In this repository:
- [basic flexbox tutorial](./flexbox/README.md)
- [markdown notepad example using Vue](./markdownNotepad/README.md)



## install feathersjs
https://feathersjs.com

Create your first real-time app in minutes

```bash
npm install -g @feathersjs/cli
mkdir my-app
cd my-app
feathers generate app
npm start
```

## visit caniuse to see the compatibility
www.caniuse.com

## babel
compile es6 or es7 to es5 to get compatibility with all browsers

## @vue/cli
install vue cli 3

## using vscode
Launching from the command line

You can also run VS Code from the terminal by typing 'code' after adding it to the path:

    Launch VS Code.
    Open the Command Palette (⇧⌘P) and type 'shell command' to find the Shell Command: Install 'code' command in PATH command.
    Create a new vue project running vue create vuetutorial
    cd vuetutorial
    code . 
    with the last line the vscode open the whole project! which is amazing


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
