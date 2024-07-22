<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'outlined'
  },
  bgColor: {
    type: String,
    default: 'default'
  },
  textColor: {
    // border가 있을시 border컬러와 text컬러에 반영됩니다.
    // vuetify가 제공하는 .text-color 스타일 입니다.
    type: String,
    default: 'default'
  },
  append: {
    type: String
  },
  prepend: {
    type: String
  }
});

const defaultType = ref(props.type);

if (defaultType.value === null) {
  defaultType.value = 'outlined';
}
</script>

<template>
  <v-card :variant="type" :class="[`bg-${bgColor}`, `text-${textColor}`]">
    <!-- card header의 title 앞 영역 -->
    <template v-slot:prepend>
      {{ prepend }}
    </template>
    <!-- card header의 title 뒷 영역 -->
    <template v-slot:append>
      {{ append }}
    </template>
    <!-- card body -->
    <v-card-text>
      <slot></slot>
    </v-card-text>
    <!-- card footer -->
    <v-card-actions v-if="$slots.cardFooter">
      <slot name="cardFooter"></slot>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
// @import ;
.v-card {
  .v-card-title {
    font-family: 'SBAggro';
    font-weight: 500;
    line-height: $base-line-height;
    letter-spacing: $base-letter-spacing;
  }
  .v-card-item__prepend,
  .v-card-item__append {
    padding-inline-end: 0;
  }

  .v-card-text {
    line-height: $base-line-height;
    letter-spacing: $base-letter-spacing;
  }
}
</style>
