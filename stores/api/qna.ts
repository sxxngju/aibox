export const useApiQnaStore = defineStore('apiQna', () => {
  const qnaList = ref<Qna[]>([]); // 자주하는 질문 리스트

  // 자주하는 질문 목록 조회
  const getQnaList = async ({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }) => {
    const response = await useCustomFetch<QnaResponse>('/qna/list', {
      method: 'GET',
      query: {
        pageIndex,
        pageSize
      }
    });

    if (response.success) {
      qnaList.value = response.data;
    } else {
      qnaList.value = [];
    }

    return response;
  };

  return {
    // state
    qnaList,
    // api
    getQnaList
  };
});
