<script setup>
definePageMeta({
  layout: 'common'
});
// store
const { studioDetail } = storeToRefs(useApiStudioStore());
const { getStudio, getStudioAI, editStudioLike } = useApiStudioStore();
const { type } = storeToRefs(useModalStore());
const { openModal, closeModal } = useModalStore();

// constant
const categoryIdMap = {
  1: '교육',
  2: '업무',
  3: '기타'
};

// router
const route = useRoute();

// state
const resultPrompts = ref([]);
const category = computed(() => {
  if (studioDetail.value?.categoryId === 1) {
    return 'edu';
  } else if (studioDetail.value?.categoryId === 2) {
    return 'work';
  } else if (studioDetail.value?.categoryId === 3) {
    return 'etc';
  } else return '';
});
const isCreated = computed(() => {
  return resultPrompts.value.length > 0;
});
const isDisabled = computed(() => {
  return studioDetail.value?.detail.some(item => item.value === '');
});
const like = ref(null);

// method
const handleLike = async event => {
  if (event === 0) {
    await editStudioLike({ studioId: Number(route.params.id), isLike: 1 });
  } else {
    await editStudioLike({ studioId: Number(route.params.id), isLike: 0 });
  }
};
const handleDelete = () => {
  studioDetail.value?.detail.forEach(item => (item.value = ''));
};
const handleCreateAI = async () => {
  const response = await getStudioAI({ detail: studioDetail.value?.detail });
  resultPrompts.value.unshift(response.data[0]);
};
const handleShare = () => {
  window.navigator.clipboard.writeText(window.location.href);

  openModal({ type: 'shareSuccess' });

  setTimeout(() => {
    closeModal();
  }, 2000);
};
const handleCopy = text => {
  window.navigator.clipboard.writeText(text);

  openModal({ type: 'copySuccess' });

  setTimeout(() => {
    closeModal();
  }, 2000);
};
const calculateBytes = str => {
  let byteLength = 0;

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode <= 0x007f) {
      byteLength += 1; // ASCII 문자는 1바이트
    } else if (charCode <= 0x07ff) {
      byteLength += 2; // 2바이트 문자
    } else if (charCode >= 0xac00 && charCode <= 0xd7af) {
      byteLength += 2; // 한글 완성자는 2바이트
    } else if (charCode >= 0x1100 && charCode <= 0x11ff) {
      byteLength += 2; // 한글 자음, 모음은 2바이트
    } else if (charCode >= 0x3130 && charCode <= 0x318f) {
      byteLength += 2; // 한글 자모 영역도 2바이트
    } else if (charCode <= 0xffff) {
      byteLength += 3; // 그 외 BMP 문자는 3바이트
    } else {
      byteLength += 4; // 보충 문자(서로게이트 페어)는 4바이트
    }
  }

  return byteLength;
};

const byteLength = computed(() => {
  let length = 0;
  studioDetail.value?.detail.map(item => {
    length += item.value.length;
  });

  return length;
});
const byteCount = computed(() => {
  let byte = 0;

  studioDetail.value?.detail.map(item => {
    byte += calculateBytes(item.value);
  });

  return byte;
});

const handleInput = (event, index) => {
  if (byteCount.value > 1000) {
    while (byteCount.value > 1000) {
      studioDetail.value.detail[index].value = studioDetail.value.detail[index].value.slice(0, -1);
    }
  } else {
    studioDetail.value.detail[index].value = event.target.value;
  }
};

onMounted(async () => {
  await getStudio({ studioId: Number(route.params.id) });
  like.value = studioDetail.value.isLike ? '0' : null;
});
</script>

