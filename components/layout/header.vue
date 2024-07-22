<script setup>
// store
const { authenticated } = storeToRefs(useApiAuthStore());
const { userLogout } = useApiAuthStore();

// router
const route = useRoute();
const router = useRouter();

// method
const goToIndex = () => {
  if (route.name === 'index') {
    useScroll('.wrapper');
  } else {
    router.push('/');
  }
};

const isMain = computed(() => {
  return route.name === 'index';
});
</script>

<template>
  <v-app-bar :elevation="0" :class="`header ${isMain && 'main'}`" height="70">
    <template v-slot:prepend>
      <UiBtn @click="goToIndex" variant="text" class="logo"><SvgSolidIconLogo /></UiBtn>
    </template>
    <div class="menus">
      <UiBtn @click="useScroll('#popular-contents')" variant="text">인기 콘텐츠</UiBtn>
      <UiBtn @click="useScroll('#recommend-service')" variant="text">추천 서비스</UiBtn>
      <UiBtn @click="useScroll('#studio')" variant="text">업무경감</UiBtn>
    </div>
    <template v-slot:append v-show="authenticated">
      <UiBtn
        variant="text"
        prepend-icon="iconEditInfo"
        tag="a"
        href="https://account.i-screammedia.com/user/modUserPwForm.do"
        target="_blank"
        >회원정보수정</UiBtn
      >
      <UiBtn variant="text" prepend-icon="iconLogout" @click="userLogout">로그아웃</UiBtn>
    </template>
  </v-app-bar>
</template>

<style lang="scss">
.v-app-bar {
  &.header {
    // position: relative;
    //width: 100%;
    //min-width: $page-width;
    background: $color-gray-900;
    border-color: transparent;

    .v-toolbar__prepend {
      margin-inline: 0;
    }

    .v-toolbar__content {
      max-width: $page-width;
      margin: {
        left: auto;
        right: auto;
      }
    }

    .v-btn {
      color: $white;

      &.logo {
        position: relative;
        z-index: 1010;
        padding: 0;
      }

      &:not(.logo):hover {
        color: $color-primary;
      }
    }

    .menus {
      display: none;
      gap: $base-gutter * 7;
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      & > .v-btn {
        padding: 0 8px;
        font-family: 'SBAggro';
        color: $color-text-default;
        font-size: $font-size-md;
        height: 100%;
        border-radius: 0;
        border: none;

        &::after {
          top: unset;
          bottom: 0;
          height: 3px;
          background-color: $color-primary;
          border: none;
        }

        &:hover {
          color: $color-primary;

          &::after {
            opacity: 1;
          }
        }
      }
    }

    &.main {
      background: $white;
      border-bottom: 1px solid $color-border-light;

      .v-btn {
        color: $color-text-default;
        &:not(.logo):hover {
          color: $color-primary;
        }
      }

      .menus {
        display: flex;
      }
    }
  }
}
</style>
