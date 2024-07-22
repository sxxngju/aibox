<script setup>
definePageMeta({
  layout: 'guide'
});

const required = value => !!value || 'Field is required';

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiFormItem title="default">
  <UiInput placeholder="내용을 입력하세요" />
</UiFormItem>
\`\`\`
`;

let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiFormItem title="is required" class="required">
  <UiInput placeholder="내용을 입력하세요" :rules="[required]" />
</UiFormItem>
\`\`\`
`;

let guideMarkdown3 = await markdownParser.parse(null, guide3);
const guide3 = `
\`\`\`html
<UiFormItem title="is desc">
  <p class="desc">회의 날짜와 회의 시간을 입력해 주세요.</p>
  <UiInput placeholder="2024년 5월 27일 토요일 14:00 ~ 16:00" />
</UiFormItem>
\`\`\`
`;
</script>

<template>
  <!-- [props]
    size-auto클래스 삽입 시 해당 요소가 영역 만큼 늘어납니다.
  -->
  <div>
    <GuideTitle text="form item" />
    <UiFormItem title="default">
      <UiInput placeholder="내용을 입력하세요" />
    </UiFormItem>
    <ContentRenderer :value="guideMarkdown1" />

    <UiFormItem title="is required" class="required">
      <UiInput placeholder="내용을 입력하세요" :rules="[required]" />
    </UiFormItem>
    <ContentRenderer :value="guideMarkdown2" />

    <UiFormItem title="is desc">
      <p class="desc">회의 날짜와 회의 시간을 입력해 주세요.</p>
      <UiInput placeholder="2024년 5월 27일 토요일 14:00 ~ 16:00" />
    </UiFormItem>
    <ContentRenderer :value="guideMarkdown3" />
  </div>
</template>

<style></style>
