<template>
  <div class="app">
    <Header />
    <div class="pages-container">
      <MobileMenu v-if="mobile" />
      <div v-else>
        <Menu />
      </div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@components/Header";
import Footer from "@components/Footer";
import Menu from "@components/Menu";
import MobileMenu from "@components/MobileMenu";
import { isMobile } from "mobile-device-detect";

export default {
  components: {
    Header,
    Footer,
    Menu,
    MobileMenu
  },
  data() {
    return {
      mobile: isMobile
    };
  }
};
</script>
<style lang="scss" scoped>
.app {
  position: relative;
  height: 100%;
}
.pages-container {
  max-width: 1080px;
  margin: 0 auto;
}
</style>