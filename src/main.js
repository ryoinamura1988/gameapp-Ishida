
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import router from './router.js';


Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQIzccqwhpPtgd4AswJINVHnc4ETBpv98",
  authDomain: "gameapp-alive.firebaseapp.com",
  databaseURL: "https://gameapp-alive.firebaseio.com",
  projectId: "gameapp-alive",
  storageBucket: "gameapp-alive.appspot.com",
  messagingSenderId: "184451273275",
  appId: "1:184451273275:web:6cfb9405a329879fdac21e",
  measurementId: "G-Q8WHJF1QRV"
}
firebase.initializeApp(config)


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDQIzccqwhpPtgd4AswJINVHnc4ETBpv98",
//     authDomain: "gameapp-alive.firebaseapp.com",
//     databaseURL: "https://gameapp-alive.firebaseio.com",
//     projectId: "gameapp-alive",
//     storageBucket: "gameapp-alive.appspot.com",
//     messagingSenderId: "184451273275",
//     appId: "1:184451273275:web:6cfb9405a329879fdac21e",
//     measurementId: "G-Q8WHJF1QRV"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>



import ons from 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App';

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
});
