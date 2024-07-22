<script setup>
definePageMeta({
  layout: 'guide'
});

// guide source view : markdown
import markdownParser from '@nuxt/content/transformers/markdown';
let guideMarkdown1 = await markdownParser.parse(null, guide1);
let guideMarkdown2 = await markdownParser.parse(null, guide2);
let guideMarkdown3 = await markdownParser.parse(null, guide3);

const guide1 = `
\`\`\`html
  <!--카테고리에 따라 클래스를 변경해 사용합니다. -->
  <UiPageTitle title="AI 업무경감" desc="다양한 주제의 서비스를 만들어보세요." class="dictation"></UiPageTitle>
\`\`\`
`;
const guide2 = `
\`\`\`html
    <UiTitle><h2>기본 h2</h2></UiTitle>
    <UiTitle><h3>기본 GuideTitle</h3></UiTitle>
    <UiTitle><h4>기본 h4</h4></UiTitle>
    <UiTitle><h5>기본 h5</h5></UiTitle>
    <UiTitle><h6>기본 h6</h6></UiTitle>
\`\`\`
`;
const guide3 = `
\`\`\`html
<UiTitle>
  <SvgColorIconWrite />
  <h2>받아쓰기</h2>
  <span class="desc">옵션을 선택하고, 받아쓰기를 찾아보세요.</span>
  <UiBtn variant="text" size="small" title="정보" class="btn-icon">
    <SvgSolidIconInfo />
  </UiBtn>
</UiTitle>
\`\`\`
`;
</script>

<template>
  <section>
    <GuideTitle text="page title">
      <small>페이지내에서 1회 사용</small>
    </GuideTitle>
    <UiPageTitle title="AI 업무경감" desc="다양한 주제의 서비스를 만들어보세요." class="dictation"></UiPageTitle>
    <ContentRenderer :value="guideMarkdown1" />
  </section>
  <section>
    <GuideTitle level="3" text="기본 타이틀"></GuideTitle>
    <UiTitle><h2>기본 h2 : 30px</h2></UiTitle>
    <UiTitle><h3>기본 h3 : 24px</h3></UiTitle>
    <UiTitle><h4>기본 h4 : 18px</h4></UiTitle>
    <!-- <UiTitle><h5>기본 h5</h5></UiTitle>
    <UiTitle><h6>기본 h6</h6></UiTitle> -->
    <ContentRenderer :value="guideMarkdown2" />

    <GuideTitle level="4" text="타이틀 + extra"></GuideTitle>
    <UiTitle>
      <SvgColorIconWrite />
      <h2>받아쓰기</h2>
      <span class="desc">옵션을 선택하고, 받아쓰기를 찾아보세요.</span>
      <UiBtn variant="text" size="small" title="정보" class="btn-icon">
        <SvgSolidIconInfo />
      </UiBtn>
    </UiTitle>
    <ContentRenderer :value="guideMarkdown3" />
  </section>
</template>
