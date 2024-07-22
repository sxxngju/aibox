<script setup>
const attrs = useAttrs();

const variant = computed(() => {
  if (attrs.class?.includes('btn-primary') || attrs.class?.includes('btn-secondary') || attrs.class?.includes('btn-third')) {
    return 'flat';
  } else {
    return 'outlined';
  }
});
</script>

<template>
  <v-btn :variant="variant">
    <slot />
  </v-btn>
</template>

<style lang="scss">
.v-btn-group {
  border-radius: $base-radius;

  &.v-btn-group--density-default {
    --v-btn-height: var(--root-btn-height-default);
    height: var(--v-btn-height);

    &.size-small {
      --v-btn-height: var(--root-btn-height-small);
      .v-btn {
        font-size: $font-size-xsm;
      }
    }
    &.size-default {
      --v-btn-height: var(--root-btn-height-default);
      .v-btn {
        font-size: $font-size-sm;
      }
    }
    &.size-large {
      --v-btn-height: var(--root-btn-height-large);
      .v-btn {
        font-size: $font-size-base;
      }
    }
  }
  &.v-btn-group--divided {
    .v-btn--active {
      background: $color-btn-active;
      color: white;
      font-weight: 700;
    }
  }
}
.v-btn {
  overflow: hidden;
  border-radius: $base-radius;
  letter-spacing: $base-letter-spacing;
  color: $color-text-default;
  font-family: $base-font-family;
  line-height: 1;

  &[aria-haspopup='menu'][aria-expanded='true'] {
    > .v-btn__overlay {
      opacity: 0;
    }
  }

  //size
  &.v-btn--size-default {
    --v-btn-height: var(--root-btn-height-default);
    padding: 0 $btn-inner-padding-default;
    font-size: $font-size-sm;
    &.btn-icon {
      width: var(--v-btn-height);
      height: var(--v-btn-height);
    }
  }
  &.v-btn--size-small {
    --v-btn-height: var(--root-btn-height-small);
    padding: 0 $btn-inner-padding-small;
    font-size: $font-size-xsm;
    &.btn-icon {
      width: var(--v-btn-height);
      height: var(--v-btn-height);
    }
  }
  &.v-btn--size-large {
    --v-btn-height: var(--root-btn-height-large);
    padding: 0 $btn-inner-padding-large;
    font-size: $font-size-base;
    &.btn-icon {
      width: var(--v-btn-height);
      height: var(--v-btn-height);
    }
  }

  //icon
  &.btn-icon {
    @extend .v-btn--icon;
    display: inline-flex;
    padding-left: 0;
    padding-right: 0;
    min-width: 0;

    .v-btn__content {
      width: 100%;
      height: 100%;
    }

    .icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      // width: 100%;
      // height: 100%;

      // svg {
      //   width: 100%;
      //   height: 100%;
      // }
    }

    &.color-gray {
      color: $color-text-sub2;
    }

    // like 버튼 hover
    &:hover {
      .icon-like {
        color: $color-primary;
      }
    }

    // active
    &.v-btn--active {
      .icon-like {
        color: $color-primary;
        path {
          fill: $color-primary;
        }
      }
    }
  }

  &:hover {
    color: $color-primary;
    .v-btn__overlay {
      background-color: transparent;
    }
  }

  //outlined
  &.v-btn--variant-outlined {
    &.v-btn--disabled {
      opacity: 1;
      color: $white;
      background-color: $color-disabled;
    }
  }

  //flat
  &.v-btn--variant-flat {
    .v-btn__overlay {
      opacity: 0;
    }
    &.btn-primary {
      color: $white;
      background-color: $color-text-default;
      &:hover {
        background-color: $color-primary;
      }
    }

    &.btn-secondary {
      color: $white;
      background-color: $color-primary;
      &:hover {
        background-color: #000;
      }
    }

    &.btn-third {
      color: $white;
      background-color: $color-secondary;
      &:hover {
        background-color: #000;
      }
    }
    &.v-btn--disabled {
      background-color: $color-disabled;
      .v-btn__overlay {
        opacity: 0;
      }
    }
  }

  //text
  &.v-btn--variant-text {
    &.v-btn--icon {
      &.v-btn--active {
        .v-btn__overlay {
          background-color: transparent;
        }
      }
      .v-btn__content {
        width: 100%;
        height: 100%;
      }
      // .icon {
      //   width: 100%;
      //   height: 100%;
      //   svg {
      //     width: 100%;
      //     height: 100%;
      //   }
      // }

      &.color-gray {
        &:hover {
          color: $color-primary;
        }
      }
    }
    &.v-btn--disabled {
      opacity: 1;
      color: $color-disabled;
    }
  }

  //etc
  &.btn-more {
    margin-top: $base-spacer * 3;
    background-color: $white;
    border-color: $color-border-light;
    color: $color-text-sub2;
    border-start-start-radius: 0px;
    border-start-end-radius: 0px;

    &:hover {
      border-color: $color-text-default;
      color: $color-text-default;
    }
  }
}
</style>
