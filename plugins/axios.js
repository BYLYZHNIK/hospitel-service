// export default ({store, $axios, redirect}) => {
//   $axios.onRequest(config => {
//     const access_token = store.getters.auth.access_token;
//     const expires = store.getters.auth.expires;
//     const now = Math.floor(Date.now() / 1000);
//     if (!!expires && Number(expires) <= Number(now)) {
//       store.dispatch('logout');
//       return redirect('/login')
//     }
//     !!access_token
//       ? config.headers = {'Authorization': `Bearer ${access_token}`, 'Accept-Language': 'ru'}
//       : config.headers = {'Accept-Language': 'ru'};
//     return config;
//   });
//
//   $axios.onResponse(response => {
//     if (response.status === 403) {
//       store.dispatch('logout');
//       return redirect('/login')
//     }
//     return response;
//   });
// }
// //
