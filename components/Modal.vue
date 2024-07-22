<script setup>
const { modalData, closeModal } = useModalStore();
const emits = defineEmits(['handleAction', 'modalClosed']);
const closeModalAndEmit = () => {
  emits('modalClosed', closeModal());
};
</script>

<!-- 모달 팝업 -->
<template>
  <v-dialog class="modal" v-model="modalData.isOpen" persistent transition="dialog-center-transition" width="auto">
    <div class="dialog">
      <div class="modal-header">
        <slot name="header">
          <div class="title">
            <span class="text-center">{{ title }}</span>
            <i class="ico ico_size_lg close_30" @click="closeModalAndEmit"></i>
          </div>
        </slot>
      </div>
      <div class="modal-body">
        <slot name="body">
          <div class="dialog_message">
            {{ modalData.message }}
          </div>
        </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <div class="dialog_btn_wrap">
            <v-btn v-if="modalData.buttonLabels[0]" rounded flat class="secondary" @click="closeModalAndEmit">
              {{ modalData.buttonLabels[0] }}
            </v-btn>
            <v-btn v-if="modalData.buttonLabels[1]" class="primary" flat rounded @click="$emit('handleAction')">
              {{ modalData.buttonLabels[1] }}
            </v-btn>
          </div>
        </slot>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss">
.modal {
  .dialog {
    padding: 40px;
    background-color: $white;
    border-radius: $base-radius;

    .page-btn {
    }
  }
}
</style>
