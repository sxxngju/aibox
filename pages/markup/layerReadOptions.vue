<script setup>
// 옵션선택 버튼그룹 임시 부여
const toggle1 = ref(1);
const toggle2 = ref(2);
const toggle3 = ref(1);
const toggle4 = ref(1);
</script>
<template>
  <v-menu transition="scroll-y-reverse-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <UiTooltip text="읽기 목소리/속도/범위를 선택합니다.">
        <UiBtn title="필터" class="btn-primary btn-icon" v-bind="props">
          <SvgSolidIconFilter />
        </UiBtn>
      </UiTooltip>
    </template>
    <div class="popup-follow layer-read-options">
      <div class="popup-header">
        <h3>읽어주기 옵션</h3>
      </div>
      <div class="popup-body">
        <v-form>
          <div class="optional-list">
            <div class="optional-item">
              <strong class="title">목소리</strong>
              <v-btn-toggle divided v-model="toggle1">
                <UiBtn>남자1</UiBtn>
                <UiBtn>여자1</UiBtn>
                <UiBtn>남자2</UiBtn>
                <UiBtn>여자2</UiBtn>
              </v-btn-toggle>
            </div>
            <div class="optional-item">
              <strong class="title">읽기 속도</strong>
              <v-btn-toggle divided v-model="toggle2">
                <UiBtn>느리게</UiBtn>
                <UiBtn>보통</UiBtn>
                <UiBtn>빠르게</UiBtn>
              </v-btn-toggle>
            </div>
            <div class="optional-item">
              <strong class="title">반복</strong>
              <v-btn-toggle divided v-model="toggle3">
                <UiBtn>없음</UiBtn>
                <UiBtn>2회</UiBtn>
                <UiBtn>3회</UiBtn>
              </v-btn-toggle>
            </div>
            <div class="optional-item">
              <strong class="title">범위 지정</strong>
              <v-btn-toggle divided v-model="toggle4">
                <UiBtn>전체</UiBtn>
                <UiBtn>지정</UiBtn>
              </v-btn-toggle>
            </div>
            <!-- !TODO 위 범위 지정 옵션에서 '지정' 선택 시 show -->
            <div class="optional-item range"><UiInput value="1" class="short" /> 번 부터 <UiInput value="10" class="short" /> 번 까지</div>
          </div>
        </v-form>
      </div>
    </div>
  </v-menu>
</template>

<style lang="scss">
.layer-read-options {
  border-radius: $base-radius;
  border: 2px solid var(--Color-Style-Border-Border_dark, #464b53);
  background: var(--Color-Style-Background-Bg_white, #fff);

  /* box shadow */
  box-shadow: $drop-shadow-layer;
  padding: $base-spacer * 3 $base-spacer * 4 $base-spacer * 4 $base-spacer * 4;
  margin: $base-spacer * 1.5 0;
  .popup-header {
    margin-bottom: $base-spacer * 3;
  }
}
.optional-list {
  width: 450px;
  .optional-item {
    display: flex;
    align-items: center;
    margin: $base-spacer * 3 0 0;
    gap: $base-gutter;
    &.range {
      width: 75%;
      margin-left: auto;
    }
  }

  .v-btn-group {
    flex: 0 0 75%;
    margin-left: auto;
    .v-btn {
      flex-grow: 1;
      font-size: $font-size-base;
      font-weight: 400;
      background-color: $color-bg-default;
      color: $color-text-sub;
      &.v-btn--active {
        background-color: $color-text-default;
        color: $white;
        font-weight: 700;
      }
    }
  }
}
</style>
