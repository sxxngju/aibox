<script setup>
// store
const { recommendServiceList } = storeToRefs(useApiMainStore());
const { getContentsList } = useApiMainStore();

// state
const isShowRecommendServiceAll = ref(false);
const totalPages = ref(0);

onMounted(async () => {
  const response = await getContentsList(2);
  totalPages.value = 10;
});
</script>

<template>
  <section class="main-section" id="recommend-service">
    <UiTitle>
      <SvgColorIconRecommendService />
      <h2>추천 서비스</h2>
    </UiTitle>

    <!-- 등록된 추천 서비스가 없을 경우 -->
    <template v-if="recommendServiceList.length <= 0">
      <UiNoData text="컨텐츠를 등록해주세요."><SvgColorIconAiBoxGray /></UiNoData>
    </template>

    <!-- 등록된 추천 서비스가 있을 경우 -->
    <template v-else>
      <div class="recommend-services">
        <a
          v-for="service in recommendServiceList.slice(0, 8)"
          :key="service.contentId"
          :href="service.linkUri"
          class="item cursor-pointer"
          target="_blank"
        >
          <v-img class="ai-logo" :alt="service.title + '-logo'" :src="service.imagePath" />
          <div class="text-wrap">
            <p class="item-title">{{ service.title }}</p>
            <p class="item-desc">{{ service.introduction }}</p>
          </div>
        </a>
        <a
          v-show="isShowRecommendServiceAll"
          v-for="service in recommendServiceList.slice(8)"
          :key="service.contentId"
          :href="service.linkUri"
          class="item cursor-pointer"
          target="_blank"
        >
          <v-img class="ai-logo" :alt="service.title + '-logo'" :src="service.imagePath" />
          <div class="text-wrap">
            <p class="item-title">{{ service.title }}</p>
            <p class="item-desc">{{ service.introduction }}</p>
          </div>
        </a>
      </div>
      <UiBtn
        v-show="totalPages > 8 && !isShowRecommendServiceAll"
        @click="isShowRecommendServiceAll = true"
        class="btn-more"
        size="large"
        block
        append-icon="iconArrowDown"
      >
        더보기
      </UiBtn>
    </template>
  </section>
</template>
