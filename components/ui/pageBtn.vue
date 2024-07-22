<template>
  <div class="page-btn">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.page-btn {
  margin-top: $base-spacer * 3;
  // margin-bottom:30px;
  text-align: center;
  .v-btn {
    margin-left: $spacer-gutter * 0.5;
    margin-right: $spacer-gutter * 0.5;
  }
}
</style>
