import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import messagePlugin from './utils/message.plugin';

createApp(App).use(store).use(messagePlugin).use(router).mount('#app');
