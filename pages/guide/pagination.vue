<script setup lang="ts">
definePageMeta({
  layout: 'guide'
});

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiPagination :length="갯수" />
\`\`\`
`;
</script>
<template>
  <div>
    <GuideTitle text="pagination" />
    <UiPagination :length="10" />

    <ContentRenderer :value="guideMarkdown1" />
  </div>
</template>
