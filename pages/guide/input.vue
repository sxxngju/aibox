<script setup>
definePageMeta({
  layout: 'guide'
});

const required = value => !!value || 'Field is required';

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown0 = await markdownParser.parse(null, guide0);
const guide0 = `
\`\`\`html
[custom props]
size="small | {default} | large" -> .v-input--size-{}클래스 부여 small | {default} | large
\`\`\`
`;
let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiInput placeholder="default" />
<UiInput placeholder="is label" label="is label" />
<UiInput placeholder="size small" size="small" />
<UiInput placeholder="size default" size="default" />
<UiInput placeholder="size large" size="large" />
<UiInput placeholder="outside icons" prepend-icon="iconInfo" append-icon="iconInfo" />
<UiInput placeholder="inside icons" prepend-inner-icon="iconInfo" append-inner-icon="iconInfo" />
<UiInput placeholder="clearable" clear-icon="$clear" clearable />
<UiInput placeholder="is message" messages="message" />
<UiInput placeholder="is error" :rules="[required]" />
<UiInput placeholder="disabled" disabled />
<UiInput placeholder="readonly" readonly />
<UiInput placeholder="counter & maxlength" maxlength="20" counter="20" />
<UiInput placeholder="prefix" prefix="prefix" />
<UiInput placeholder="suffix" suffix="suffix" />
<UiInput placeholder="hint" hint="hint" />
\`\`\`
`;

let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiInput placeholder="type=[text]" type="text" />
<UiInput placeholder="type=[email]" type="email" />
<UiInput placeholder="type=[number]" type="number" />
<UiInput placeholder="type=[date]" type="date" />
<UiInput placeholder="type=[password]" type="password" />
\`\`\`
`;
</script>

<template>
  <ContentRenderer :value="guideMarkdown0" />

  <GuideTitle text="input" />
  <UiInput placeholder="default" />
  <UiInput placeholder="is label" label="is label" />
  <UiInput placeholder="size small" size="small" />
  <UiInput placeholder="size default" size="default" />
  <UiInput placeholder="size large" size="large" />
  <UiInput placeholder="outside icons" prepend-icon="iconInfo" append-icon="iconInfo" />
  <UiInput placeholder="inside icons" prepend-inner-icon="iconInfo" append-inner-icon="iconInfo" />
  <UiInput placeholder="clearable" clear-icon="$clear" clearable />
  <UiInput placeholder="is message" messages="message" />
  <UiInput placeholder="is error" :rules="[required]" />
  <UiInput placeholder="disabled" disabled />
  <UiInput placeholder="readonly" readonly />
  <UiInput placeholder="counter & maxlength" maxlength="20" counter="20" />
  <UiInput placeholder="prefix" prefix="prefix" />
  <UiInput placeholder="suffix" suffix="suffix" />
  <UiInput placeholder="hint" hint="hint" />
  <ContentRenderer :value="guideMarkdown1" />

  <GuideTitle text="type" />
  <UiInput placeholder="type=[text]" type="text" />
  <UiInput placeholder="type=[email]" type="email" />
  <UiInput placeholder="type=[number]" type="number" />
  <UiInput placeholder="type=[date]" type="date" />
  <UiInput placeholder="type=[password]" type="password" />
  <ContentRenderer :value="guideMarkdown2" />
</template>
