<script></script>

<template>
  <div class="form-extras">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.form-extras {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid $color-border-light;
  gap: $base-gutter;
  //padding:14px 20px;
  padding-right: $base-spacer * 2;
  min-height: 70px;
  border-radius: $base-radius;

  &:hover {
    border-color: $color-text-default;
  }
  .v-textarea .v-field,
  .v-select .v-field,
  .v-field {
    --v-input-control-height: auto;
    --v-field-input-padding-top: 20px;
    --v-field-input-padding-bottom: 20px;
    --v-field-padding-start: calc(var(--root-input-padding-start) - 10px);
    --v-field-padding-end: 0px;
    background-color: transparent;
    height: 100%;

    .v-field__outline {
      --v-field-border-opacity: 0;
      color: transparent;
    }

    &:hover {
      background-color: transparent;
    }

    &.v-field--variant-outlined {
      &.v-field--focused {
        background-color: transparent;
      }
    }

    .v-field__outline {
      opacity: 0;
    }
  }

  .v-textarea .v-field {
    padding: 0;
    .v-field__input {
      padding-inline: $base-spacer * 2;
    }
  }

  .v-select {
    flex-basis: 30%;
    .v-field {
      --v-field-input-padding-top: 20px;
      --v-field-input-padding-bottom: 20px;
      padding-top: var(--v-field-input-padding-top);
      padding-bottom: var(--v-field-input-padding-bottom);
      .v-field__field {
        height: 32px;
      }
    }
  }

  .v-input {
    position: relative;

    .v-input__details {
      position: absolute;
      bottom: -38px;
      left: 0;
      width: 100%;
      padding-inline: 0px;
    }
  }
}
</style>
