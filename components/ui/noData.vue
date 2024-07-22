<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '등록된 내용이 없습니다'
  }
});
</script>

<template>
  <div class="no-data">
    <slot>
      <SvgColorIconNoData title="" />
    </slot>
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss">
//@import '/assets/scss/molecules/no-data.scss';
.no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    margin: $base-spacer * 2 0;
    color: $color-gray-400;
    font-size: $font-size-md;
    text-align: center;
  }
}
</style>
