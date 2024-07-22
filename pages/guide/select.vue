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
\`\`\``;

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiSelect
  placeholder="학년/학기"
  :items="[
    'California',
    'Colorado',
    'Florida',
    'Georgia',
    'Texas',
    'Wyoming',
    'California1',
    'Colorado2',
    'Florida3',
    'Georgia4',
    'Texas5',
    'Wyoming6',
    'California3',
    'Colorado56',
    'Florida24',
    'Georgia123',
    'Texas13',
    'Wyoming14'
  ]"
/>
<UiSelect placeholder="학년/학기" size="small" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
<UiSelect placeholder="학년/학기" size="default" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
<UiSelect placeholder="학년/학기" size="large" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
<UiSelect placeholder="학년/학기" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" disabled />
<UiSelect placeholder="학년/학기" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" readonly />
<UiSelect placeholder="학년/학기" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" :rules="[required]" />
\`\`\``;
</script>

<template>
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.6.10/dist/vuetify.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/vuetify@3.6.10/dist/vuetify.min.js"></script> -->
  <!-- [props] (***default값 {}로 표시)
    menu-icon -> 셀렉트 아이콘을 정해줍니다. {$dropdown}

    [custom]
    size="small | {default} | large" .v-input--size-{}클래스 부여 small | {default} | large
  -->

  <div>
    <GuideTitle text="select" />
    <UiSelect
      placeholder="학년/학기"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
        'California1',
        'Colorado2',
        'Florida3',
        'Georgia4',
        'Texas5',
        'Wyoming6',
        'California3',
        'Colorado56',
        'Florida24',
        'Georgia123',
        'Texas13',
        'Wyoming14'
      ]"
    />
    <UiSelect placeholder="학년/학기" size="small" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
    <UiSelect placeholder="학년/학기" size="default" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
    <UiSelect placeholder="학년/학기" size="large" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
    <UiSelect placeholder="학년/학기" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" disabled />
    <UiSelect placeholder="학년/학기" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" readonly />
    <UiSelect placeholder="학년/학기" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" :rules="[required]" />
    <ContentRenderer :value="guideMarkdown1" />
  </div>
</template>
