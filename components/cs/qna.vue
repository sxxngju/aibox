<script setup>
// store
const { qnaList } = storeToRefs(useApiQnaStore());
const { getQnaList } = useApiQnaStore();

// state
const pageIndex = ref(1);
const pageSize = ref(10);
const totalCount = ref(0);

// computed
const isEmptyList = computed(() => {
  return qnaList.value.length === 0;
});
const isShowBtn = computed(() => {
  return qnaList.value.length >= 10 && qnaList.value.length < totalCount.value;
});

// method
const handleBtnClick = () => {
  pageIndex.value += 1;
  getQnaList({ pageIndex: pageIndex.value, pageSize: pageSize.value });
};

onMounted(async () => {
  const response = await getQnaList({ pageIndex: pageIndex.value, pageSize: pageSize.value });
  totalCount.value = response.totalPages;
});
</script>

<template>
  <UiTitle>
    <h2>자주하는 질문</h2>
  </UiTitle>
  <UiAccordion class="type-qna">
    <!-- 1/2 데이터 없는 경우 -->
    <UiNoData v-if="isEmptyList" />
    <!-- 2/2 데이터 있는 경우 -->
    <template v-else>
      <UiAccordionItem v-for="qna in qnaList" :key="qna.qnaId" :title="qna.title">
        <p>
          {{ qna.detail }}
        </p>
      </UiAccordionItem>
    </template>
  </UiAccordion>

  <UiPageBtn v-show="isShowBtn">
    <UiBtn class="btn-primary" size="large" append-icon="iconPlus" @click="handleBtnClick">더보기</UiBtn>
  </UiPageBtn>
</template>
