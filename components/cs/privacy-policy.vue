<script setup>
// store
const { privacyTermsList } = storeToRefs(useApiTermsStore());
const { getTermsList } = useApiTermsStore();

// state
const select = ref(0);
const selectedIndex = computed(() => {
  return privacyTermsList.value.findIndex(item => item.termsId === select.value);
});

onMounted(async () => {
  await getTermsList('P');
  select.value = privacyTermsList.value[0].termsId;
});
</script>

<template>
  <UiTitle>
    <h2>개인정보처리방침</h2>
    <UiSelect
      hide-details
      width="240"
      v-model="select"
      :item-title="
        title =>
          title?.termsId === privacyTermsList[0]?.termsId
            ? '[현행] ' + title.startDate?.split('T')[0].replaceAll('-', '. ')
            : title.startDate?.split('T')[0].replaceAll('-', '. ')
      "
      item-value="termsId"
      :items="privacyTermsList"
    />
  </UiTitle>
  <UiSection class="lined type-pre">
    <div>
      <p>
        {{ privacyTermsList[selectedIndex]?.detail }}
      </p>
    </div>
  </UiSection>
</template>
