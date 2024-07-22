export const useApiStudioStore = defineStore('apiStudio', () => {
  const studioDetail = ref<StudioDetailParse>(); // AI 업무경감 단건
  const studioList = ref<Studio[]>([]); // AI 업무경감 리스트

  // 스튜디오 리스트 조회
  const getStudioList = async (filter: StudioParamsType) => {
    const response = await useCustomFetch<StudioResponse>('/studio/list', {
      method: 'GET',
      query: {
        ...filter,
        categoryId: filter.categoryId === 0 ? null : filter.categoryId,
        orderBy: filter.orderBy === 0 ? 'createdDate desc' : filter.orderBy === 1 ? 'viewCountdesc' : 'likeCount desc'
      }
    });

    studioList.value = response.data;

    return response;
  };

  // 스튜디오 콘텐츠 상세 조회
  const getStudio = async ({ studioId }: { studioId: number }) => {
    const response = await useCustomFetch<StudioDetailResponse>(`/studio/${studioId}`, {
      method: 'GET'
    });

    studioDetail.value = {
      ...response.data,
      detail: JSON.parse(response.data.detail).map((item: StudioDetailParse) => {
        return {
          ...item,
          value: ''
        };
      })
    };

    return response;
  };

  // 스튜디오 콘텐츠 좋아요 등록/해제
  const editStudioLike = async ({ studioId, isLike }: { studioId: number; isLike: 0 | 1 }) => {
    const response = await useCustomFetch<BaseResponse>('/studio/like', {
      method: 'POST',
      body: {
        studioId,
        likeCount: isLike
      }
    });

    return response;
  };

  // 스튜디오 콘텐츠 AI 자동 생성
  const getStudioAI = async ({ detail }: { detail: StudioDetail }) => {
    const response = await useCustomFetch<StudioPromptResponse>('/studio/ai', {
      method: 'POST',
      body: {
        purpose: 'basic',
        input: detail
      }
    });

    return response;
  };

  return {
    // state
    studioDetail,
    studioList,
    // api
    getStudio,
    getStudioList,
    getStudioAI,
    editStudioLike
  };
});
