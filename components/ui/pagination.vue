<script setup></script>

<template>
  <v-pagination :length="10" />
</template>

<style lang="scss">
.v-pagination {
  margin-top: $base-spacer * 3;

  .v-btn {
    border-radius: $base-radius;
    font-size: $font-size-base;
    width: 40px;
    height: 40px;
    padding: 0;
  }
  .v-pagination__item--is-active {
    .v-btn {
      color: $white;
      background-color: $color-gray-900;
      font-size: $font-size-md;
    }
  }
}
</style>
