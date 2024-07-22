<script setup>
definePageMeta({
  layout: 'default'
});

const tab = ref('tab1');

import notice from './notice.vue';
import faq from './faq.vue';
import agreement from './agreement.vue';
import policy from './policy.vue';
import partnership from './partnership.vue';
</script>

<template>
  <UiTabs v-model="tab">
    <template #header>
      <UiTabHeader text="공지" value="tab1" />
      <UiTabHeader text="자주하는 질문" value="tab2" />
      <UiTabHeader text="이용약관" value="tab3" />
      <UiTabHeader text="개인정보처리방침" value="tab4" />
      <UiTabHeader text="제휴/문의" value="tab5" />
    </template>

    <template #body>
      <UiTabItem value="tab1">
        <notice />
      </UiTabItem>
      <UiTabItem value="tab2">
        <faq />
      </UiTabItem>
      <UiTabItem value="tab3">
        <agreement />
      </UiTabItem>
      <UiTabItem value="tab4">
        <policy />
      </UiTabItem>
      <UiTabItem value="tab5">
        <partnership />
      </UiTabItem>
    </template>
  </UiTabs>
</template>

<style lang="scss">
@import url(@/assets/scss/pages/cs.scss);
</style>
