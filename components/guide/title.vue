<script setup>
import { defineProps, ref } from 'vue';
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
  <div class="guide-title">
    <slot name="prepend-contents" />
    <component :is="'h' + level">
      {{ text }}
    </component>
    <slot />
  </div>
</template>

<style lang="scss">
.guide-title {
  margin-top: $base-spacer * 4;
  margin-bottom: $base-spacer * 2;
  text-transform: uppercase;

  h2 {
    font-size: 80px;
    font-weight: 200;
    //padding: $base-spacer $base-spacer * 2;
    //background-color: #f5f5f5;
  }
  h3 {
    font-size: 36px;
    font-weight: 300;
    margin-top: $base-spacer * 4;
    //padding: $base-spacer 0;
    border-bottom: 1px solid #222;
  }
  h4 {
    margin-top: $base-spacer * 2;
    margin-bottom: $base-spacer * 1;
    padding: $base-spacer;
    background-color: #f5f5f5;
  }
  small {
    font-size: 16px;
    color: red;
  }
}
</style>
