import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';

import "./main.scss";
// var cors = require('cors')
// const corsOptions ={
//     origin:'http://localhost:8080', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// import store from './store';

createApp(App).use(router).use(Inkline, { components }).mount('#app')
// .use(store)
