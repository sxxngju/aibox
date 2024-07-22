<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <strong :class="['badge', `${props.classes}`]">
    <slot></slot>
  </strong>
</template>

<style lang="scss">
.badge {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: {
    left: $base-spacer * 2;
    right: $base-spacer * 2;
  }
  height: 36px;
  border-end-end-radius: $base-radius;
  font-size: $font-size-base;
  font-weight: 500;
  color: $white;
  background-color: $color-mint;
  font-family: 'SBAggro';
  padding-top: 3px;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 5px;
    transform-origin: center;
    transform: rotateZ(-45deg);
    width: 1px;
    height: 15px;
    background-color: $white;
  }
}
</style>
