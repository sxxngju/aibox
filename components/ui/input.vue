<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'default'
  }
});
</script>

<template>
  <!-- 
  base-color -> border 속성임. 해당속성 사용안하고 css 에서 컨트롤 함. / .v-field__outline의 color속성으로 설정 가능
  bg-color -> .v-field의 background-color속성으로 설정 가능
  clear-icon -> 아이콘 지정 {$clear}
-->

  <v-text-field :variant="'outlined'" :class="[`v-input--size-${props.size}`]" />
</template>

<style lang="scss">
.v-text-field {
  &.short {
    --v-input-control-height: 40px;
    display: flex;
    flex: 0 60px;
    width: 60px;
    min-height: var(--v-input-control-height);

    .v-input__control {
      width: 100%;
    }

    .v-field__input {
      padding-top: 0;
      padding-bottom: 0;
      padding-inline: 0;
      text-align: center;
    }
  }

  .v-field {
    --v-field-padding-start: var(--root-input-padding-start);
    --v-field-padding-end: var(--root-input-padding-end);
    --v-field-padding-bottom: var(--root-input-padding-bottom);
    color: $color-text-default;
    background-color: $color-bg-default;
    border-radius: $input-border-radius;
    font-size: $input-font-size;
    letter-spacing: $base-letter-spacing;

    .v-label {
      font-size: $input-font-size;
      letter-spacing: $base-letter-spacing;
    }

    .v-field__input {
      letter-spacing: $base-letter-spacing;

      &::placeholder {
        color: $color-disabled;
      }
    }

    &.v-field--variant-outlined {
      &.v-field--focused {
        background-color: $white;

        .v-field__outline {
          color: $color-border-input-active;
        }
      }
    }

    .v-field__outline {
      --v-field-border-opacity: 1;
      color: $color-border-light;

      .v-field__outline__start {
        flex: 0 0 $input-border-radius;
      }
    }

    &.v-field--error {
      .v-field__outline {
        --v-field-border-opacity: 1;
        --v-field-border-width: var(--root-input-error-border-width);
      }
    }
  }
}
</style>
