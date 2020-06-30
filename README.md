# Angular Quiz

This is a fun little quiz to take your mind off of reality and indulge in your inner little devil.
## Installation


```bash
npm install
```

## Run Locally
```bash
ng serve
``` 
Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.



## Build
Running ```ng build``` The build artifacts will be stored in the dist/ directory. Use the ```--prod``` flag for a production build.

## Deploy on GH-Pages
The code needs to be built in production mode to create distributable files that will be deployed on GitHub Pages. 

By default, this deployable code is generated in the /dist/ folder. However, you will need to generate this in the “docs” folder under the app folder.

In the ```angular.json``` file and change the ```outputpath``` value to “docs/”.

```bash
ng build --prod --baseHref=' https://username.github.io/respository-name/' 
``` 
**Replace the URL with your info**

Commit this folder into the local repo and push it to GitHub with
```bash
git add .
git commit -m "generated deployable"
git push -u origin master
```
