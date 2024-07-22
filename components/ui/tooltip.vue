<template>
  <v-tooltip text="tooltip" location="top" offset="18" transition="fade-transition">
    <template v-slot:activator="{ props }">
      <span v-bind="props" class="tooltip-trigger"><slot /></span>
    </template>
  </v-tooltip>
</template>

<style lang="scss">
.tooltip-trigger {
  display: inline-block;
  position: relative;
  line-height: 1;

  &::after {
    opacity: 0;
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 20px;
    height: 12px;
    transform-origin: center;
    border-top: calc(6px * 1.732) solid $color-primary; // 1.732를 곱하면 높이대로 border가 만들어짐
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    transition-property: opacity;
    transition-duration: 0;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    &::after {
      opacity: 1;
      transition-duration: 0.3s;
    }
  }
}

.v-tooltip {
  & > .v-overlay__content {
    padding: $base-spacer $base-spacer * 3.5;
    background-color: $color-primary;
    color: $white;
    font-size: $font-size-base;
    font-weight: 700;
    border-radius: $base-radius;
    opacity: 0;
  }

  &.v-overlay--active {
    & > .v-overlay__content {
      opacity: 1;
    }
  }
}
</style>
