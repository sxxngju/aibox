export default defineNuxtRouteMiddleware(async (to, from) => {
  // store
  const { userAuthenticate } = useApiAuthStore();

  const config = useRuntimeConfig();
  const token = useCookie('token');

  if (token.value) {
    userAuthenticate();
  } else {
    return navigateTo(config.public.loginUrl, { external: true });
  }
});
