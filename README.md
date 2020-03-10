# Angular Electron Starter

Angular electron starter kit with minimum changes

## How to use

```sh
git clone https://github.com/svtslv/angular-electron-starter
```

```sh
cd angular-electron-starter
```

```sh
npm install
```

```sh
npm run electron:start
```

## Manually

### Create new angular app

```sh
ng new my-new-project
```

```sh
cd my-new-project
```

### Add scripts to package.json

```
  "postinstall": "electron-builder install-app-deps",
  "electron:tsc": "tsc electron-main.ts",
  "electron:run": "electron ./electron-main.js",
  "electron:build": "npm run electron:tsc && ng build --output-path=dist --base-href='' --optimization=true",
  "electron:start": "concurrently 'ng serve' 'wait-on http-get://localhost:4200 && npm run electron:tsc && npm run electron:run -- --serve'",
  "electron:builder": "electron-builder --config ./electron-builder.json",
  "electron:local": "npm run electron:build -- --prod && npm run electron:run",
  "electron:linux": "npm run electron:build -- --prod && npm run electron:builder build -- --linux",
  "electron:windows": "npm run electron:build -- --prod && npm run electron:builder build -- --windows",
  "electron:mac": "npm run electron:build -- --prod && npm run electron:builder build -- --mac"
```

### Update angular.json

```
  projects.projectName.architect.build.builder: "@angular-builders/custom-webpack:browser"
  projects.projectName.architect.build.options.customWebpackConfig: { "path": "./electron-webpack.js" }
  projects.projectName.architect.serve.builder: "@angular-builders/custom-webpack:dev-server"
  projects.projectName.architect.serve.test: "@angular-builders/custom-webpack:karma"
```

### Install dependencies

```sh
npm install --save-dev electron electron-builder @angular-builders/custom-webpack wait-on concurrently
```

### Copy files

```
electron-main.ts
electron-webpack.js
electron-builder.json
```

### Add icons to /src

```
favicon.ico 
favicon.icns 
favicon.png 
favicon.256x256.png 
favicon.512x512.png
```

### Update .gitignore

```
/release
```

### Enjoy!

Star it and Enjoy :)

## License

MIT
