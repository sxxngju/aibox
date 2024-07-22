<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div :class="['btns', `${props.classes}`]">
    <slot />
  </div>
</template>

<style lang="scss">
.btns {
  display: flex;
  align-items: center;
  gap: $base-gutter;
}
</style>
