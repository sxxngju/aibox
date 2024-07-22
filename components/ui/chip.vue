<template>
  <v-chip class="chip">
    <slot />
  </v-chip>
</template>
<style lang="scss">
.chip {
  &.work {
    border-color: transparent;
    background-color: rgb(var(--v-theme-orange));
    color: $white;
  }
  &.edu {
    border-color: transparent;
    background-color: rgb(var(--v-theme-secondary));
    color: $white;
  }
  &.etc {
    border-color: transparent;
    background-color: rgb(var(--v-theme-mint));
    color: $white;
  }

  &.type-hashtag {
    --v-chip-height: 30px;
    padding: 4px 8px;
    border-radius: 2px;
    font-size: $font-size-sm;
    color: $color-text-default;
    border: 1px solid rgba($color-text-default, 0.15);
    background-color: $white;
    line-height: 1;
    .v-chip__underlay {
      opacity: 0;
    }
  }
}
</style>
