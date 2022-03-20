import { createApp } from 'vue'
import App from './App.vue'
import { store, storeKey } from './store/store';

const app = createApp(App);
app.use(store, storeKey);
app.mount('#app');
