<script setup>
definePageMeta({
  layout: 'guide'
});

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiFormExtras>
  <UiInput placeholder="formExtras" />
  <UiBtn>등록</UiBtn>
</UiFormExtras>
\`\`\`
`;

let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiFormExtras>
  <UiSelect
    class="dictation-filter"
    placeholder="학년/학기"
    menu-icon="iconCaretDown"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
  <UiSelect
    class="dictation-filter"
    placeholder="급수"
    menu-icon="iconCaretDown"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
  <UiSelect
    class="dictation-filter"
    placeholder="주제"
    menu-icon="iconCaretDown"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
  <UiSelect
    class="dictation-filter"
    placeholder="개수"
    menu-icon="iconCaretDown"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
  <UiBtns class="extra">
    <UiBtn variant="text" class="btn-icon" title="검색"><SvgSolidIconSearch /></UiBtn>
    <UiBtn title="AI" class="btn-icon btn-third">
      <SvgSolidIconAi />
    </UiBtn>
  </UiBtns>
</UiFormExtras>
\`\`\`
`;
</script>

<template>
  <div>
    <GuideTitle text="form extras" />
    <UiFormExtras>
      <UiInput placeholder="formExtras" />
      <UiBtn>등록</UiBtn>
    </UiFormExtras>
    <ContentRenderer :value="guideMarkdown1" />

    <UiFormExtras>
      <UiSelect
        placeholder="학년/학기"
        menu-icon="iconCaretDown"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      />
      <UiSelect
        placeholder="급수"
        menu-icon="iconCaretDown"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      />
      <UiSelect
        placeholder="주제"
        menu-icon="iconCaretDown"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      />
      <UiSelect
        placeholder="개수"
        menu-icon="iconCaretDown"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      />
      <UiBtns class="extra">
        <UiBtn variant="text" class="btn-icon" title="검색"><SvgSolidIconSearch /></UiBtn>
        <UiBtn title="AI" class="btn-icon btn-third">
          <SvgSolidIconAi />
        </UiBtn>
      </UiBtns>
    </UiFormExtras>

    <ContentRenderer :value="guideMarkdown2" />
  </div>
</template>

<style></style>
