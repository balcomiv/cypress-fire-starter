<p align="center">

<a href="https://slackin-pbfjhfxnsa.now.sh"><img src="https://slackin-pbfjhfxnsa.now.sh/badge.svg"></a>

<a href="https://circleci.com/gh/codediodeio/angular-firestarter"><img src="https://circleci.com/gh/codediodeio/angular-firestarter.svg?style=svg"></a>

</p>

# FireStarter

Firestarter is an Angular PWA powered by Firebase.

- [Live Demo](https://firestarter.fireship.io/)
- [Lessons and Screencasts](https://fireship.io)
- [Join the Slack Team](https://fireship.page.link/slack)

![](https://firebasestorage.googleapis.com/v0/b/angular-voxer.appspot.com/o/demo-gif.gif?alt=media&token=dadcdb72-eb58-4903-b6b8-c741c27a08c4)

## Features

- Angular 8.x + Firebase
- Installable PWA
- OAuth and Email/Password Signup with Firebase
- Drag & drop Kanban demo with Firestore
- Angular Universal SSR with Nest.js deployed to Google Cloud Run
- Optional SSR Prerendering Script

## Usage

1.  Run

- `git clone https://github.com/codediodeio/angular-firestarter.git firestarter`
- `cd firestarter`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/project-config.PNG?alt=media&token=5eabb205-7ba2-4fc3-905f-e9547055e754)

3.  Add the config to your Angular environment

#### src/environments/

Update the `environment.prod.ts` and `environment.ts` files.

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "APIKEY",
    authDomain: "DEV-APP.firebaseapp.com",
    databaseURL: "https://DEV-APP.firebaseio.com",
    projectId: "DEV-APP",
    storageBucket: "DEV-APP.appspot.com",
    messagingSenderId: "...",
    appId: "..."
  }
};
```

5.  Run `ng serve`

## Cypress Video && Info

- https://www.youtube.com/watch?v=7N63cMKosIE

### Video Demo App Starter

- https://firestarter-96e46.firebaseapp.com/
- https://github.com/codediodeio/angular-firestarter.git (clone)

## More Firebase Links

- https://angularfirebase.com/
- https://github.com/AngularFirebase

## Links for testing Cypress using pluralsight video

- https://app.pluralsight.com/player?course=codemash-session-01&author=codemash-conference&name=15446364-f2cf-4e36-ba79-827bb40f32b7&clip=0&mode=live&start=985&noteid=88703ea9-9967-4543-bc11-9ce1084e1a2c

- https://sitepoint-editors.github.io/todo-app/ (git hub pages site to test)

- https://www.sitepoint.com/angular-2-tutorial/ (shows how to deploy to github)

- https://github.com/sitepoint-editors/angular-todo-app/tree/part-1

- https://ultimatecourses.com/blog/stateful-stateless-components (stateless missing manual)
