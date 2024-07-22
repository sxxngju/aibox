<script setup>
definePageMeta({
  layout: 'blank'
});
// store
const { setToken, getUserInfo, userLogout, userAuthenticate } = useApiAuthStore();
const { userInfo } = storeToRefs(useApiAuthStore());

// route
const route = useRoute();
const router = useRouter();

try {
  if (route.query.idToken) {
    await setToken(route.query.idToken);
    await getUserInfo();

    if (userInfo.value.gpkiYn === 'N') {
      await setToken(null);
      await router.replace('/auth/error');
    } else {
      router.replace('/');
    }
  } else {
    userLogout();
  }
} catch {
  userLogout();
}
</script>
