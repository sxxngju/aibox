<script setup>
const prop = defineProps({
  status: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  noFooter: {
    type: Boolean,
    default: false
  }
});
const emits = defineEmits(['modalClosed']);
const { isOpen } = storeToRefs(useModalStore());
</script>

<!-- 모달 팝업 -->
<template>
  <v-dialog v-model="isOpen" class="alert" persistent transition="dialog-center-transition" opacity="0" width="auto">
    <div class="dialog">
      <div class="alert-body">
        <div class="dialog_message">
          <!-- !NOTE : 경우에 따라 icon을 노출 시켜주세요 -->
          <div class="alert-status">
            <SvgColorIconPositive v-if="status === 'success'" title="긍정" />
            <SvgColorIconNegative v-else-if="status === 'error'" title="부정" />
          </div>
          <p>{{ message }}</p>
        </div>
      </div>
      <div v-if="!noFooter" class="alert-footer">
        <UiBtn class="btn-primary" size="small" @click="emits('modalClosed')">확인</UiBtn>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss">
.alert {
  .dialog {
    width: 320px;
    padding: 20px;
    background-color: $white;
    border-radius: $base-radius;
    border: 1px solid $color-border-dark;
  }

  .alert-body {
    .dialog_message {
      padding: 10px 0;
      text-align: center;
      font-size: $font-size-sm;
      font-weight: 500;
    }

    .alert-status {
      margin-bottom: 15px;
      text-align: center;
      line-height: 1;

      .icon {
        display: inline-block;
      }
    }
  }

  .alert-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
}
</style>
