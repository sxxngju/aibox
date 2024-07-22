<script setup>
definePageMeta({
  layout: 'default'
});

const popupList = ref([
  {
    popupId: '1',
    linkUrl: 'https://dmath.i-scream.co.kr/',
    imageUrl: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202103/25/fbc1d446-2a25-4ea8-b3f4-30b2a795e97c.jpg',
    isNoShowToday: false
  },
  {
    popupId: '1',
    linkUrl: 'https://dmath.i-scream.co.kr/',
    imageUrl: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202103/25/fbc1d446-2a25-4ea8-b3f4-30b2a795e97c.jpg',
    isNoShowToday: false
  }
]);
const dialog = ref(true);
// method
const handleClickImage = popup => {
  window.open(popup.linkUrl);
};
const handleClose = () => {
  closeModal();
};
</script>

<template>
  <UiMultiPopup v-model="dialog">
    <div class="dialog" v-for="popup in popupList" :key="popup">
      <div class="popup-body">
        <a :href="popup.linkUrl" target="_blank" class="popup-link">
          <v-img :src="popup.imageUrl" alt="popup image" cover />
        </a>
      </div>
      <div class="popup-footer">
        <UiCheckbox
          v-model="popup.isNoShowToday"
          label="오늘 하루 열지 않음"
          hide-details
          false-icon="iconCheckSingleOff"
          true-icon="iconCheckSingleOn"
        />
        <UiBtn size="small" variant="text" @click="handleClose(popup)">닫기</UiBtn>
      </div>
    </div>
  </UiMultiPopup>
</template>
