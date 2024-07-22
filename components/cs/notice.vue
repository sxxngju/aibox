<script setup>
// store
const { noticeList } = storeToRefs(useApiNoticeStore());
const { getNoticeList } = useApiNoticeStore();

// state
const totalCount = ref(0);
const pageIndex = ref(1);
const pageSize = ref(10);

// computed
const isEmptyList = computed(() => {
  return noticeList.value.length === 0;
});
const isShowBtn = computed(() => {
  return noticeList.value.length >= 10 && noticeList.value.length < totalCount.value;
});

// method
const handleBtnClick = () => {
  pageIndex.value += 1;
  getNotice({ pageIndex: pageIndex.value, pageSize: pageSize.value });
};

onMounted(async () => {
  const response = await getNoticeList({ pageIndex: pageIndex.value, pageSize: pageSize.value });
  totalCount.value = response.totalPages;
});
</script>

<template>
  <UiTitle>
    <h2>공지</h2>
  </UiTitle>
  <UiAccordion>
    <!-- 1/2 데이터 없는 경우 -->
    <UiNoData v-if="isEmptyList" />
    <!-- 2/2 데이터 있는 경우 -->
    <template v-else>
      <UiAccordionItem v-for="notice in noticeList" :key="notice" :title="notice.title" :prepend="notice.date">
        <p>{{ notice.detail }}</p>
      </UiAccordionItem>
    </template>
  </UiAccordion>

  <UiPageBtn v-show="isShowBtn">
    <UiBtn class="btn-primary" size="large" append-icon="iconPlus" @click="handleBtnClick">더보기</UiBtn>
  </UiPageBtn>
</template>
