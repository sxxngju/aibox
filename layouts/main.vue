<script setup>
onMounted(() => {
  useWindowSize();
});
</script>

<template>
  <v-layout class="wrapper main">
    <LayoutHeader class="main" />
    <v-main>
      <UiMainVisual />
      <v-main class="container-fix">
        <slot />
      </v-main>
    </v-main>
    <LayoutFooter />
  </v-layout>
</template>

<style lang="scss">
.wrapper {
  &.main {
    flex-direction: column;
    background-color: $color-bg-default;

    .v-main {
      &.container-fix {
        height: 100%;
        padding: 0;
        padding-bottom: 88px;
      }
    }

    .container-fix {
      flex-wrap: nowrap;
      width: $page-width;
      margin: 0 auto;
    }
  }
}
</style>
