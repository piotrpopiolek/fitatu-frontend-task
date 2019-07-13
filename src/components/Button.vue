<template>
  <div>
    <b-button size="sm" class="btn">{{ value }}</b-button>
  </div>
</template>
<style lang="scss" scoped>
.btn {
  background-color: #f7f8f9;
  color: black;
}
</style>
<script>
export default {
  props: {
    value: String
  }
};
</script>
