<script setup>
const { isOpen } = storeToRefs(useModalStore());
</script>
<template>
  <v-dialog class="popup-multi" persistent transition="dialog-center-transition" width="auto">
    <slot />
  </v-dialog>
</template>
<style lang="scss">
.popup-multi {
  .v-overlay__content {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: $base-spacer * 4;
  }
  .dialog {
    max-width: 400px;
    padding: 0;
    overflow: hidden;
    background-color: $white;
    border-radius: $base-radius;
  }

  .popup-body {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    // aspect-ratio: 1/1;
    width: 100%;
    // height: 334px;
    background-color: #ddd;

    .popup-link {
      width: 100%;
      height: 100%;
    }

    .v-img {
      height: 100%;
      cursor: pointer;
    }
  }

  .popup-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 46px;
    margin-top: 0;
    padding-left: 20px;
    background-color: $white;

    .v-checkbox {
      .v-label {
        font-size: $font-size-xsm;
      }
      .v-checkbox-btn {
        &.v-selection-control--dirty {
          color: $color-primary;
        }
        &.v-selection-control--density-default {
          --v-selection-control-size: 20px;
          min-width: var(--v-selection-control-size);
          .icon {
            width: var(--v-selection-control-size);
            height: var(--v-selection-control-size);
          }
        }
        .v-selection-control__wrapper {
          margin-right: 1px;
        }
      }
    }
  }
}
</style>
