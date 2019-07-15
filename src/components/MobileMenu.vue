<template>
  <div>
    <div :class="[isActive ? 'active sidebar' : 'sidebar']">
      <div class="toggle-btn" @click="isActive = !isActive">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileMenu",
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #f7f8f9;
  height: 100%;
  width: 150px;
  position: absolute;
  font-size: 16px;
  left: -150px;
}

.active {
  left: 0px;
}

ul li {
  list-style: none;
  padding: 10px 0;
}

.toggle-btn {
  position: absolute;
  left: 165px;
  top: 5px;
}
.toggle-btn span {
  width: 20px;
  height: 4px;
  background-color: #999d9d;
  display: block;
  margin-top: 4px;
}
</style>