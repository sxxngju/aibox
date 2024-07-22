<template>
  <v-layout class="wrapper is-error">
    <LayoutHeader />
    <v-main>
      <v-main class="container-fix">
        <div class="error-page">
          <SvgColorIconErrorPage title="에러 페이지 아이콘" />
          <h2>일시적인 오류가 발생하였습니다.</h2>
          <p>잠시 후 다시 실행해주시기 바랍니다.<br />서비스 이용에 불편을 드려 죄송합니다.</p>
        </div>
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

  .container-fix {
    flex-wrap: nowrap;
    width: $page-width;
    margin: 0 auto;
  }
}

.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h2 {
    margin-top: $base-spacer * 4;
    font-family: 'SBAggro';
    font-weight: 500;
  }
  p {
    margin-top: $base-spacer * 2;
    text-align: center;
    font-size: $font-size-md;
    color: $color-text-sub;
  }
}
</style>
