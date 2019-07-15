<template>
  <div>
    <div class="mobileMenu">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileMenu"
};
</script>

<style lang="scss" scoped>
.mobileMenu {
  background-color: red;
  height: 100%;
  width: 150px;
  position: absolute;
}
</style>