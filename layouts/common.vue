<script setup>
const route = useRoute();

const pageInfo = computed(() => {
  if (route.name.startsWith('dictation')) {
    return {
      name: 'dictation',
      title: '받아쓰기',
      desc: '급수, 자주 쓰는 문장을 자동으로 선별해서 말해줘요.'
    };
  } else if (route.name.startsWith('studio')) {
    return {
      name: 'reduction',
      title: 'AI 업무경감',
      desc: '다양한 주제의 서비스를 만들어보세요.'
    };
  } else if (route.name.startsWith('cs')) {
    return {
      name: 'cs',
      title: '고객센터',
      desc: '사이트 이용에 필요한 내용 및 정책을 확인하실 수 있습니다.'
    };
  } else {
    return {
      title: '',
      desc: ''
    };
  }
});
</script>

<template>
  <!-- !NOTE : error시 .wrapper에 is-error클래스 삽입 부탁드립니다. -->
  <!-- !NOTE :
    받아쓰기 - <SvgColorIconDictationTitle />
    업무경감 - <SvgColorIconReductionTitle />
    고객센터 - <SvgColorIconCsCenterTitle />
  -->
  <v-layout :class="['wrapper', { main: route.name === 'index' }]">
    <LayoutHeader />
    <v-main>
      <UiMainVisual v-if="route.name === 'index'" />
      <UiPageTitle v-else :title="pageInfo.title" :desc="pageInfo.desc" :class="pageInfo.name"></UiPageTitle>
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
</style>
