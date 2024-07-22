<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue);

const handleChange = newValue => {
  emit('update:modelValue', newValue);
};

watch(
  () => props.modelValue,
  newValue => {
    internalValue.value = newValue;
  }
);
</script>

<template>
  <v-tabs v-model="internalValue" @update:model-value="handleChange" class="tabs" ripple:false grow slider-color="primary" height="80px">
    <slot name="header" />
  </v-tabs>
  <v-tabs-window v-model="internalValue">
    <slot name="body" />
  </v-tabs-window>
</template>

<style lang="scss">
.tabs {
  border: 1px solid $color-border-light;
  border-radius: 10px;
  margin-bottom: 60px;
  font-family: 'SBAggro';
  .v-tab {
    //border-left:1px solid $color-border-light;
    &:first-of-type {
      border-left: none;
    }
  }
  .v-tab__slider {
    height: 100%;
    z-index: -1;
  }

  .v-tab--selected {
    &.v-btn--variant-text {
      color: white;
      font-weight: 400;
    }
  }
}
</style>
