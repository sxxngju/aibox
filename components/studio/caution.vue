<template>
  <v-menu transition="scroll-y-reverse-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <UiBtn variant="text" size="small" title="정보" class="btn-icon" v-bind="props">
        <SvgSolidIconInfo />
      </UiBtn>
    </template>
    <div class="popup-follow">
      <div class="popup-header">
        <h3><SvgSolidIconNotice /> 이용하기에 앞서 주의해주세요!</h3>
      </div>
      <div class="popup-body">
        <p class="dot">실제 정보 외 잘못된 정보를 생성할 수 있습니다.</p>
        <p class="dot">개인정보나 프라이버시가 침해될 수 있는 내용은 지양해주세요.</p>
      </div>
    </div>
  </v-menu>
</template>

<style lang="scss">
.popup-follow {
  border-radius: 10px;
  border: 2px solid var(--Color-Style-Border-Border_dark, #464b53);
  background: var(--Color-Style-Background-Bg_white, #fff);

  /* box shadow */
  box-shadow: 8px 8px 12px 0px rgba(0, 0, 0, 0.15);
  padding: $base-spacer * 3;
  margin: $base-spacer * 1.5 0;
  .popup-header {
    margin-bottom: 10px;
    h3 {
      display: flex;
      align-items: center;
      gap: $base-spacer * 0.5;
      font-size: $font-size-lg;
      color: $color-primary;

      .icon {
        height: 24px;
        line-height: 1;
      }
    }
  }

  .popup-body {
    p {
      font-size: $font-size-sm;
      color: $color-text-sub;
    }
  }
}

.dot {
  position: relative;
  padding-left: 24px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: $base-spacer;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: $color-text-sub;
  }
}
</style>
