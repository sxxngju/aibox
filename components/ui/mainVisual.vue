<script setup></script>

<template>
  <article class="main-visual">
    <div class="inner">
      <div class="text-wrap">
        <p>교실에 <strong>혁신</strong>을,</p>
        <p>일상에 <strong>여유</strong>를</p>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.main-visual {
  position: relative;
  width: 100vw;
  height: 310px;
  margin-bottom: $base-spacer * 6;
  background-color: #2b3045;

  &::before {
    content: '';
    position: absolute;
    top: -70px;
    left: calc((50% + 50px) - ($page-width * 0.5));
    z-index: 1007;
    width: 240px;
    height: 259px;
    background: url(@/assets/images/img-paper-plane.svg) center no-repeat;
  }

  .inner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $page-width;
    height: 100%;
    margin: 0 auto;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      bottom: -63px;
      left: -46px;
      width: 532px;
      height: 325px;
      background: url(@/assets/images/img-main-visual-left.svg) center no-repeat;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -32px;
      right: -40px;
      width: 470px;
      height: 342px;
      background: url(@/assets/images/img-main-visual-right.svg) center no-repeat;
    }

    .text-wrap {
      p {
        font-size: 52px;
        font-weight: 500;
        color: $white;
        font-family: 'SBAggro';
        line-height: 1;

        & > strong {
          color: $color-primary;
        }

        &:first-child {
          padding-right: 147px;
          margin-bottom: 9px;
        }
        &:last-child {
          padding-left: 162px;
        }
      }
    }
  }
}
</style>
