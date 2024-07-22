<script setup>
const props = defineProps({
  text: {
    type: String
  },
  level: {
    type: String,
    default: '2'
  }
});
</script>

<template>
  <div class="sub-title">
    <slot />
  </div>
</template>

<style lang="scss">
// @import url('/assets/scss/layout/header.scss');
.sub-title {
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'SBAggro';
  margin-bottom: 30px;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }

  .desc {
    margin-left: 15px;
    margin-right: 10px;
    font-family: $base-font-family;
    font-size: 16px;
    color: $color-text-sub2;
    font-weight: 400;
  }

  & > .icon {
    margin-right: 10px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  .v-select {
    margin-left: auto;
    flex: 0 0 240px;
  }
}
</style>
