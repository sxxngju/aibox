<script setup>
definePageMeta({
  layout: 'guide'
});

const required = value => !!value || '* 필수항목입니다. 내용을 입력해주세요.';
const modal = ref(true);

import markdownParser from '@nuxt/content/transformers/markdown';

let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiPopup v-modal="modal">
  <div class="dialog">
    <div class="popup-header">
      <h2>제목을 들어갑니다</h2>
    </div>
    <div class="popup-body">
      팝업 컨텐츠가 들어갑니다. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis rem veniam laborum dolores non
      corrupti saepe voluptate vero, ullam, modi accusantium reiciendis ducimus magni incidunt, dolor et facere repellat
      nesciunt.
    </div>
    <div class="popup-footer"><UiBtn @click="modal = false">닫기</UiBtn></div>
  </div>
</UiPopup>
\`\`\`
`;
</script>

<template>
  <div>
    <GuideTitle text="Popup" />
    <UiPopup v-modal="modal">
      <div class="dialog">
        <div class="popup-header">
          <h2>제목이 들어갑니다</h2>
        </div>
        <div class="popup-body">
          팝업 컨텐츠가 들어갑니다. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis rem veniam laborum dolores non
          corrupti saepe voluptate vero, ullam, modi accusantium reiciendis ducimus magni incidunt, dolor et facere repellat nesciunt.
        </div>
        <div class="popup-footer"><UiBtn @click="modal = false">닫기</UiBtn></div>
      </div>
    </UiPopup>

    <ContentRenderer :value="guideMarkdown1" />
  </div>
</template>

<style lang="scss"></style>
