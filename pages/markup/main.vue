<script setup>
definePageMeta({
  layout: 'main'
});

const filterByType = ref(0);
const filterByOrder = ref(0);
</script>

<template>
  <section class="main-section" id="popular-contents">
    <UiTitle>
      <SvgColorIconPopularContents />
      <h2>인기 콘텐츠</h2>
    </UiTitle>
    <!-- !NOTE : UiCard요소에 style="background-image: url({{ 이미지 경로 }})"형태로 넣어주세요 -->
    <!-- !NOTE : 외부링크인 경우 UiCard target="_blank"를 추가해주세요 -->
    <div class="cards popular">
      <UiCard title="받아쓰기" type="text" href="#" style="background-image: url('../_nuxt/assets/images/bg-popular-contents-01.png')">
        <SvgSolidIconPlainArrow title="선 화살표" />
        <p>급수, 자주 쓰는 문장을 자동으로 선별해서 말해줘요.</p>
      </UiCard>
      <UiCard
        title="교과평어"
        type="text"
        style="background-image: url('../_nuxt/assets/images/bg-popular-contents-02.png')"
        href="#"
        target="_blank"
      >
        <SvgSolidIconPlainArrow title="선 화살표" />
        <p>선생님의 업무 경감 도우미 막막한 업무에서 해방시켜 드립니다.</p>
      </UiCard>
      <UiCard
        title="AI 매일수학"
        type="text"
        style="background-image: url('../_nuxt/assets/images/bg-popular-contents-03.png')"
        href="#"
        target="_blank"
      >
        <SvgSolidIconPlainArrow title="선 화살표" />
        <p>학생 맞춤형 문제 출제 AI 분석 리포트 제공</p>
      </UiCard>
      <UiCard
        title="행동발달"
        type="text"
        style="background-image: url('../_nuxt/assets/images/bg-popular-contents-04.png')"
        href="#"
        target="_blank"
      >
        <SvgSolidIconPlainArrow title="선 화살표" />
        <p>급수, 자주 쓰는 문장을 자동으로 선별해서 말해줘요.</p>
      </UiCard>
      <UiCard
        title="이미지 생성"
        type="text"
        style="background-image: url('../_nuxt/assets/images/bg-popular-contents-05.png')"
        href="#"
        target="_blank"
      >
        <SvgSolidIconPlainArrow title="선 화살표" />
        <p>원하는 이미지를 AI로 직접 생성해 보세요.</p>
      </UiCard>
      <UiCard
        title="AI 컬러링"
        type="text"
        style="background-image: url('../_nuxt/assets/images/bg-popular-contents-06.png')"
        href="#"
        target="_blank"
      >
        <SvgSolidIconPlainArrow title="선 화살표" />
        <p>색칠하기 준비는 여기서! 생성형 AI로 간단하게 만들어 보세요.</p>
      </UiCard>
    </div>
    <UiBtn class="btn-more" size="large" :block="true" append-icon="iconArrowDown">더보기</UiBtn>
  </section>
  <section class="main-section" id="recommend-service">
    <UiTitle>
      <SvgColorIconRecommendService />
      <h2>추천 서비스</h2>
    </UiTitle>
    <div class="recommend-services">
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-no-img.png" />
        <div class="text-wrap">
          <p class="item-title">이미지 없는 경우</p>
          <p class="item-desc">이미지 없는 경우</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-get-gpt.png" />
        <div class="text-wrap">
          <p class="item-title">Get GPT</p>
          <p class="item-desc">사용자가 코딩 없이도 생성형 AI 앱을 만들 수 있도록 돕는 서비스</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-canva.png" />
        <div class="text-wrap">
          <p class="item-title">CANVA</p>
          <p class="item-desc">프레젠테이션, 소셜 미디어 등 손쉽게 디자인</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-adove-express.png" />
        <div class="text-wrap">
          <p class="item-title">Adove Express</p>
          <p class="item-desc">이미지, 비디오 등을 빠르고 쉽게 제작 가능</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-microsoft-azure.png" />
        <div class="text-wrap">
          <p class="item-title">Microsoft Azure AI</p>
          <p class="item-desc">검색, 찾아보기, 쓰기 및 액션 & API 오퍼링</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-chat-gpt.png" />
        <div class="text-wrap">
          <p class="item-title">Chat GPT</p>
          <p class="item-desc">다양한 주제에 대해 대화를 할 수 있는 인공지능 모델</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-wrtn.png" />
        <div class="text-wrap">
          <p class="item-title">뤼튼</p>
          <p class="item-desc">누구나 쉽게 사용할 수 있는 생성 AI 플랫폼 서비스</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-Google-Copilot.png" />
        <div class="text-wrap">
          <p class="item-title">Google Copilot</p>
          <p class="item-desc">이미지 인식, 음성 변환과 같은 서비스를 손쉽게 이용</p>
        </div>
      </a>
      <a href="#" class="item" target="_blank">
        <v-img class="ai-logo" src="@/assets/images/logo-dall-e.png" />
        <div class="text-wrap">
          <p class="item-title">DALL·E</p>
          <p class="item-desc">OpenAI에서 개발한 인공지능 이미지 생성 모델</p>
        </div>
      </a>
    </div>
    <UiBtn class="btn-more" size="large" :block="true" append-icon="iconArrowDown">더보기</UiBtn>
  </section>
  <section class="main-section" id="reduction">
    <UiTitle>
      <SvgColorIconReduction />
      <h2>업무경감</h2>
      <v-btn-toggle mandatory class="filter-type" v-model="filterByType">
        <UiBtn>전체</UiBtn>
        <UiBtn>교육</UiBtn>
        <UiBtn>업무</UiBtn>
        <UiBtn>기타</UiBtn>
        <UiBtn>좋아요</UiBtn>
      </v-btn-toggle>

      <v-btn-toggle class="filter-order" v-model="filterByOrder" mandatory>
        <UiBtn variant="text">최신순</UiBtn>
        <UiBtn variant="text">조회수</UiBtn>
        <UiBtn variant="text">좋아요</UiBtn>
      </v-btn-toggle>
    </UiTitle>
    <div class="search-box">
      <UiInput placeholder="검색어를 입력해주세요." clearable />
      <UiBtn class="btn-icon" variant="text"><SvgSolidIconSearch /></UiBtn>
    </div>
    <!-- !NOTE : 데이터 없을 때 노출해주세요. -->
    <UiNoData text="컨텐츠를 등록해주세요."><SvgColorIconAiBoxGray /></UiNoData>
    <div class="cards reduction">
      <!-- !NOTE
        1. "좋아요" 인 게시물은 .is-like 클래스 추가 해주세요
        2. 교육 - card-edu / 업무 - card-work / 기타 - card-etc 클래스를 추가해주세요.
        3. color-orange / color-blue / color-green 클래스를 추가해주세요.
      -->
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-edu color-orange" href="#">
        <UiBadge>교육</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">
            최대 2줄 까지 노출 됩니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque earum eligendi excepturi
            veritatis accusamus dolorem debitis eaque exercitationem soluta, iusto et odio! Id,
          </p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <!-- <span><SvgSolidIconLike />9,999</span> -->
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-edu color-blue is-like" href="#">
        <UiBadge>교육</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">1줄인 경우</p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <span><SvgSolidIconLike />9,999</span>
        </template>
      </UiCard>
      <UiCard
        title="최대 2줄 까지 노출 됩니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        class="item card-edu color-green"
        href="#"
      >
        <UiBadge>교육</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
          <UiChip class="type-hashtag">#2줄로 떨어질 때</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">
            최대 2줄 까지 노출 됩니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque earum eligendi excepturi
            veritatis accusamus dolorem debitis eaque exercitationem soluta, iusto et odio! Id,
          </p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <!-- <span><SvgSolidIconRecreate />9,999</span> -->
          <span><SvgSolidIconLike />9,999</span>
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-work color-orange" href="#">
        <UiBadge>업무</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">
            최대 2줄 까지 노출 됩니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque earum eligendi excepturi
            veritatis accusamus dolorem debitis eaque exercitationem soluta, iusto et odio! Id,
          </p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <!-- <span><SvgSolidIconLike />9,999</span> -->
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-work color-blue is-like" href="#">
        <UiBadge>업무</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">1줄인 경우</p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <span><SvgSolidIconLike />9,999</span>
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-work color-green" href="#">
        <UiBadge>업무</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">
            최대 2줄 까지 노출 됩니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque earum eligendi excepturi
            veritatis accusamus dolorem debitis eaque exercitationem soluta, iusto et odio! Id,
          </p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <!-- <span><SvgSolidIconLike />9,999</span> -->
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-etc color-orange" href="#">
        <UiBadge>기타</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">
            최대 2줄 까지 노출 됩니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque earum eligendi excepturi
            veritatis accusamus dolorem debitis eaque exercitationem soluta, iusto et odio! Id,
          </p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <!-- <span><SvgSolidIconLike />9,999</span> -->
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-etc color-blue is-like" href="#">
        <UiBadge>기타</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">1줄인 경우</p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <span><SvgSolidIconLike />9,999</span>
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-etc color-green" href="#">
        <UiBadge>기타</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">
            최대 2줄 까지 노출 됩니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque earum eligendi excepturi
            veritatis accusamus dolorem debitis eaque exercitationem soluta, iusto et odio! Id,
          </p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <!-- <span><SvgSolidIconLike />9,999</span> -->
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-edu" href="#">
        <UiBadge>교육</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">배경 없는 경우입니다.</p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <span><SvgSolidIconLike />9,999</span>
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-work is-like" href="#">
        <UiBadge>업무</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">배경 없는 경우입니다.</p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <span><SvgSolidIconLike />9,999</span>
        </template>
      </UiCard>
      <UiCard title="파워포인트 작성을 한 방에!" class="item card-etc" href="#">
        <UiBadge>기타</UiBadge>
        <div class="chips">
          <UiChip class="type-hashtag">#파워포인트</UiChip>
          <UiChip class="type-hashtag">#스크립트</UiChip>
          <UiChip class="type-hashtag">#프롬프트</UiChip>
        </div>
        <div class="text-wrap">
          <p class="desc">배경 없는 경우입니다.</p>
          <span class="date">2024. 04. 25</span>
        </div>
        <template #cardFooter>
          <span><SvgSolidIconPwView />1.6만</span>
          <span><SvgSolidIconRecreate />9,999</span>
          <span><SvgSolidIconLike />9,999</span>
        </template>
      </UiCard>
    </div>
    <UiPagination :length="10" />
  </section>
</template>

<style lang="scss">
@import url(@/assets/scss/pages/main.scss);
</style>