<template>
  <div class="divide-container">
    <div :class="{ focused: !isCreated, 'divided-box': true }">
      <UiTitle>
        <SvgColorIconDocument />
        <h2>{{ studioDetail?.title }}</h2>
        <UiBtns class="extra">
          <v-btn-toggle class="size-small" v-model="like" @update:model-value="handleLike($event)">
            <UiBtn variant="text" size="small" toggle class="btn-icon color-gray" icon="iconLike" title="좋아요">
              <SvgSolidIconLike />
            </UiBtn>
          </v-btn-toggle>
          <StudioCaution />
          <UiBtn variant="text" size="small" class="btn-icon" title="공유하기" @click="handleShare">
            <SvgSolidIconShare />
          </UiBtn>
        </UiBtns>
      </UiTitle>

      <p class="desc">{{ studioDetail?.introduction }}</p>
      <div class="chips">
        <UiChip :class="category">{{ categoryIdMap[studioDetail?.categoryId] }}</UiChip>

        <UiChip v-for="tag in studioDetail?.tags" :key="tag" variant="outlined">#{{ tag }}</UiChip>
      </div>
      <UiSection class="reduction-wrap">
        <UiBtn size="small" class="btn-delete-all btn-secondary" @click="handleDelete">전체 지우기</UiBtn>
        <v-form>
          <div class="write-list">
            <UiFormItem v-for="(form, index) in studioDetail?.detail" :key="form.title" :title="form.title" class="fluid">
              <p class="desc">{{ form.description }}</p>
              <template v-if="form.type === 'one'">
                <UiInput v-model="form.value" :placeholder="form.example" @input="handleInput($event, index)" />
              </template>
              <template v-if="form.type === 'multiple'">
                <UiTextarea v-model="form.value" :placeholder="form.example" />
              </template>
              <template v-if="form.type === 'dropdown'">
                <UiSelect v-model="form.value" :label="form.example" :items="form.options" item-title="name" item-value="ai" />
              </template>
              <template v-if="form.type === 'buttons'">
                <UiCheckbox v-model="form.value" v-for="option in form.options" :label="option.name" :key="option.name" />
              </template>
            </UiFormItem>
            <UiBtn
              class="btn-primary"
              @click="handleCreateAI"
              :disabled="isDisabled"
              :block="true"
              size="large"
              prepend-icon="iconMagicWand"
              >자동 생성</UiBtn
            >
          </div>
        </v-form>
        <div class="info-wrap">
          <span>현재 글자수 : {{ byteLength }}자 ({{ byteCount }} byte)</span>
          <span>입력 가능 토큰 : {{ byteCount.toLocaleString() }}/1,000</span>
          <p>토큰 수가 넘치면 텍스트가 잘릴 수 있어요.</p>
        </div>
      </UiSection>
    </div>

    <div :class="{ focused: isCreated, 'divided-box': true }">
      <UiFormExtras v-if="resultPrompts.length > 0" v-for="prompt in resultPrompts" class="reduction-result">
        {{ prompt.result }}
        <UiTextarea :model-value="prompt.result" auto-grow hide-details rows="1" readonly />

        <div class="info-wrap">
          <span
            >공백 제외<strong>{{ prompt.result?.length }}자</strong></span
          >
          <span
            >공백 포함<strong>{{ prompt.result?.replace(/\s+/g, '').length }}자</strong></span
          >
          <UiBtn @click="handleCopy(prompt.result)" variant="text" class="btn-icon color-gray"><SvgSolidIconCopy /></UiBtn>
        </div>
      </UiFormExtras>

      <UiFormExtras v-else class="reduction-result">
        <div class="reduction-guide">
          <SvgSolidIconMagicWandLg />
          <p>데이터 입력 후<br />자동생성을 눌러보세요!</p>
        </div>
      </UiFormExtras>
    </div>
  </div>

  <UiAlert v-if="type === 'shareSuccess'" status="success" message="링크가 복사되었습니다." no-footer />
  <UiAlert v-if="type === 'copySuccess'" status="success" message="결과물이 복사되었습니다." no-footer />
</template>

<style lang="scss">
@import url(@/assets/scss/pages/reduction.scss);
</style>
