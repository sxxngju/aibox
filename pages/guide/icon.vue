<script setup>
definePageMeta({
  layout: 'guide'
});

// guide source view : markdown
import markdownParser from '@nuxt/content/transformers/markdown';
let guideMarkdown1 = await markdownParser.parse(null, guideColor);
let guideMarkdown2 = await markdownParser.parse(null, guideSolid);

const guideColor = `
\`\`\`vue
  <!-- 컬러로 사용되는 아이콘-->
  <SvgSolidIconLogo title="로고" />
  <SvgColorIconSmile title="읽어주기" />
  <SvgColorIconWrite title="받아쓰기" />
  <SvgColorIconDocument title="회의록" />
  <SvgColorIconErrorPage title="에러 페이지" />
  <SvgColorIconPositive title="긍정" />
  <SvgColorIconNegative title="부정" />
  <SvgColorIconPopularContents title="인기 콘텐츠" />
  <SvgColorIconRecommendService title="추천 서비스" />
  <SvgColorIconReduction title="업무경감" />
  <SvgColorIconAiBoxGray title="회색 로고" />
  <SvgColorIconBlank title="교사인증 불가" />
\`\`\`
`;
const guideSolid = `
\`\`\`vue
  <!--버튼 사용 시 : 버튼 내부에서 아이콘 호출해서 사용합니다.-->
  <UiBtnText title="위로" class="btn-icon"><SvgSolidIconArrowUp /></UiBtnText>

  <!-- 아이콘별 컴포넌트 명-->
  <SvgSolidIconArrowUp title="위로" />
  <SvgSolidIconArrowDown title="아래로" />
  <SvgSolidIconArrowBack title="이전" />
  <SvgSolidIconArrowNext title="다음" />
  <SvgSolidIconCaretBack title="Back" />
  <SvgSolidIconCaretDown title="CaretDown" />
  <SvgSolidIconClose title="닫기" />
  <SvgSolidIconCopy title="복사하기" />
  <SvgSolidIconDelete title="삭제" />
  <SvgSolidIconFirst title="처음으로" />
  <SvgSolidIconInfo title="더보기" />
  <SvgSolidIconLast title="마지막으로" />
  <SvgSolidIconLike title="좋아요" />
  <SvgSolidIconCaretNext title="다음" />
  <SvgSolidIconNotice title="주의" />
  <SvgSolidIconPlus title="더보기" />
  <SvgSolidIconPwView title="암호보기" />
  <SvgSolidIconRecreate title="새로고침" />
  <SvgSolidIconPrint title="프린트" />
  <SvgSolidIconFilter title="필터" />
  <SvgSolidIconPlay title="재생" />
  <SvgSolidIconPlayRounded title="둥근 재생" />
  <SvgSolidIconPause title="정지" />
  <SvgSolidIconAi title="AI" />
  <SvgSolidIconMagicWand title="요술봉" />
  <SvgSolidIconMagicWandLg title="요술봉 Large" />
  <SvgSolidIconLogin title="로그인" />
  <SvgSolidIconLogout title="로그아웃" />
  <SvgSolidIconEditInfo title="회원정보 수정" />
  <SvgSolidIconGoTop title="맨 위로" />
  <SvgSolidIconSingleCheck title="선 없는 체크박스" />
  <SvgSolidIconShare title="공유" />
\`\`\`
`;
</script>

<template>
  <UiSection>
    <GuideTitle text="Icon" />
    <GuideTitle text="고유 컬러로 사용되는 아이콘" level="3" />
    <SvgSolidIconLogo title="로고" />
    <SvgColorIconSmile title="읽어주기" />
    <SvgColorIconWrite title="받아쓰기" />
    <SvgColorIconDocument title="회의록" />
    <SvgColorIconErrorPage title="에러 페이지" />
    <SvgColorIconPositive title="긍정" />
    <SvgColorIconNegative title="부정" />
    <SvgColorIconPopularContents title="인기 콘텐츠" />
    <SvgColorIconRecommendService title="추천 서비스" />
    <SvgColorIconReduction title="업무경감" />
    <SvgColorIconAiBoxGray title="회색 로고" />
    <SvgColorIconBlank title="교사인증 불가" />
    <ContentRenderer :value="guideMarkdown1" />

    <GuideTitle text="버튼 내부에서 주로 사용되는 아이콘" level="3" />
    <SvgSolidIconArrowUp title="위로" />
    <SvgSolidIconArrowDown title="아래로" />
    <SvgSolidIconArrowBack title="이전" />
    <SvgSolidIconArrowNext title="다음" />
    <SvgSolidIconCaretBack title="Back" />
    <SvgSolidIconCaretDown title="CaretDown" />
    <SvgSolidIconClose title="닫기" />
    <SvgSolidIconCopy title="복사하기" />
    <SvgSolidIconDelete title="삭제" />
    <SvgSolidIconFirst title="처음으로" />
    <SvgSolidIconInfo title="더보기" />
    <SvgSolidIconLast title="마지막으로" />
    <SvgSolidIconLike title="좋아요" />
    <SvgSolidIconCaretNext title="다음" />
    <SvgSolidIconNotice title="주의" />
    <SvgSolidIconPlus title="더보기" />
    <SvgSolidIconPwView title="암호보기" />
    <SvgSolidIconRecreate title="새로고침" />
    <SvgSolidIconPrint title="프린트" />
    <SvgSolidIconFilter title="필터" />
    <SvgSolidIconPlay title="재생" />
    <SvgSolidIconPlayRounded title="둥근 재생" />
    <SvgSolidIconPause title="정지" />
    <SvgSolidIconAi title="AI" />
    <SvgSolidIconMagicWand title="요술봉" />
    <SvgSolidIconMagicWandLg title="요술봉 Large" />
    <SvgSolidIconLogin title="로그인" />
    <SvgSolidIconLogout title="로그아웃" />
    <SvgSolidIconEditInfo title="회원정보 수정" />
    <SvgSolidIconGoTop title="맨 위로" />
    <SvgSolidIconSingleCheck title="선 없는 체크박스" />
    <SvgSolidIconPlainIcon title="선 화살표" />
    <SvgSolidIconShare title="공유" />
    <ContentRenderer :value="guideMarkdown2" />
  </UiSection>
</template>

<style scoped lang="scss">
.icon {
  margin: 0 20px;
}
</style>
