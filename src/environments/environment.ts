// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.




export const environment = {
  production: false,
  firebase:{

    apiKey: 'xxx',
    authDomain: 'cruddemo-d013c.firebaseapp.com',
    databaseURL: 'https://cruddemo-d013c.firebaseio.com',
    projectId: 'cruddemo-d013c',
    storageBucket: '',
    messagingSenderId: 'xxx'
  }
};

// <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCq7njBUAW3Xs7aDeaTOMa39WXLJTupy4Y",
//     authDomain: "cruddemo-d013c.firebaseapp.com",
//     databaseURL: "https://cruddemo-d013c.firebaseio.com",
//     projectId: "cruddemo-d013c",
//     storageBucket: "cruddemo-d013c.appspot.com",
//     messagingSenderId: "526363118394"
//   };
//   firebase.initializeApp(config);
// </script>