<template>
<div class="main">
  <DefaultHeader/>
  <Nuxt>

  </Nuxt>
</div>
</template>

<script>
import DefaultHeader from "~/components/DefaultHeader";
export default {
  name: "mainlayout",
  components: {DefaultHeader}
}
</script>

<style scoped>
.main {
  height: 1000px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
