<script setup>
// store
const { type } = storeToRefs(useModalStore());
const { openModal, closeModal } = useModalStore();
const { popupList } = storeToRefs(useApiPopupStore());
const { getPopupList } = useApiPopupStore();

// method
const handleClose = popup => {
  if (popup.noShowChecked) {
    const { isNoShowPopup } = usePopup(popup.popupId);
    isNoShowPopup.value = true;
  }

  popup.visible = false;

  if (popupList.value.every(popup => !popup.visible)) {
    closeModal();
  }
};

onMounted(async () => {
  await getPopupList();

  if (popupList.value.some(popup => popup.visible)) {
    openModal({ type: 'mainPopup' });
  }
});
</script>

<template>
  <UiMultiPopup v-if="type === 'mainPopup'">
    <template v-for="popup in popupList" :key="popup">
      <div class="dialog" v-if="popup.visible">
        <div class="popup-body">
          <a :href="popup.linkUrl" target="_blank" class="popup-link">
            <v-img :src="`http://117.52.84.89:15678/popup/image/${popup.popupId}`" alt="popup image" cover />
          </a>
        </div>
        <div class="popup-footer">
          <UiCheckbox
            v-model="popup.noShowChecked"
            label="오늘 하루 열지 않음"
            hide-details
            false-icon="iconCheckSingleOff"
            true-icon="iconCheckSingleOn"
          />
          <UiBtn size="small" variant="text" @click="handleClose(popup)">닫기</UiBtn>
        </div>
      </div>
    </template>
  </UiMultiPopup>
</template>
