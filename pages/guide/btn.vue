<script setup lang="ts">
definePageMeta({
  layout: 'guide'
});

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiBtn class="btn-primary">primary 버튼</UiBtn>
<UiBtn class="btn-secondary">secondary 버튼</UiBtn>
<UiBtn class="btn-third">third 버튼</UiBtn>
<UiBtn variant="text">text 버튼</UiBtn>
\`\`\`
`;
let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiBtn prepend-icon="iconSearch" append-icon="iconSearch">기본 버튼</UiBtn>
<UiBtn class="btn-icon"><SvgSolidIconSearch /></UiBtn>
\`\`\`
`;
let guideMarkdown3 = await markdownParser.parse(null, guide3);
const guide3 = `
\`\`\`html
<UiBtn size="small">small</UiBtn>
<UiBtn>default</UiBtn>
<UiBtn size="large">large</UiBtn>
<UiBtn class="btn-icon" size="small"><SvgSolidIconLogin /></UiBtn>
<UiBtn class="btn-icon"><SvgSolidIconLogin /></UiBtn>
<UiBtn class="btn-icon" size="large"><SvgSolidIconLogin /></UiBtn>
\`\`\`
`;
let guideMarkdown4 = await markdownParser.parse(null, guide4);
const guide4 = `
\`\`\`html
<v-btn-toggle class="size-small">
  <UiBtn type="submit">토글 버튼 .size-small</UiBtn>
</v-btn-toggle>
<v-btn-toggle class="size-default">
  <UiBtn type="submit">토글 버튼 .size-default</UiBtn>
</v-btn-toggle>
<v-btn-toggle class="size-large">
  <UiBtn type="submit">토글 버튼 .size-large</UiBtn>
</v-btn-toggle>
<v-btn-toggle mandatory> /* radio와 비슷 */
  <UiBtn type="submit">토글 버튼</UiBtn>
  <UiBtn type="submit">토글 버튼</UiBtn>
</v-btn-toggle>
\`\`\`
`;
let guideMarkdown5 = await markdownParser.parse(null, guide5);
const guide5 = `
\`\`\`html
<v-btn-group>
  <UiBtn>버튼1</UiBtn>
  <UiBtn>버튼2</UiBtn>
  <UiBtn>버튼3</UiBtn>
</v-btn-group>
\`\`\`
`;
let guideMarkdown6 = await markdownParser.parse(null, guide6);
const guide6 = `
\`\`\`html
<UiBtns>
  <UiBtn>버튼1</UiBtn>
  <UiBtn>버튼2</UiBtn>
  <UiBtn>버튼3</UiBtn>
</UiBtns>
\`\`\`
`;
</script>

<template>
  <div>
    <GuideTitle text="type" />
    <UiBtn>기본 버튼</UiBtn>
    <UiBtn class="btn-primary">primary 버튼</UiBtn>
    <UiBtn class="btn-secondary">secondary 버튼</UiBtn>
    <UiBtn class="btn-third">third 버튼</UiBtn>
    <UiBtn variant="text">text 버튼</UiBtn>
    <ContentRenderer :value="guideMarkdown1" />

    <GuideTitle text="with icon" />
    <p>**icon만 사용 시 btn-icon 클래스 삽입</p>
    <UiBtn prepend-icon="iconSearch" append-icon="iconSearch">기본 버튼</UiBtn>
    <UiBtn class="btn-icon">
      <SvgSolidIconSearch />
    </UiBtn>
    <ContentRenderer :value="guideMarkdown2" />

    <GuideTitle text="size" />
    <UiBtn size="small">small</UiBtn>
    <UiBtn>default</UiBtn>
    <UiBtn size="large">large</UiBtn>
    <UiBtn class="btn-icon" size="small"><SvgSolidIconLogin /></UiBtn>
    <UiBtn class="btn-icon"><SvgSolidIconLogin /></UiBtn>
    <UiBtn class="btn-icon" size="large"><SvgSolidIconLogin /></UiBtn>
    <ContentRenderer :value="guideMarkdown3" />

    <GuideTitle text="toggle" />
    <v-btn-toggle class="size-small">
      <UiBtn type="submit">토글 버튼 .size-small</UiBtn>
    </v-btn-toggle>
    <v-btn-toggle class="size-default">
      <UiBtn type="submit">토글 버튼 .size-default</UiBtn>
    </v-btn-toggle>
    <v-btn-toggle class="size-large">
      <UiBtn type="submit">토글 버튼 .size-large</UiBtn>
    </v-btn-toggle>
    <v-btn-toggle mandatory>
      <UiBtn>토글 버튼 mandatory</UiBtn>
      <UiBtn>토글 버튼 mandatory</UiBtn>
    </v-btn-toggle>
    <ContentRenderer :value="guideMarkdown4" />

    <GuideTitle text="group" />
    <v-btn-group>
      <UiBtn>버튼1</UiBtn>
      <UiBtn>버튼2</UiBtn>
      <UiBtn>버튼3</UiBtn>
    </v-btn-group>
    <ContentRenderer :value="guideMarkdown5" />

    <GuideTitle text="btns" />
    <UiBtns>
      <UiBtn>버튼1</UiBtn>
      <UiBtn>버튼2</UiBtn>
      <UiBtn>버튼3</UiBtn>
    </UiBtns>
    <ContentRenderer :value="guideMarkdown6" />
  </div>
</template>
