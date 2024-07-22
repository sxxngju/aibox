<script setup>
definePageMeta({
  layout: 'guide'
});

const alert = ref(false);
const alert2 = ref(false);

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiBtn @click="alert = true">Alert</UiBtn>
<UiAlert v-model="alert" @modal-closed="alert = false" message="alert!" status="success"> </UiAlert>
\`\`\`
`;
let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiBtn @click="alert = true">Alert</UiBtn>
<UiAlert v-model="alert" @modal-closed="alert = false" message="alert!" status="success" no-footer> </UiAlert>
\`\`\`
`;
</script>
<template>
  <div>
    <GuideTitle text="Alert" />
    <UiBtn @click="alert = true">Alert</UiBtn>
    <UiAlert v-model="alert" @modal-closed="alert = false" message="alert!" status="success"> </UiAlert>
  </div>
  <ContentRenderer :value="guideMarkdown1" />
  <div>
    <GuideTitle text="no-footer Alert" />
    <UiBtn @click="alert2 = true">Alert</UiBtn>
    <UiAlert v-model="alert2" @modal-closed="alert2 = false" message="alert!" status="success" no-footer> </UiAlert>
    <ContentRenderer :value="guideMarkdown2" />
  </div>
</template>
