<script setup>
onMounted(() => {
  useWindowSize();
});
</script>

<template>
  <div class="wrapper guide">
    <GuideHeader />
    <div class="container">
      <main class="container-fix">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.container-fix {
  // display: flex;
  flex-wrap: nowrap;
  width: $page-width;
  margin: 0 auto;
}

.guide {
  padding-bottom: 50px;
  header {
    margin-bottom: $base-spacer * 2;
    background-color: $color-gray-900;

    h1 {
      padding: $base-spacer * 4 0 0 $base-spacer * 8;
      color: $white;
      font-size: 60px;
      font-weight: 100;
      text-transform: uppercase;
    }
  }
  .container {
    margin: 0 auto;
  }
  section {
    flex-grow: 1;
    flex-basis: 25%;
  }

  .guide-contents {
    display: flex;
    gap: $base-gutter * 2;

    a {
      display: block;
      color: $color-text-default;
      padding: $base-spacer;
      //border-bottom:1px solid $color-border-light;
      &:hover {
        color: $color-primary;
      }
    }
  }
  /* 스타일을 정의할 전역 CSS 파일 */

  pre {
    background-color: #0a0a0a; /* 프리포맷 코드 블록의 배경 색상 */
    color: #0a0a0a; /* 코드 텍스트 색상 */
    padding: 0.1em 1em; /* 프리포맷 코드 블록의 패딩 */
    border-radius: 8px; /* 프리포맷 코드 블록의 모서리 둥글게 */
    overflow: auto; /* 코드 블록이 길 경우 가로 스크롤 */
    max-height: 200px;
    margin: 1em 0;
  }
}
</style>
