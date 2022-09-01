import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
// var cors = require('cors')
// const corsOptions ={
//     origin:'http://localhost:8080', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// import store from './store';

createApp(App).use(router).mount('#app')
// .use(store)
