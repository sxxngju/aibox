<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: '탭이름1'
  },
  value: {
    type: String,
    required: true,
    default: 'tab1'
  }
});
</script>

<template>
  <v-tab :text="text" :value="value" />
</template>

<style lang="scss">
.v-tabs {
  .v-btn {
    &.v-tab {
      font-family: 'SBAggro';
      font-size: $font-size-md;
      font-weight: 100;
      color: $color-text-sub2;
      &:not(.v-tab--selected):hover {
        color: $color-primary;
      }
    }
  }
}
</style>
