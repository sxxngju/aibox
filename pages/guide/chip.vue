<script setup>
definePageMeta({
  layout: 'guide'
});

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiChip class="work">업무</UiChip>
<UiChip class="edu">교육</UiChip>
<UiChip class="etc">기타</UiChip>
<UiChip variant="outlined">#회의록</UiChip>
\`\`\`
`;
let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiBadge>1학년 2학기</UiBadge>
\`\`\`
`;
</script>
<template>
  <GuideTitle text="chip" />
  <div class="chips">
    <UiChip class="work">업무</UiChip>
    <UiChip class="edu">교육</UiChip>
    <UiChip class="etc">기타</UiChip>
    <UiChip variant="outlined">#회의록</UiChip>
    <ContentRenderer :value="guideMarkdown1" />
  </div>

  <GuideTitle text="badge" />
  <UiBadge>1학년 2학기</UiBadge>
  <ContentRenderer :value="guideMarkdown2" />
</template>
