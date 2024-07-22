<script setup>
const handleRouting = data => {
  switch (data) {
    case '시공테크':
      window.open('https://www.sigongtech.co.kr/index.do');
      break;
    case '아이스크림미디어':
      window.open('https://www.i-screammedia.com/index.do');
      break;
    case '아이스크림에듀':
      window.open('https://www.i-screamedu.co.kr/index.do');
      break;
    case '아이스크림키즈':
      window.open('https://www.littlehome-learn.com/');
      break;
    case '시공문화':
      window.open('http://sigongmunhwa.co.kr/');
      break;
    default:
      break;
  }
};
const familySite = ref(null);
</script>
<template>
  <v-footer class="footer">
    <div class="container-fix">
      <div class="footer-header">
        <v-list>
          <v-list-item>
            <router-link to="/cs?tab=agreement">이용약관</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/cs?tab=privacy-policy">개인정보처리방침</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/cs?tab=partnership">고객센터</router-link>
          </v-list-item>
        </v-list>
        <UiSelect
          v-model="familySite"
          @update:model-value="handleRouting"
          placeholder="패밀리 사이트"
          :items="['시공테크', '아이스크림미디어', '아이스크림에듀', '아이스크림키즈', '시공문화']"
          hide-details
        />
      </div>
      <div class="footer-body">
        <v-list>
          <v-list-item>(주)아이스크림미디어</v-list-item>
          <v-list-item>대표이사 : 허주환</v-list-item>
          <v-list-item>사업자등록번호 : 123-12314-123123</v-list-item>
          <v-list-item>통신판매업신고 : 2011-경기성남-1785</v-list-item>
          <v-list-item class="fluid">주소 : 경기도 성남시 분당구 판교역로 255-20(삼평동)</v-list-item>
        </v-list>
      </div>
      <div class="footer-footer">© i-Screammedia.</div>
    </div>
    <UiBtn @click="useScroll('.wrapper')" class="btn-icon go-top" variant="text"><SvgSolidIconGoTop /></UiBtn>
  </v-footer>
</template>

<style lang="scss">
// @import url('/assets/scss/layout/header.scss');
.footer {
  z-index: 1;
  background-color: $color-gray-200;
  padding: $base-spacer * 2.5 0;
  flex: 0;

  &::after {
    content: '';
    position: absolute;
    top: -88px;
    left: calc((50% + 97px) + ($page-width * 0.5));
    z-index: -1;
    width: 153px;
    height: 174px;
    background: url(@/assets/images/img-footer-ai.svg) center no-repeat;
  }

  .v-btn {
    &.go-top {
      position: absolute;
      top: -93px;
      left: calc((50% + 140px) + ($page-width * 0.5));
      transform: translateY(-100%);
      width: 68px;
      height: 68px;
      color: $color-gray-300;

      &:hover {
        color: $color-primary;
      }
    }
  }

  .v-list {
    display: flex;
    background-color: transparent;
    padding: 0;

    .v-list-item {
      padding: 0;
      min-height: 0;
    }
  }

  .footer-header {
    display: flex;
    align-items: center;

    .v-select {
      max-width: 240px;
      margin-left: auto;
    }

    .v-list-item {
      a {
        color: $color-text-default;
        font-weight: 700;
        &:hover {
          color: $color-primary;
        }
      }

      &:not(:first-child)::before {
        content: '';
        width: 2px;
        height: 2px;
        margin: 0 $base-spacer;
        background-color: $color-text-default;
      }
    }
  }

  .footer-body {
    margin-top: $base-spacer;
    .v-list {
      row-gap: $base-gutter;
      flex-wrap: wrap;

      .v-list-item {
        color: $color-text-default;
        &:not(:first-child, .fluid)::before {
          content: '';
          width: 1px;
          height: 14px;
          margin: 0 $base-spacer * 1.5;
          background-color: $color-border-default;
        }
        &.fluid {
          flex: 1 1 100%;
        }
      }
    }
  }

  .footer-footer {
    margin-top: $base-spacer;
    color: $color-text-sub2;
  }
}
</style>
