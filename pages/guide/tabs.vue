<script setup>
definePageMeta({
  layout: 'guide'
});

const tab = ref('tab1');

// guide source view : markdown
import markdownParser from '@nuxt/content/transformers/markdown';
let guideMarkdown1 = await markdownParser.parse(null, guide1);

const guide1 = `
\`\`\`html
  <UiTabs v-model="tab">
    <template #header>
      <UiTabHeader text="탭이름1" value="tab1" />
      <UiTabHeader text="탭이름2" value="tab2" />
      <UiTabHeader text="탭이름3" value="tab3" />
    </template>

    <template #body>
      <UiTabItem value="tab1"> 이 내용이 슬롯으로 탭컨텐츠 들어갑니다. </UiTabItem>
      <UiTabItem value="tab2"> 이 내용이 슬롯으로 탭컨텐츠 들어갑니다.2 </UiTabItem>
      <UiTabItem value="tab3"> 이 내용이 슬롯으로 탭컨텐츠 들어갑니다.3 </UiTabItem>
    </template>
  </UiTabs>
\`\`\`
`;
</script>

<template>
  <GuideTitle text="tabs" />
  <UiTabs v-model="tab">
    <template #header>
      <UiTabHeader text="탭이름1" value="tab1" />
      <UiTabHeader text="탭이름2" value="tab2" />
      <UiTabHeader text="탭이름3" value="tab3" />
    </template>

    <template #body>
      <UiTabItem value="tab1"> 이 내용이 슬롯으로 탭컨텐츠 들어갑니다. </UiTabItem>
      <UiTabItem value="tab2"> 이 내용이 슬롯으로 탭컨텐츠 들어갑니다.2 </UiTabItem>
      <UiTabItem value="tab3"> 이 내용이 슬롯으로 탭컨텐츠 들어갑니다.3 </UiTabItem>
    </template>
  </UiTabs>
  <ContentRenderer :value="guideMarkdown1" />
</template>
