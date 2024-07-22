<script setup>
definePageMeta({
  layout: 'error'
});
</script>

<template>
  <div class="error-page">
    <SvgColorIconErrorPage title="에러 페이지 아이콘" />
    <h2>일시적인 오류가 발생하였습니다.</h2>
    <p>잠시 후 다시 실행해주시기 바랍니다.<br />서비스 이용에 불편을 드려 죄송합니다.</p>
  </div>
</template>

<style lang="scss">
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h2 {
    margin-top: $base-spacer * 4;
  }
  p {
    margin-top: $base-spacer * 2;
    text-align: center;
    font-size: $font-size-md;
    color: $color-text-sub;
  }
}
</style>
