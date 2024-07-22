<script setup>
definePageMeta({
  layout: 'blank'
});

// store
const { userInfo } = storeToRefs(useApiAuthStore());

// route
const router = useRouter();

// method
const handleClickButton = async () => {
  window.open('https://www.i-scream.co.kr/user/member/join_step03.do', '_self');
};

onBeforeMount(() => {
  if (!userInfo.value) {
    router.replace('/');
  }
});
</script>

<template>
  <template v-if="userInfo">
    <SvgColorIconBlank title="교사인증 실패" />
    <h2><span>교사인증</span> 후 이용 가능합니다.</h2>
    <p>아이스크림 교사 인증 페이지로 이동합니다.</p>

    <UiBtn class="btn-primary" size="large" @click="handleClickButton">교사인증</UiBtn>
  </template>
</template>
