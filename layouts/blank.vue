<template>
  <v-layout class="wrapper is-blank">
    <v-main class="container-fix">
      <slot />
    </v-main>
  </v-layout>
</template>

<style lang="scss">
.wrapper {
  flex-direction: column;
  min-height: 100vh;

  &.is-blank {
    background-color: $color-bg-default;

    .page-title {
      display: none;
    }

    .v-main {
      display: flex;
      align-items: center;
      justify-content: center;
      &.container-fix {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding-left: 40px;
        padding-right: 40px;
        h2 {
          margin-top: $base-spacer * 4;
          font-family: 'SBAggro';
          font-weight: 500;
          span {
            color: $color-primary;
          }
        }
        p {
          margin-top: $base-spacer * 2;
          text-align: center;
          font-size: $font-size-md;
          color: $color-text-sub;
        }
        .v-btn {
          margin-top: $base-spacer * 4;
        }
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
