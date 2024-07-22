export const useApiPartnershipStore = defineStore('apiPartnership', () => {
  // 제휴/문의
  const postPartnership = async (form: any) => {
    console.log(form);
  };

  return {
    postPartnership
  };
});
