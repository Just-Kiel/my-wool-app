// TODO file to delete
// import { createStore } from "vuex";

// const axios = require('axios');

// const instance = axios.create({
//   // baseURL: 'https://www.wawasensei.dev/api/demo-auth/'
//   baseURL: 'http://api-wool.just-kiel.fr/router/'
// });

// let user = localStorage.getItem('user');
// if (!user) {
//  user = {
//     userId: -1,
//     token: '',
//   }; 
// } else {
//   try {
//     console.log("coucou");
//     user = JSON.parse(user);
//     instance.defaults.headers.common['Authorization'] = user.token;
//   } catch (ex) {
//     user = {
//       userId: -1,
//       token: '',
//     };
//   }
// }

// const store = createStore({
//   state: {
//     status: '',
//     userInfos: {
//       userID: '',
//       pseudo: '',
//       email: '',
//     },
//   },
//   mutations: {

//   }
// })

// const store = createStore({
//     state: {
//       status: '',
//       user: user,
//       userInfos: {
//         pseudo: '',
//         email: '',
//         photo: '',
//       },
//     },
//     mutations: {
//       setStatus: function (state, status) {
//         state.status = status;
//       },
//       logUser: function (state, user) {
//         // instance.defaults.headers.common['Authorization'] = user.token;
//         localStorage.setItem('user', JSON.stringify(user));
//         state.user = user;
//       },
//       userInfos: function (state, userInfos) {
//         state.userInfos = userInfos;
//       },
//       logout: function (state) {
//         state.user = {
//           userId: -1,
//           token: '',
//         }
//         localStorage.removeItem('user');
//       }
//     },
//     actions: {
//       login: ({commit}, userInfos) => {
//         commit('setStatus', 'loading');
//         return new Promise((resolve, reject) => {
//           instance.post('/login', userInfos)
//           .then(function (response) {
//             commit('setStatus', '');
//             commit('logUser', response.data);
//             resolve(response);
//           })
//           .catch(function (error) {
//             commit('setStatus', 'error_login');
//             reject(error);
//           });
//         });
//       },
//       createAccount: ({commit}, userInfos) => {
        
//         commit('setStatus', 'loading');
//         return new Promise((resolve, reject) => {
//           commit;
//           console.log(userInfos);
//           // instance.post('/createAccount', userInfos)
//           instance.post('/adduser', userInfos)
//           .then(function (response) {
//             commit('setStatus', 'created');
//             resolve(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//             commit('setStatus', 'error_create');
//             reject(error);
//           });
//         });
//       },
//       getUserInfos: ({commit}) => {
//         instance.post('/infos')
//         .then(function (response) {
//           commit('userInfos', response.data.infos);
//         })
//         .catch(function () {
//         });
//       }
//     }
//   })

// export default store;