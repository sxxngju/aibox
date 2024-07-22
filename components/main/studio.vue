<script setup>
// store
const { studioList } = storeToRefs(useApiStudioStore());
const { getStudioList } = useApiStudioStore();

// constant
const categoryIdMap = {
  1: '교육',
  2: '업무',
  3: '기타'
};

// router
const router = useRouter();

// state
const categoryId = ref(0);
const orderBy = ref(0);
const searchKeyword = ref('');
const pageIndex = ref(1);
const pageSize = ref(12);
const totalPages = ref(0);

// method
const handleClickCard = studioId => {
  router.push(`/studio/${studioId}`);
};
const formatDate = date => date.toString().split('T')[0].replaceAll('-', '. ');
const fetchList = async () => {
  pageIndex.value = 1;

  const response = await getStudioList({
    categoryId: categoryId.value,
    orderBy: orderBy.value,
    searchKeyword: searchKeyword.value,
    pageIndex: pageIndex.value,
    pageSize: pageSize.value
  });

  totalPages.value = response.totalPages;
};

const handleChangePage = async () => {
  const response = await getStudioList({
    categoryId: categoryId.value,
    orderBy: orderBy.value,
    searchKeyword: searchKeyword.value,
    pageIndex: pageIndex.value,
    pageSize: pageSize.value
  });

  totalPages.value = response.totalPages;
};

onMounted(async () => {
  await fetchList();
});
</script>

<template>
  <section class="main-section" id="studio">
    <UiTitle>
      <SvgColorIconReduction />
      <h2>업무경감</h2>
      <!-- 카테고리 -->
      <v-btn-toggle mandatory class="filter-type" v-model="categoryId" @update:model-value="fetchList">
        <UiBtn>전체</UiBtn>
        <UiBtn>교육</UiBtn>
        <UiBtn>업무</UiBtn>
        <UiBtn>기타</UiBtn>
        <UiBtn>좋아요</UiBtn>
      </v-btn-toggle>

      <!-- 정렬 -->
      <v-btn-toggle class="filter-order" v-model="orderBy" mandatory @update:model-value="fetchList">
        <UiBtn variant="text">최신순</UiBtn>
        <UiBtn variant="text">조회수</UiBtn>
        <UiBtn variant="text">좋아요</UiBtn>
      </v-btn-toggle>
    </UiTitle>

    <!-- 검색어 -->
    <div class="search-box">
      <UiInput v-model="searchKeyword" placeholder="검색어를 입력해주세요." />
      <UiBtn @click="fetchList" class="btn-icon" variant="text"><SvgSolidIconSearch /></UiBtn>
    </div>

    <!-- 등록된 업무경감이 없을 경우 -->
    <template v-if="studioList.length <= 0">
      <UiNoData text="컨텐츠를 등록해주세요."><SvgColorIconAiBoxGray /></UiNoData>
    </template>
    <!-- 등록된 업무경감이 있을 경우 -->
    <template v-else>
      <div class="cards reduction">
        <UiCard
          v-for="studio in studioList"
          @click="handleClickCard(studio.studioId)"
          :key="studio.studioId"
          :title="studio.title"
          :class="[
            'item cursor-pointer',
            `card-${studio.categoryId === 1 ? 'edu' : studio.categoryId === 2 ? 'work' : 'etc'}`,
            `color-${studio.cardColor}`,
            `${studio.isLike === 1 && 'is-like'}`
          ]"
        >
          <UiBadge>{{ categoryIdMap[studio.categoryId] }}</UiBadge>
          <div class="chips">
            <UiChip v-for="tag in studio.tags" :key="tag" class="type-hashtag">#{{ tag }}</UiChip>
          </div>
          <div class="text-wrap">
            <p class="desc">{{ studio.introduction }}</p>
            <span class="date">{{ formatDate(studio.createdDate) }}</span>
          </div>
          <template #cardFooter>
            <span><SvgSolidIconPwView />{{ useNumberFormat(studio?.viewCount || 0) }}</span>
            <span><SvgSolidIconRecreate />{{ studio.createdCount.toLocaleString() }}</span>
            <span><SvgSolidIconLike />{{ studio.likeCount.toLocaleString() }}</span>
          </template>
        </UiCard>
      </div>

      <!-- 페이지네이션 -->
      <UiPagination v-model="pageIndex" @update:model-value="handleChangePage" :length="totalPages" />
    </template>
  </section>
</template>
