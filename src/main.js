import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import messagePlugin from './utils/message.plugin';

import { initializeApp, firebase } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAhODGEr1Mv28On72sT_U8wTP7PhGfSigY',
  authDomain: 'vue-test-app-97474.firebaseapp.com',
  projectId: 'vue-test-app-97474',
  storageBucket: 'vue-test-app-97474.appspot.com',
  messagingSenderId: '968629847465',
  appId: '1:968629847465:web:e75e5a46b9fd5a47b0b0b8',
  measurementId: 'G-JQCTY7M2QY',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

createApp(App).use(store).use(messagePlugin).use(router).mount('#app');
