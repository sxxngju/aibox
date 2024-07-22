export const useApiAuthStore = defineStore('apiAuth', () => {
  const token = useCookie('token');
  const config = useRuntimeConfig();

  const authenticated = ref(false); // 인증 상태
  const userInfo = ref<userInfo | null>(null); // 로그인한 사용자 정보

  // 사용자 정보 조회
  const getUserInfo = async () => {
    const response = await useCustomFetch<userInfo>(config.public.userInfo, {
      method: 'GET'
    });

    if (response) {
      userInfo.value = response;
    } else {
      userInfo.value = null;
    }
  };

  // 인증 성공
  const userAuthenticate = async () => {
    authenticated.value = true;
  };

  // 사용자 통합 로그인
  const userLogin = () => {
    window.location.href = config.public.loginUrl;
  };

  // 사용자 통합 로그아웃
  const userLogout = () => {
    token.value = null;
    authenticated.value = false;

    window.location.href = config.public.logoutUrl;
  };

  // 토큰 세팅
  const setToken = async (value: string) => {
    new Promise(resolve => {
      token.value = value;
      resolve(value);
    });
  };

  return {
    // state
    authenticated,
    userInfo,
    // api
    getUserInfo,
    // method
    userAuthenticate,
    userLogin,
    setToken,
    userLogout
  };
});
