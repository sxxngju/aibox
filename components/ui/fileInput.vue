<script setup>
const props = defineProps({
  isButton: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'default'
  },
  placeholder: {
    type: String,
    default: null
  }
});
</script>

<template>
  <v-file-input
    :class="[`${props.isButton && props.isButton !== '' ? 'is-button' : ''}`, `v-input--size-${props.size}`]"
    :variant="'outlined'"
    prepend-icon=""
    :clearable="false"
    :placeholder="props.placeholder"
  >
    <template v-if="props.placeholder !== null" v-slot:prepend-inner>
      <div class="v-file-input-placeholder">{{ props.placeholder }}</div>
    </template>
    <template v-if="props.isButton" v-slot:append-inner>
      <UiBtn variant="text">{{ props.isButton }}</UiBtn>
    </template>
  </v-file-input>
</template>

<style lang="scss">
.v-file-input {
  &.is-button {
    .v-field--appended {
      padding-inline-end: 0px;
    }
    .v-field__append-inner {
      .v-btn {
        min-width: $input-file-inner-button-width;
        height: 100%;
        background-color: $white;
        border-radius: $input-border-radius;
        border-left: 1px solid $color-border-light;
        border-end-start-radius: 0px;
        border-start-start-radius: 0px;
        font-size: $input-font-size;

        &:hover {
          .v-btn__overlay {
            opacity: 0;
          }
        }
      }
    }
  }

  &.with-list {
    .v-field__input {
      overflow: hidden;
      text-indent: -9999px;
    }

    & + .file-list {
      display: flex;
      align-items: center;
      gap: $base-gutter * 3;
      width: 100%;
      margin-top: $base-spacer * 2;

      li {
        display: flex;
        align-items: center;
        gap: $base-gutter;
        font-size: $input-font-size;

        .btn-icon {
          width: 24px;
          height: 24px;
          border-radius: 100%;
        }
      }
    }
  }

  .v-field--prepended {
    padding-inline-start: var(--v-field-padding-start);
  }

  .v-file-input-placeholder {
    font-size: inherit;
    color: $color-disabled;
    cursor: default;
  }

  .v-input__details {
    .v-counter {
      padding: $base-spacer var(--root-input-padding-start);
      background-color: rgba($white, 0.7);
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
      }
    }
  }
}
</style>
