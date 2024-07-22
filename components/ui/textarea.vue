<template>
  <v-textarea :variant="'outlined'" placeholder="내용을 입력해주세요" no-resize counter persist-counter maxlength="1000"> </v-textarea>
</template>

<style lang="scss">
.v-textarea {
  .v-input__details {
    overflow: visible;

    .v-counter {
      position: absolute;
      top: -48px;
      right: var(--root-input-padding-start);
    }
  }

  .v-field {
    --v-field-padding-start: var(--root-input-padding-start);
    --v-field-padding-end: var(--root-input-padding-end);
    --v-field-padding-bottom: var(--root-input-padding-bottom);
    padding: $base-spacer * 2 $base-spacer * 3 $base-spacer * 6;
    background-color: $color-bg-default;
    border-radius: $input-border-radius;
    color: $color-text-default;
    font-size: $input-font-size;

    textarea {
      &::placeholder {
        color: $color-disabled;
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

    .v-field__input {
      padding-inline: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
      mask-image: none;
      -webkit-mask-image: none;
    }
  }
}
</style>
