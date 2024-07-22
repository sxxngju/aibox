<script setup>
// store
const { popularContentsList } = storeToRefs(useApiMainStore());
const { getContentsList } = useApiMainStore();

// state
const isShowPopularContentsAll = ref(false);
const totalPages = ref(0);

// method
const isExternal = contentId => contentId !== 1;

onMounted(async () => {
  const response = await getContentsList(1);
  totalPages.value = 8;
});
</script>

<template>
  <section class="main-section" id="popular-contents">
    <UiTitle>
      <SvgColorIconPopularContents />
      <h2>인기 콘텐츠</h2>
    </UiTitle>

    <!-- 등록된 인기 콘텐츠가 없을 경우 -->
    <template v-if="popularContentsList.length <= 0">
      <UiNoData text="컨텐츠를 등록해주세요.">
        <SvgColorIconAiBoxGray />
      </UiNoData>
    </template>

    <!-- 등록된 인기 콘텐츠가 있을 경우 -->
    <template v-else>
      <div class="cards popular">
        <UiCard
          v-for="content in popularContentsList.slice(0, 6)"
          :key="content.contentId"
          :title="content.title"
          class="cursor-pointer"
          type="text"
          :style="`background-image: url('${content.imagePath}')`"
          :href="isExternal(content.contentId) ? content.linkUri : null"
          :to="isExternal(content.contentId) ? null : '/dictation'"
          :target="isExternal(content.contentId) ? '_blank' : '_self'"
        >
          <SvgSolidIconPlainArrow title="선 화살표" />
          <p>{{ content.introduction }}</p>
        </UiCard>

        <UiCard
          class="cursor-pointer"
          v-show="isShowPopularContentsAll"
          v-for="content in popularContentsList.slice(6)"
          :key="content.contentId"
          :title="content.title"
          type="text"
          :style="`background-image: url('${content.imagePath}')`"
          :href="isExternal(content.contentId) ? content.linkUri : null"
          :to="isExternal(content.contentId) ? null : content.linkUri"
          :target="isExternal(content.contentId) ? '_blank' : '_self'"
        >
          <SvgSolidIconPlainArrow title="선 화살표" />
          <p>{{ content.introduction }}</p>
        </UiCard>
      </div>

      <!-- 더보기 버튼 -->
      <UiBtn
        v-show="totalPages > 6 && !isShowPopularContentsAll"
        @click="isShowPopularContentsAll = true"
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
