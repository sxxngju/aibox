<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<style lang="scss">
//@import '/assets/scss/molecules/accordion.scss';
.accordion {
  border-top: 2px solid $color-gray-700;
  border-bottom: 1px solid $color-gray-700;

  &:nth-child(n + 2) {
    margin-top: $base-spacer;
  }
  .item {
    border-bottom: 1px solid $color-gray-300;
  }
  .no-data {
    padding: $base-spacer * 2 $base-spacer * 4;
    height: 360px;
    background-color: $color-bg-default;
  }
  h3 {
    flex: 1;
    font-size: $font-size-md;
    font-weight: 400;
    // transition: font-weight 500ms cubic-bezier(0.17, 0.67, 0.6, 0.93);
  }
  .active {
    h3 {
      font-weight: 700;
    }
    .arrow {
      transform: rotate(180deg);
    }
    .pane {
      height: auto;
      padding: $base-spacer * 4;
      border-top: 1px solid $color-gray-300;
    }
    .action::before {
      font-weight: 700;
    }
  }
  .action {
    display: flex;
    align-items: center;
    //gap: $base-gutter * 1.5;
    position: relative;
    padding: $base-spacer * 2 $base-spacer * 4;
    width: 100%;
    text-align: left;
    line-height: 1.5;

    span {
      color: $color-gray-600;
      font-size: $font-size-sm;
    }
  }
  .arrow {
    display: inline-block;
    margin-left: auto;
    width: 24px;
    height: 24px;
    transition: all 500ms cubic-bezier(0.17, 0.67, 0.6, 0.93);
  }
  .pane {
    overflow: hidden;
    height: 0;
    padding-inline: $base-spacer * 4;
    background-color: $color-bg-gray;
    transition: all 500ms cubic-bezier(0.17, 0.67, 0.6, 0.93);
  }
  &.type-qna {
    .action {
      &::before {
        content: 'Q.';
        margin-top: 2px;
        margin-right: $spacer-inline;
        align-self: flex-start;
        font-size: $font-size-md;
      }
    }
  }
}
</style>
