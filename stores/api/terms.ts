export const useApiTermsStore = defineStore('apiTerms', () => {
  const serviceTermsList = ref<Terms[]>([]);
  const privacyTermsList = ref<Terms[]>([]);
  const personalTermsList = ref<Terms[]>([]);
  const serviceTerm = ref<Terms | null>(null);
  const privacyTerm = ref<Terms | null>(null);
  const personalTerm = ref<Terms | null>(null);

  // 약관 목록 조회 (termsType: U - 이용약관, P - 개인정보처리방침, A - 개인정보수집및이용동의)
  const getTermsList = async (termsType: 'U' | 'P' | 'A') => {
    const response = await useCustomFetch<TermsResponse>('/terms/list', {
      method: 'GET',
      query: {
        termsType
      }
    });

    if (response.success) {
      if (termsType === 'U') {
        serviceTermsList.value = response.data;
      } else if (termsType === 'P') {
        privacyTermsList.value = response.data;
      } else if (termsType === 'A') {
        personalTermsList.value = response.data;
      }
    } else {
      if (termsType === 'U') {
        serviceTermsList.value = [];
      } else if (termsType === 'P') {
        privacyTermsList.value = [];
      } else if (termsType === 'A') {
        personalTermsList.value = [];
      }
    }

    return response;
  };

  // 약관 최신 단건 조회 (termsType: U - 이용약관, P - 개인정보처리방침, A - 개인정보수집및이용동의)
  const getTermsRecent = async (termsType: 'U' | 'P' | 'A') => {
    const response = await useCustomFetch<TermsRecentResponse>('/terms/recent', {
      method: 'GET',
      query: {
        termsType
      }
    });

    if (response.success) {
      if (termsType === 'U') {
        serviceTerm.value = response.data;
      } else if (termsType === 'P') {
        privacyTerm.value = response.data;
      } else if (termsType === 'A') {
        personalTerm.value = response.data;
      }
    } else {
      if (termsType === 'U') {
        serviceTerm.value = null;
      } else if (termsType === 'P') {
        privacyTerm.value = null;
      } else if (termsType === 'A') {
        personalTerm.value = null;
      }
    }

    return response;
  };

  return {
    // state
    serviceTermsList,
    privacyTermsList,
    personalTermsList,
    serviceTerm,
    privacyTerm,
    personalTerm,
    // api
    getTermsList,
    getTermsRecent
  };
});
