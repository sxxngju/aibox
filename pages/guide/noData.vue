<script setup>
definePageMeta({
  layout: 'guide'
});

// guide source view : markdown
import markdownParser from '@nuxt/content/transformers/markdown';
let guideMarkdown1 = await markdownParser.parse(null, guide1);

const guide1 = `
\`\`\`html
<!-- 게시판, 아코디언 데이터 없는 경우 -->
<UiNoData />
<!-- 텍스트 변경 하는경우 -->
<UiNoData text="등록된 게시물이 없습니다." />
<!-- 아이콘, 텍스트 변경 하는경우 -->
<UiNoData text="컨텐츠를 등록해주세요."><SvgColorIconAiBoxGray /></UiNoData>
\`\`\`
`;
</script>

<template>
  <GuideTitle text="no data" />
  <section>
    <GuideTitle text="아코디언 내부 사용" level="3" />
    <UiNoData />
    <UiNoData text="컨텐츠를 등록해주세요."><SvgColorIconAiBoxGray /></UiNoData>
    <ContentRenderer :value="guideMarkdown1" />
  </section>
</template>
