<script setup>
const props = defineProps({
  title: {
    type: String
  },
  append: {
    type: String
  },
  prepend: {
    type: String
  },
  target: {
    type: String
  }
});

const actionTarget = ref(props.target);
const tag = ref('button');
const arrowTag = ref('span');

const selected = ref(false);

if (actionTarget.value === 'arrow') {
  tag.value = 'div';
  arrowTag.value = 'button';
}

const isActive = tag => {
  if (tag === 'a' || tag === 'button') {
    if (selected.value === true) {
      selected.value = false;
    } else if (selected.value === false) {
      selected.value = true;
    }
  } else {
    return 0;
  }
};
</script>

<template>
  <div class="item" :class="{ active: selected }">
    <!-- accordion header -->
    <component class="action" :is="tag" @click="isActive(tag)">
      <span v-if="prepend" class="date prepend">{{ prepend }}</span>
      <h3>{{ title }}</h3>
      {{ append }}
      <component :is="arrowTag" class="arrow" @click="isActive(arrowTag)"><SvgSolidIconArrowDown title="아래로" /></component>
    </component>
    <!-- accordion contents -->
    <div class="pane">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.action {
  .prepend {
    margin-right: 15px;
  }
}
</style>
