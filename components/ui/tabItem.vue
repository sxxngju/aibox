<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
    default: 'tab1'
  }
});
</script>

<template>
  <v-tabs-window-item :value="value" transition="false" reverse-transition="false">
    <slot />
  </v-tabs-window-item>
</template>

<style lang="scss"></style>
