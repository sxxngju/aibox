<script setup>
// store
const { serviceTermsList } = storeToRefs(useApiTermsStore());
const { getTermsList } = useApiTermsStore();

// state
const select = ref(0);
const selectedIndex = computed(() => {
  return serviceTermsList.value.findIndex(item => item.termsId === select.value);
});

onMounted(async () => {
  await getTermsList('U');
  select.value = serviceTermsList.value[0].termsId;

  console.log(serviceTermsList.value);
});
</script>

<template>
  <UiTitle>
    <h2>이용약관</h2>
    <UiSelect
      hide-details
      width="240"
      v-model="select"
      :item-title="
        title =>
          title?.termsId === serviceTermsList[0]?.termsId
            ? '[현행] ' + title.startDate?.split('T')[0].replaceAll('-', '. ')
            : title.startDate?.split('T')[0].replaceAll('-', '. ')
      "
      item-value="termsId"
      :items="serviceTermsList"
    />
  </UiTitle>
  <UiSection class="lined type-pre">
    <div>
      <p>
        {{ serviceTermsList[selectedIndex]?.detail }}
      </p>
    </div>
  </UiSection>
</template>
