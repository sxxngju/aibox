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
is-button='버튼에 들어갈 텍스트' -> UiBtnText버튼을 삽입해줍니다.
size="small | {default} | large" -> .v-input--size-{}클래스 부여 small | {default} | large
placeholder="내용" -> prepend-inner 슬롯으로 처리 함.
\`\`\`
`;
let guideMarkdown1 = await markdownParser.parse(null, guide1);
const guide1 = `
\`\`\`html
<UiFileInput label="default" />
<UiFileInput label="size small" size="small" />
<UiFileInput label="size default" size="default" />
<UiFileInput label="size large" size="large" />
<UiFileInput label="is button" is-button="파일 첨부" />
<UiFileInput label="is multiple" multiple />
<UiFileInput label="is chips" chips />
<UiFileInput label="is counter" counter />
<UiFileInput label="is show-size" show-size />
<UiFileInput label="is error" :rules="[required]" />
<UiFileInput placeholder="placeholder"></UiFileInput>
\`\`\`
`;
let guideMarkdown2 = await markdownParser.parse(null, guide2);
const guide2 = `
\`\`\`html
<UiFileInput class="with-list" multiple is-button="파일 첨부" placeholder="최대 5개, 50MB를 초과할 수 없음" />
<ul class="file-list">
  <li>
    img.jpg (5kb)
    <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
  </li>
  <li>
    img.jpg (5kb)
    <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
  </li>
  <li>
    img.jpg (5kb)
    <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
  </li>
  <li>
    img.jpg (5kb)
    <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
  </li>
  <li>
    img.jpg (5kb)
    <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
  </li>
</ul>
\`\`\`
`;
</script>

<template>
  <!-- [props] (***default값 {}로 표시)
    append-icon, prepend-icon -> 인풋 밖에 icon 생성 (1개씩 가능) {prepend-icon="$file"}
    append-inner-icon, prepend-inner-icon -> 인풋 안에 icon 생성 (1개씩 가능)
    messages -> 하단 메세지 노출
    rules -> 유효성 검사 후 error 노출
    show-size -> 파일의 크기 노출 (multiple과 함께 사용 시 각각 파일의 크기 노출)
    counter -> 파일 개수 노출 (show-size와 함께 사용 시 전체 파일 크기 함께 노출)
    accept -> 파일 종류 ignore 가능
    multiple -> 파일 업로드 여러개 가능
    chips -> 뱃지 형식으로 업로드 된 파일 노출 (multiple과 함께 사용 가능)
  -->
  <ContentRenderer :value="guideMarkdown0" />

  <div>
    <GuideTitle text="file Input" />
    <UiFileInput label="default" />
    <UiFileInput label="size small" size="small" />
    <UiFileInput label="size default" size="default" />
    <UiFileInput label="size large" size="large" />
    <UiFileInput label="is button" is-button="파일 첨부" />
    <UiFileInput label="is multiple" multiple />
    <UiFileInput label="is chips" chips />
    <UiFileInput label="is counter" counter />
    <UiFileInput label="is show-size" show-size />
    <UiFileInput label="is error" :rules="[required]" />
    <UiFileInput placeholder="placeholder"></UiFileInput>
    <ContentRenderer :value="guideMarkdown1" />
  </div>

  <div>
    <GuideTitle text="aibox file input" />
    <UiFileInput class="with-list" multiple is-button="파일 첨부" placeholder="최대 5개, 50MB를 초과할 수 없음" />
    <ul class="file-list">
      <li>
        img.jpg (5kb)
        <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
      </li>
      <li>
        img.jpg (5kb)
        <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
      </li>
      <li>
        img.jpg (5kb)
        <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
      </li>
      <li>
        img.jpg (5kb)
        <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
      </li>
      <li>
        img.jpg (5kb)
        <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
      </li>
    </ul>
    <ContentRenderer :value="guideMarkdown2" />
  </div>
</template>

<style lang="scss"></style>
