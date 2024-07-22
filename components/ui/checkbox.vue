<template>
  <v-checkbox />
</template>

<style lang="scss">
.v-checkbox {
  .v-input__details {
    left: calc((var(--root-checkbox-size) + $base-spacer) - var(--root-input-padding-start));
  }
}
.v-checkbox-btn {
  &.v-selection-control--density-default {
    --v-selection-control-size: var(--root-checkbox-size);
    min-height: auto;
  }
  .v-selection-control__wrapper {
    margin-right: $base-spacer;
    color: $color-border-checkbox;
  }
  .v-selection-control__input {
    &::before {
      display: none;
    }
  }
  .label {
    letter-spacing: $base-letter-spacing;
  }
}
</style>
