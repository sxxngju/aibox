<template>
  <v-menu transition="scroll-y-reverse-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <UiBtn variant="text" size="small" title="정보" class="btn-icon" v-bind="props">
        <SvgSolidIconInfo />
      </UiBtn>
    </template>
    <div class="popup-follow layer-dictation-guide">
      <div class="popup-body">
        <div class="content">
          <h3 class="title">자음자</h3>
          <table class="table">
            <colgroup>
              <col width="64" span="6" />
            </colgroup>
            <thead>
              <tr>
                <th>쓸 때</th>
                <th>읽을 때</th>
                <th>쓸 때</th>
                <th>읽을 때</th>
                <th>쓸 때</th>
                <th>읽을 때</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ㄱ</td>
                <td>기역</td>
                <td>ㅂ</td>
                <td>비읍</td>
                <td>ㅋ</td>
                <td>키읔</td>
              </tr>
              <tr>
                <td>ㄴ</td>
                <td>니은</td>
                <td>ㅅ</td>
                <td>시옷</td>
                <td>ㅌ</td>
                <td>티읕</td>
              </tr>
              <tr>
                <td>ㄷ</td>
                <td>디귿</td>
                <td>ㅇ</td>
                <td>이응</td>
                <td>ㅍ</td>
                <td>피읖</td>
              </tr>
              <tr>
                <td>ㄹ</td>
                <td>리을</td>
                <td>ㅈ</td>
                <td>지읒</td>
                <td>ㅎ</td>
                <td>히읗</td>
              </tr>
              <tr>
                <td>ㅁ</td>
                <td>미음</td>
                <td>ㅊ</td>
                <td>치읓</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content">
          <h3 class="title">모음자</h3>
          <table class="table">
            <colgroup>
              <col width="64" span="4" />
            </colgroup>
            <thead>
              <tr>
                <th>쓸 때</th>
                <th>읽을 때</th>
                <th>쓸 때</th>
                <th>읽을 때</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ㅏ</td>
                <td>아</td>
                <td>ㅛ</td>
                <td>요</td>
              </tr>
              <tr>
                <td>ㅑ</td>
                <td>야</td>
                <td>ㅜ</td>
                <td>우</td>
              </tr>
              <tr>
                <td>ㅓ</td>
                <td>어</td>
                <td>ㅠ</td>
                <td>유</td>
              </tr>
              <tr>
                <td>ㅕ</td>
                <td>여</td>
                <td>ㅡ</td>
                <td>으</td>
              </tr>
              <tr>
                <td>ㅗ</td>
                <td>오</td>
                <td>ㅣ</td>
                <td>이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </v-menu>
</template>

<style lang="scss">
.layer-dictation-guide {
  border-radius: $base-radius;
  border: 2px solid var(--Color-Style-Border-Border_dark, #464b53);
  background: var(--Color-Style-Background-Bg_white, #fff);

  /* box shadow */
  box-shadow: $drop-shadow-layer;
  padding: $base-spacer * 2 $base-spacer * 3 $base-spacer * 3;
  margin: $base-spacer * 1.5 0;
  .popup-header {
    margin-bottom: $base-spacer * 3;
  }

  .popup-body {
    display: flex;
    gap: $base-gutter;

    h3 {
      font-size: $font-size-base;
      margin-bottom: $base-spacer * 1.5;
    }

    .table {
      tr {
        &:first-child {
          th {
            border-top: 1px solid $color-border-light;
          }
        }
        th,
        td {
          height: 40px;
          text-align: center;
          font-size: $font-size-xsm;
          border-right: 1px solid $color-border-light;
          border-bottom: 1px solid $color-border-light;

          &:first-child {
            border-left: 1px solid $color-border-light;
          }

          &:nth-child(odd) {
            background-color: $color-bg-default;
          }
        }
      }
    }
  }
}
</style>
