<script setup>
definePageMeta({
  layout: 'guide'
});

// guide source view : markdown
import markdownParser from '@nuxt/content/transformers/markdown';
let guideMarkdown1 = await markdownParser.parse(null, guide1);
let guideMarkdown2 = await markdownParser.parse(null, guide2);
let guideMarkdown3 = await markdownParser.parse(null, guide3);
let guideMarkdown4 = await markdownParser.parse(null, guide4);
let guideMarkdown5 = await markdownParser.parse(null, guide5);

const guide1 = `
\`\`\`html
<UiCard title="This is the title">
  body contents area
</UiCard>
\`\`\`
`;
const guide2 = `
\`\`\`html
<UiCard title="This is the title" append="append item" prepend="prepend item">
  body contents area
  // footer 영역 사용하는 경우 아래 template 추가
  <template v-slot:cardFooter> card footer contents area </template>
</UiCard>
\`\`\`
`;
const guide3 = `
\`\`\`html
// type="text" 추가시 라인 삭제됨.
<UiCard type="text" title="This is the title" append="append" prepend="prepend">
  body contents area
  // footer 영역 사용하는 경우 아래 template 추가
  <template v-slot:cardFooter> card footer contents area </template>
</UiCard>
\`\`\`
`;
const guide4 = `
\`\`\`html
// bgColor 옵션으로 컬러를 제어합니다.
//option : primary / secondary /black / white
<UiCard bgColor="primary" title="bgColor primary">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
</UiCard>
\`\`\`
`;
const guide5 = `
\`\`\`html
// textColor 옵션으로 컬러를 제어합니다.
//option : primary / secondary /black / white
<UiCard textColor="primary" title="textColor primary">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
</UiCard>
\`\`\`
`;
</script>

<template>
  <section>
    <GuideTitle text="card" />
    <GuideTitle text="default" level="3" />
    <UiCard title="This is the title">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
    </UiCard>
    <ContentRenderer :value="guideMarkdown1" />

    <GuideTitle text="header + extra" level="4" />
    <UiCard title="This is the title" append="append item" prepend="prepend item">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>

      <template v-slot:cardFooter> card footer contents area </template>
    </UiCard>
    <ContentRenderer :value="guideMarkdown2" />

    <!-- <GuideTitle text="text - " level="4" />
    <UiCard type="text" title="This is the title" append="append" prepend="prepend">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>

      <template v-slot:cardFooter> card footer contents area </template>
    </UiCard>
    <ContentRenderer :value="guideMarkdown3" /> -->
  </section>

  <section>
    <GuideTitle text="bgColor" level="3" />
    <v-row>
      <v-col>
        <UiCard bgColor="primary" title="bgColor primary">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
        </UiCard>
      </v-col>
      <v-col>
        <UiCard bgColor="secondary" title="bgColor secondary">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
        </UiCard>
      </v-col>

      <v-col>
        <UiCard bgColor="white" title="bgColor white">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
        </UiCard>
      </v-col>

      <v-col>
        <UiCard bgColor="black" title="bgColor black">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
        </UiCard>
      </v-col>
    </v-row>
    <ContentRenderer :value="guideMarkdown4" />
  </section>
  <section>
    <GuideTitle text="textColor" level="3" />
    <v-row>
      <v-col>
        <UiCard textColor="primary" title="textColor primary">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
        </UiCard>
      </v-col>
      <v-col>
        <UiCard textColor="secondary" title="textColor secondary">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
        </UiCard>
      </v-col>
      <v-col>
        <UiCard textColor="black" title="textColor black">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>
        </UiCard>
      </v-col>
    </v-row>
    <ContentRenderer :value="guideMarkdown5" />
  </section>
</template>
