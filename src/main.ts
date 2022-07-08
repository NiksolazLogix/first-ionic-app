import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';
import routes from './router';
import {createStore} from 'vuex'
import store from './store';
import Person from './person';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const objRouter = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const { log } = console
const prs = new Person('Monica', 40, 'female')
log('First', prs)
log(prs.toStringName())
log(prs.getGender())
log('Change all')
log(prs.changePerson('Nicola', 40, 'male'))
log(prs)
// setTimeout(() => {
//   log(prs.changeDinamicPerson())
//   log(prs)
// }, 10 * 1000)



const objStore = createStore(store)

const app = createApp(App)
  .use(IonicVue)
  .use(objRouter)
  .use(objStore)
  .use(prs);
  
objRouter.isReady().then(() => {
  app.mount('#app');
});