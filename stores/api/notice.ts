export const useApiNoticeStore = defineStore('apiNotice', () => {
  const noticeList = ref<Notice[]>([]); // 공지사항 리스트

  // 공지사항 목록 조회
  const getNoticeList = async ({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }) => {
    const response = await useCustomFetch<NoticeResponse>('/notices/list', {
      method: 'GET',
      query: {
        pageIndex,
        pageSize
      }
    });

    if (response.success) {
      noticeList.value = response.data;
    } else {
      noticeList.value = [];
    }

    return response;
  };

  return {
    // state
    noticeList,
    // api
    getNoticeList
  };
});
