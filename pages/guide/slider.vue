<script setup>
definePageMeta({
  layout: 'guide'
});

const isSelected = false;
const model = ref(null);
</script>

<template>
  <GuideTitle text="v-slider-group" />
  <v-slide-group show-arrows v-model="model">
    <v-slide-group-item v-for="n in 10" :key="n" v-slot="{ isSelected, toggle }">
      <div :class="['slider-item', { active: isSelected }]" @click="toggle">
        <UiBadge>1학년 2학기{{ isSelected }}</UiBadge>
        <UiTitle><h4>소중한 책을 소개해요</h4></UiTitle>
        <table class="table">
          <colgroup>
            <col width="32" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>1</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>2</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>3</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>4</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>5</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>6</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>7</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>8</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>9</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
            <tr>
              <th>10</th>
              <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-slide-group-item>
  </v-slide-group>
</template>

<style lang="scss">
.v-slide-group {
  position: relative;
  width: 100%;
  background-color: $color-gray-100;
  border-radius: $base-radius * 2;
  border-start-start-radius: 0;
  padding: $base-spacer * 9.5 $base-spacer * 4 0;

  .v-slide-group__prev,
  .v-slide-group__next {
    position: absolute;
    top: $base-spacer * 3;
    right: $base-spacer * 4;
    width: 36px;
    height: 36px;
    min-width: 0;
    background-color: $white;
    border-radius: 100%;
    border: 1px solid $black;
  }

  .v-slide-group__prev {
    right: 84px;
  }

  .v-slide-group__container {
    min-height: 700px;
  }

  .v-slide-group__content {
    padding-bottom: $base-spacer * 4;
  }

  .slider-item {
    position: relative;
    width: calc((($page-width - $base-spacer * 4 * 2) * 0.25) - $base-gutter);
    margin-right: $base-gutter;
    padding: $base-spacer * 5.5 $base-spacer * 1.5 $base-spacer * 3.5;
    background-color: $white;
    border-radius: $base-radius;
    border-start-start-radius: 0;
    box-shadow: $drop-shadow-default;
    box-sizing: border-box;
    border: 2px solid transparent;
    cursor: pointer;

    &.active,
    &.v-slide-group-item--active {
      border-color: $color-primary;
      .badge {
        background-color: $color-primary;
      }
    }

    .sub-title {
      margin-bottom: $base-spacer * 1.5;
      text-align: center;
      h4 {
        font-size: $font-size-md;
      }
    }

    .badge {
      position: absolute;
      top: 0;
      left: 0;
      padding-right: $base-spacer * 1.5;
    }

    .table {
      width: 100%;
      border: 1px solid $color-border-light;

      tr {
        &:last-child {
          th,
          td {
            border-bottom: none;
          }
        }
      }

      th,
      td {
        padding: $base-spacer $base-spacer;
        border-bottom: 1px solid $color-border-light;
        font-size: $font-size-sm;
      }
      th {
        padding: 0px;
        padding-top: $base-spacer;
        border-right: 1px solid $color-border-light;
        background-color: $color-bg-default;
        vertical-align: top;
        white-space: nowrap;
      }
    }
  }
}
</style>
