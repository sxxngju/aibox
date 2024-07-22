<script setup>
definePageMeta({
  layout: 'common'
});

// route
const router = useRouter();
const route = useRoute();

// state
const tab = ref(route.query.tab || 'notice');
const tabHeaders = [
  { text: '공지', value: 'notice' },
  { text: '자주하는 질문', value: 'qna' },
  { text: '이용약관', value: 'agreement' },
  { text: '개인정보처리방침', value: 'privacy-policy' },
  { text: '제휴/문의', value: 'partnership' }
];
const tabItems = [
  { value: 'notice', component: resolveComponent('cs-notice') },
  { value: 'qna', component: resolveComponent('cs-qna') },
  { value: 'agreement', component: resolveComponent('cs-agreement') },
  { value: 'privacy-policy', component: resolveComponent('cs-privacy-policy') },
  { value: 'partnership', component: resolveComponent('cs-partnership') }
];

// method
const handleTab = () => {
  router.push({
    path: '/cs',
    query: { tab: tab.value }
  });
};

watch(
  () => route.query.tab,
  newValue => {
    tab.value = newValue;
    useScroll('.wrapper', 'instant');
  }
);
</script>

<template>
  <UiTabs v-model="tab">
    <template #header>
      <UiTabHeader
        v-for="tabHeader in tabHeaders"
        :key="tabHeader.text"
        @click="handleTab"
        :text="tabHeader.text"
        :value="tabHeader.value"
      />
    </template>

    <template #body>
      <UiTabItem v-for="tabItem in tabItems" :key="tabItem.value" :value="tabItem.value">
        <component :is="tabItem.component" />
      </UiTabItem>
    </template>
  </UiTabs>
</template>
