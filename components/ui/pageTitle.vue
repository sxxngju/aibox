<script setup>
const props = defineProps({
  title: {
    type: String
  },
  desc: {
    type: String
  }
});
</script>
<template>
  <div class="page-title">
    <div class="container-fix">
      <h1>{{ title }}</h1>
      <p class="desc">{{ desc }}</p>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
// @import url('/assets/scss/layout/header.scss');
.page-title {
  overflow: hidden;
  position: relative;
  height: 180px;
  background-color: #fef7ed;
  h1 {
    line-height: 1;
    font-weight: 400;
    font-family: 'SBAggro';
  }
  p {
    margin-top: $base-spacer * 0.5;
    font-size: $font-size-md;
    color: $color-text-sub;
  }
  .icon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(calc(-100% + $page-width * 0.5));
    height: 100%;
  }
  .container-fix {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  &.dictation {
    .container-fix {
      background: #fef7ed url(@/assets/images/bg-top-dictation.svg) center right no-repeat;
    }
  }
  &.reduction {
    .container-fix {
      background: #fef7ed url(@/assets/images/bg-top-reduction.svg) center right no-repeat;
    }
  }
  &.cs {
    .container-fix {
      background: #fef7ed url(@/assets/images/bg-top-cs.svg) center right no-repeat;
    }
  }
}
</style>
