<script setup>
definePageMeta({
  layout: 'guide'
});
// guide source view : markdown
import markdownParser from '@nuxt/content/transformers/markdown';
let guideMarkdown1 = await markdownParser.parse(null, guide1);
let guideMarkdown2 = await markdownParser.parse(null, guide2);

const guide1 = `
\`\`\`html
<UiAccordion>
  <!-- 1/2 데이터 없는 경우 -->
  <UiNoData />
  <!-- 2/2 데이터 있는 경우 -->
  <UiAccordionItem title="default title">
    <p>contents</p>
  </UiAccordionItem>

  <!-- append="append item" -->
  <UiAccordionItem title="append case" append="append item">
    <p>contents</p>
  </UiAccordionItem>
  <!-- prepend="prepend item" -->
  <UiAccordionItem title="prepend case" prepend="prepend item">
    <p>contents</p>
  </UiAccordionItem>
</UiAccordion>
\`\`\`
`;
const guide2 = `
\`\`\`html
// target="arrow"
<UiAccordion>
  <UiAccordionItem title="This is the title Tag div" target="arrow">
    <p>contents</p>
  </UiAccordionItem>
</UiAccordion>
\`\`\`
`;
</script>

<template>
  <GuideTitle text="accordion" />
  <section>
    <!-- <GuideTitle text="default" level="3" /> -->
    <UiAccordion>
      <!-- 1/2 데이터 없는 경우 -->
      <UiNoData />
      <!-- 2/2 데이터 있는 경우 -->
      <UiAccordionItem title="default title">
        <p>contents</p>
      </UiAccordionItem>
      <UiAccordionItem title="append case" append="append item">
        <p>contents</p>
      </UiAccordionItem>
      <UiAccordionItem title="prepend case" prepend="prepend item">
        <p>contents</p>
      </UiAccordionItem>
      <UiAccordionItem title="append / prepend case" append="append item" prepend="prepend item">
        <p>contents</p>
      </UiAccordionItem>
    </UiAccordion>
    <ContentRenderer :value="guideMarkdown1" />
  </section>
  <!-- <section>
    <GuideTitle text="화살표 영역만 클릭 사용" level="3" />
    <UiAccordion>
      <UiAccordionItem title="This is the title Tag div" target="arrow" append="append item" prepend="prepend item">
        <p>contents</p>
      </UiAccordionItem>
      <UiAccordionItem title="This is the title Tag div" target="arrow" append="append item" prepend="prepend item">
        <p>contents</p>
      </UiAccordionItem>
    </UiAccordion>
    <ContentRenderer :value="guideMarkdown2" />
  </section> -->
</template>
