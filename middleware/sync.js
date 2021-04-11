export default ({store, $axios, redirect, $config}) => {
  if (!store.getters.synced && store.getters.authenticated)
    return $axios({
      method: 'get',
      url: `${$config.app_url}/api/app/user`,
      timeout : 10000
    }).then(res => {
      console.log(res.data.user);
      store.dispatch('setUser', res.data.user);
      store.dispatch('setSynced', true);
    }).catch(() => {
      store.dispatch('logout');
      redirect('/login')
    })
}
