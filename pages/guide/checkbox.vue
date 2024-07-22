<script setup>
definePageMeta({
  layout: 'guide'
});

const required = value => !!value || 'Field is required';

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiCheckbox label="checkbox" />
<UiCheckbox label="checkbox required" :rules="[required]" />
\`\`\`
`;
let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiCheckbox
  label="오늘 하루 열지 않음"
  hide-details
  false-icon="iconCheckSingleOff"
  true-icon="iconCheckSingleOn"
/>
\`\`\`
`;
</script>

<template>
  <!-- [props] (***default값 {}로 표시)
    false-icon - 비활성화 아이콘
    true-icon - 활성화 아이콘
    label - label 텍스트
    rules -> 유효성 검사 후 error 노출
  -->

  <div>
    <GuideTitle text="checkbox" />
    <UiCheckbox label="checkbox" />
    <UiCheckbox label="checkbox required" :rules="[required]" />
    <ContentRenderer :value="guideMarkdown1" />
    <UiCheckbox label="오늘 하루 열지 않음" hide-details false-icon="iconCheckSingleOff" true-icon="iconCheckSingleOn" />
    <ContentRenderer :value="guideMarkdown2" />
  </div>
</template>
