<script setup>
onMounted(() => {
  useWindowSize();
});
</script>

<template>
  <!-- !NOTE : error시 .wrapper에 is-error클래스 삽입 부탁드립니다. -->
  <!-- !NOTE :
    받아쓰기 - dictation 클래스 삽입 부탁드립니다.
    업무경감 - reduction 클래스 삽입 부탁드립니다.
    고객센터 - cs 클래스 삽입 부탁드립니다.
  -->
  <v-layout class="wrapper">
    <LayoutHeader />
    <v-main>
      <UiPageTitle title="AI 업무경감" desc="다양한 주제의 서비스를 만들어보세요." class="dictation"></UiPageTitle>
      <v-main class="container-fix">
        <slot />
      </v-main>
    </v-main>
    <LayoutFooter />
  </v-layout>
</template>

<style lang="scss">
.wrapper {
  flex-direction: column;
  min-height: 100vh;

  &.is-error {
    background-color: $color-bg-default;

    .page-title {
      display: none;
    }

    .v-main {
      display: flex;
      align-items: center;
      justify-content: center;
      &.container-fix {
        padding-left: 40px;
        padding-right: 40px;
      }
    }
  }

  .v-main {
    &.container-fix {
      height: 100%;
      padding-bottom: 88px;
    }
  }

  .container-fix {
    flex-wrap: nowrap;
    width: $page-width;
    margin: 0 auto;
  }
}
</style>
