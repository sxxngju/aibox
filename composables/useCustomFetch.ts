export const useCustomFetch = async <T>(url: string, options: object) => {
  const config = useRuntimeConfig();
  const token = useCookie('token');
  const { userLogout } = useApiAuthStore();
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${token.value}`
  };

  try {
    console.debug(`request => ${url}`, options);

    const response = await $fetch<T>(url, {
      baseURL: config.public.apiBase,
      timeout: 1000,
      headers: headers,
      ...options
    });

    console.debug(`response=>${url}`, response);

    return response;
  } catch (error: any) {
    if (error.statusCode === 401) {
      userLogout();
      throw createError({ statusCode: error?.statusCode, statusMessage: error?.message, fatal: true });
    } else {
      throw createError({ statusCode: error?.statusCode, statusMessage: error?.message, fatal: true });
    }
  }
};
