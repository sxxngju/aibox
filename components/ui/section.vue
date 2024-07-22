<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  lined: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: 'top'
  },
  class: {
    type: String
  }
});
</script>

<template>
  <section :class="['section', { lined: props.lined }, props.class]">
    <slot />
  </section>
</template>

<style lang="scss">
.section {
  &:not(.write-list) + .section {
    margin-top: 80px;
  }

  &.lined {
    padding-top: $spacer-list;
    padding-bottom: $spacer-list;
    border-top: 2px solid $color-border-dark;
    &:not(:first-of-type):last-of-type {
      border-bottom: 1px solid $color-border-dark;
    }
  }
  &.type-pre {
    padding-top: 0;
    padding-bottom: 0;
    > div {
      margin: 30px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
    ol {
      li {
        list-style: decimal;
        margin-left: 15px;
        li {
          list-style: lower-alpha;
        }
      }
    }
  }
  //등록폼 넓이 조절
  &.write-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: $spacer-list * 0.75;
    padding-bottom: $spacer-list * 0.75;
    gap: $spacer-list $spacer-list; //label 높이값 마이너스
    .form-item {
      flex-basis: calc((100% - #{$spacer-list}) * 0.5);
      &.fluid {
        flex-basis: 100%;
      }
    }
  }
}
</style>
