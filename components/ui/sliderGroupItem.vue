<script setup>
const selectedClass = 'active';
</script>

<template>
  <v-slide-group-item v-slot="{ toggle, selectedClass }">
    <div :class="['slider-item', selectedClass]" @click="toggle">
      <slot></slot>
    </div>
  </v-slide-group-item>
</template>

<style lang="scss"></style>
