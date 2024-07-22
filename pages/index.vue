<script setup>
// layout
definePageMeta({
  layout: 'common',
  middleware: 'auth'
});

// store
const { mainOrderList } = storeToRefs(useApiMainStore());
const { getAreaList } = useApiMainStore();

// dynamic components (인기 콘텐츠, 추천 서비스, 업무경감 순서)
const componentMap = {
  1: resolveComponent('main-popular'),
  2: resolveComponent('main-recommend'),
  3: resolveComponent('main-studio')
};
const components = computed(() => {
  return mainOrderList.value?.sort((prev, next) => prev.orders - next.orders);
});

onMounted(async () => {
  await getAreaList();
});
</script>

<template>
  <template v-for="component in components" :key="component.areaId">
    <component :is="componentMap[component.areaId]" />
  </template>

  <!-- 관리자에서 등록한 메인 팝업 -->
  <MainPopup />

  <!-- 이용 동의 팝업 -->
  <MainAgreeModal />
</template>

<style lang="scss">
@import url(@/assets/scss/pages/main.scss);
</style>
