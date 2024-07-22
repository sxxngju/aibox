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
  <v-select :variant="'outlined'" menu-icon="iconArrowDown" :class="[`v-input--size-${props.size}`]"></v-select>
</template>

<style lang="scss">
.v-select {
  .v-field {
    --v-field-padding-start: var(--root-select-padding-start);
    --v-field-padding-end: var(--root-select-padding-end);
    --v-field-padding-bottom: var(--root-input-padding-bottom);
    color: $color-text-default;
    background-color: $white;
    border-radius: $input-border-radius;
    font-size: $font-size-base;
    font-family: $base-font-family;

    .v-select__menu-icon {
      color: $color-text-default;
    }

    .v-field__field {
      align-items: center;
    }

    .v-field__input {
      opacity: 1;
      padding-top: 0px;
      padding-bottom: 0px;
      align-items: center;

      & > input {
        align-self: center;
        font-weight: 500;

        &::placeholder {
          opacity: 1;
          color: $color-text-default;
        }
      }
    }

    &:hover {
      --v-field-border-width: var(--root-input-active-border-width);
      background-color: $white;

      .v-field__outline {
        --v-field-border-opacity: 1;
        color: $color-border-input-active;
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
        color: $color-error;
      }
    }

    .v-select__selection {
      width: 100%;
      .v-select__selection-text {
        width: 100%;
      }
    }
  }
}

.v-menu {
  & > .v-select__content {
    & > .v-list {
      flex: 0;
    }
  }
}
</style>
