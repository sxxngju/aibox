<script setup>
definePageMeta({
  layout: 'default'
});

// import LayerReductionCaution from './layerReductionCaution.vue';
</script>

<template>
  <!-- !NOTE 개발 요구사항
        1. 첫번째 .divided-box에 focused -> default
        2. form 입력 완료 시 버튼 disabled = false
        3. 첫번째 .divided-box의 자동생성 버튼을 클릭 시 focused클래스 제거
        4. 두번째 .divided-box에 focused클래스 삽입 + <UiTextarea />에 데이터 삽입
        부탁드립니다.
    -->
  <div class="divide-container">
    <div class="divided-box focused">
      <UiTitle>
        <SvgColorIconDocument />
        <h2>아~편해 회의록 생성기</h2>
        <UiBtns class="extra">
          <v-btn-toggle class="size-small">
            <UiBtn variant="text" size="small" toggle class="btn-icon color-gray" title="좋아요">
              <SvgSolidIconLike />
            </UiBtn>
          </v-btn-toggle>
          <LayerReductionCaution />
          <UiBtn variant="text" size="small" class="btn-icon" title="공유하기">
            <SvgSolidIconShare />
          </UiBtn>
        </UiBtns>
      </UiTitle>
      <p class="desc">회의록 작성을 위한 툴/회의 내용 요약, 정리</p>
      <div class="chips">
        <UiChip class="work">업무</UiChip>
        <UiChip class="edu">교육</UiChip>
        <UiChip class="etc">기타</UiChip>
        <UiChip variant="outlined">#회의록</UiChip>
      </div>
      <UiSection class="reduction-wrap">
        <UiBtn size="small" class="btn-delete-all btn-secondary">전체 지우기</UiBtn>
        <v-form>
          <div class="write-list">
            <UiFormItem title="일시" class="fluid">
              <p class="desc">회의 날짜와 회의 시간을 입력해 주세요.</p>
              <UiInput placeholder="2024년 5월 27일 토요일 14:00 ~ 16:00" />
            </UiFormItem>
            <UiFormItem title="장소" class="fluid">
              <p class="desc">회의가 이루어진 장소를 입력해 주세요</p>
              <UiInput placeholder="아이스크림미디어 본사, 교직원 회의실, 온라인 회의 등" />
            </UiFormItem>
            <UiFormItem title="select" class="fluid">
              <p class="desc">case : select</p>
              <UiSelect placeholder="학년/학기" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
            </UiFormItem>
            <UiFormItem title="textarea" class="fluid">
              <p class="desc">case : textarea</p>
              <UiTextarea placeholder="default"></UiTextarea>
            </UiFormItem>
            <UiFormItem title="checkbox" class="fluid">
              <p class="desc">case : checkbox</p>
              <UiCheckbox label="checkbox1" />
              <UiCheckbox label="checkbox2" />
              <UiCheckbox label="checkbox3" />
              <UiCheckbox label="checkbox4" />
            </UiFormItem>
            <UiBtn class="btn-primary" disabled :block="true" size="large" prepend-icon="iconMagicWand">자동 생성</UiBtn>
          </div>
        </v-form>
        <div class="info-wrap">
          <span>현재 글자수 : 0자 (0 byte)</span>
          <span>입력 가능 토큰 : 0/1,000</span>
          <p>토큰 수가 넘치면 텍스트가 잘릴 수 있어요.</p>
        </div>
      </UiSection>
    </div>
    <div class="divided-box">
      <UiFormExtras class="reduction-result">
        <UiTextarea auto-grow hide-details placeholder="" rows="1" readonly />
        <div class="reduction-guide">
          <SvgSolidIconMagicWandLg />
          <p>데이터 입력 후<br />자동생성을 눌러보세요!</p>
        </div>
        <div class="info-wrap">
          <span>공백 제외<strong>100자</strong></span>
          <span>공백 포함<strong>100자</strong></span>
          <UiBtn variant="text" class="btn-icon color-gray"><SvgSolidIconCopy /></UiBtn>
        </div>
      </UiFormExtras>
      <UiFormExtras class="reduction-result">
        <UiTextarea auto-grow hide-details placeholder="" rows="1" readonly />
        <div class="reduction-guide">
          <SvgSolidIconMagicWandLg />
          <p>데이터 입력 후<br />자동생성을 눌러보세요!</p>
        </div>
        <div class="info-wrap">
          <span>공백 제외<strong>100자</strong></span>
          <span>공백 포함<strong>100자</strong></span>
          <UiBtn variant="text" class="btn-icon color-gray"><SvgSolidIconCopy /></UiBtn>
        </div>
      </UiFormExtras>
      <UiFormExtras class="reduction-result">
        <UiTextarea auto-grow hide-details placeholder="" rows="1" readonly />
        <div class="reduction-guide">
          <SvgSolidIconMagicWandLg />
          <p>데이터 입력 후<br />자동생성을 눌러보세요!</p>
        </div>
        <div class="info-wrap">
          <span>공백 제외<strong>100자</strong></span>
          <span>공백 포함<strong>100자</strong></span>
          <UiBtn variant="text" class="btn-icon color-gray"><SvgSolidIconCopy /></UiBtn>
        </div>
      </UiFormExtras>
      <UiFormExtras class="reduction-result">
        <UiTextarea auto-grow hide-details placeholder="" rows="1" readonly />
        <div class="reduction-guide">
          <SvgSolidIconMagicWandLg />
          <p>데이터 입력 후<br />자동생성을 눌러보세요!</p>
        </div>
        <div class="info-wrap">
          <span>공백 제외<strong>100자</strong></span>
          <span>공백 포함<strong>100자</strong></span>
          <UiBtn variant="text" class="btn-icon color-gray"><SvgSolidIconCopy /></UiBtn>
        </div>
      </UiFormExtras>
    </div>
  </div>
</template>

<style lang="scss">
@import url(@/assets/scss/pages/reduction.scss);
</style>
