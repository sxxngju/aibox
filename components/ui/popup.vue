<script setup>
const { isOpen } = storeToRefs(useModalStore());
</script>

<template>
  <v-dialog v-model="isOpen" class="popup" persistent transition="dialog-center-transition" width="auto">
    <slot />
  </v-dialog>
</template>

<style lang="scss">
.popup {
  .v-overlay__content {
    flex-direction: row;
    justify-content: center;
    gap: $base-spacer * 4;
  }
  .dialog {
    width: 680px;
    overflow: hidden;
    padding: $base-spacer * 4;
    background-color: $white;
    border-radius: $base-radius;
  }

  .popup-header {
    margin-bottom: $base-spacer * 4;
    &:empty {
      margin-bottom: 0;
    }
    h2 {
      font-size: $font-size-base;
      text-align: center;
      font-weight: 700;
    }
  }

  .page-btn {
    margin-top: $base-spacer * 4;
    .v-btn {
      min-width: 130px;
    }
  }

  .popup-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: $base-spacer * 4;

    .v-btn {
      width: 140px;
    }

    &:empty {
      margin-top: 0;
    }
  }
}
</style>
