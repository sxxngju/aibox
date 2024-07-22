<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="form-item">
    <p :class="['title', props.class]">{{ props.title }}</p>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.form-item {
  .title {
    margin-bottom: 20px;
    font-weight: 700;
  }
  .desc {
    margin-bottom: $base-spacer * 2;
  }
  &.required {
    position: relative;

    .title::after {
      content: '*';
      font-weight: inherit;
      font-size: inherit;
      color: inherit;
    }
  }
}
</style>
