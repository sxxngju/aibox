export const useApiTeachersStore = defineStore('apiTeachers', () => {
  // 이용동의여부 건수 조회
  const getAgreeNum = async () => {
    const response = await useCustomFetch<AgreeResponse>('/teachers/agree', {
      method: 'GET'
    });

    return response;
  };

  // 이용동의 수정
  const editAgreeNum = async () => {
    const response = await useCustomFetch<BaseResponse>('/teachers/agree', {
      method: 'POST',
      body: {
        isAgreement: 2
      }
    });

    return response;
  };
  return {
    // api
    getAgreeNum,
    editAgreeNum
  };
});
