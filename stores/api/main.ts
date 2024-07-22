export const useApiMainStore = defineStore('apiMain', () => {
  const mainOrderList = ref<MainOrder[]>([]); // 메인 영역 순서 리스트
  const popularContentsList = ref<MainContent[]>([]); // 인기 콘텐츠 리스트
  const recommendServiceList = ref<MainContent[]>([]); // 추천 서비스 리스트

  // 메인 영역 목록 조회
  const getAreaList = async () => {
    const response = await useCustomFetch<MainOrderResponse>('/area/list', {
      method: 'GET'
    });

    if (response.success) {
      mainOrderList.value = response.data;
    } else {
      mainOrderList.value = [];
    }

    return response;
  };

  // 인기 콘텐츠 및 추천 AI 리스트 조회 (areaId: 1 - 인기콘텐츠, 2 - 추천 서비스)
  const getContentsList = async (areaId: 1 | 2) => {
    const response = await useCustomFetch<MainContentResponse>('/contents/list', {
      method: 'GET',
      query: {
        areaId,
        pageIndex: 1,
        pageSize: 10000
      }
    });

    if (areaId === 1) {
      popularContentsList.value = response.data;
    } else if (areaId === 2) {
      recommendServiceList.value = response.data;
    }

    return response;
  };

  return {
    // state
    mainOrderList,
    popularContentsList,
    recommendServiceList,

    // api
    getAreaList,
    getContentsList
  };
});
