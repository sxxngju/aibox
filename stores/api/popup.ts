export const useApiPopupStore = defineStore('apiPopup', () => {
  const popupList = ref<Popup[]>([]); // 관리자 등록 팝업 리스트

  // 활성화 된 팝업 목록 조회
  const getPopupList = async () => {
    const response = await useCustomFetch<PopupsResponse>('/popup/list', {
      method: 'GET'
    });

    if (response.success) {
      popupList.value = response.data.map(item => {
        // composable
        const { isNoShowPopup } = usePopup(item.popupId);

        return {
          ...item,
          noShowChecked: false,
          visible: !isNoShowPopup.value
        };
      });
    } else {
      popupList.value = [];
    }

    return response;
  };

  return {
    // state
    popupList,
    // api
    getPopupList
  };
});
