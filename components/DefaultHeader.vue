<template>
  <div class="bg-dark text-white">
    <b-nav small class="justify-content-around">
      <b-nav-item active to="/dashboard">Панель Администратра</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item class="ml-5 pl-5">Выход</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "DefaultHeader"
}
</script>
<style scoped>
b-nav {

}
</style>
