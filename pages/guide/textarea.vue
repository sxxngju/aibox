<script setup>
definePageMeta({
  layout: 'guide'
});

const required = value => !!value || 'Field is required';

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiTextarea placeholder="default"></UiTextarea>
<UiTextarea placeholder="is error" :rules="[required]"></UiTextarea>
<UiTextarea placeholder="no-resize" no-resize></UiTextarea>
<UiTextarea placeholder="is counter" counter></UiTextarea>
<UiTextarea placeholder="clearable" clearable></UiTextarea>
\`\`\`
`;
</script>

<template>
  <GuideTitle text="textarea" />
  <UiTextarea placeholder="default"></UiTextarea>
  <UiTextarea placeholder="is error" :rules="[required]"></UiTextarea>
  <UiTextarea placeholder="no-resize" no-resize></UiTextarea>
  <UiTextarea placeholder="is counter" counter></UiTextarea>
  <UiTextarea placeholder="clearable" clearable></UiTextarea>
  <ContentRenderer :value="guideMarkdown1" />
</template>
