<script setup>
// layout
definePageMeta({
  layout: 'common',
  middleware: 'auth'
});

// store
const { dictationList, audioFile } = storeToRefs(useApiDictationStore());
const { getDictationList, getDictationAI } = useApiDictationStore();

// router
const route = useRoute();
const router = useRouter();

// composable
// 오디오 1 (읽어주기)
const {
  audioPlayer: audioPlayer1,
  isPlayingAudio: isPlayingAudio1,
  handleAudio: handleAudio1,
  handleAudioEnded: handleAudioEnded1,
  handlePlayingStatus: handlePlayingStatus1
} = useAudio();
// 오디오 2 (받아쓰기 전체)
const {
  audioPlayer: audioPlayer2,
  isPlayingAudio: isPlayingAudio2,
  handleAudio: handleAudio2,
  handleAudioEnded: handleAudioEnded2,
  handlePlayingStatus: handlePlayingStatus2
} = useAudio();
// 오디오 3 (받아쓰기 개별)
const {
  audioPlayer: audioPlayer3,
  isPlayingAudio: isPlayingAudio3,
  handleAudio: handleAudio3,
  handlePlayingStatus: handlePlayingStatus3
} = useAudio();

// constant
// 학년/학기
const GRADE_SEMESTER = [
  { title: '1학년 1학기', value: 'E11' },
  { title: '1학년 2학기', value: 'E12' },
  { title: '2학년 1학기', value: 'E21' },
  { title: '2학년 2학기', value: 'E22' },
  { title: '3학년 1학기', value: 'E31' },
  { title: '3학년 2학기', value: 'E32' },
  { title: '4학년 1학기', value: 'E41' },
  { title: '4학년 2학기', value: 'E42' },
  { title: '5학년 1학기', value: 'E51' },
  { title: '5학년 2학기', value: 'E52' },
  { title: '6학년 1학기', value: 'E61' },
  { title: '6학년 2학기', value: 'E62' }
];
// 급수
const DICTATION_LEVEL = [
  { title: '1급', value: 'L01' },
  { title: '2급', value: 'L02' },
  { title: '3급', value: 'L03' },
  { title: '4급', value: 'L04' },
  { title: '5급', value: 'L05' },
  { title: '6급', value: 'L06' },
  { title: '7급', value: 'L07' },
  { title: '8급', value: 'L08' },
  { title: '9급', value: 'L09' },
  { title: '10급', value: 'L10' }
];
// 개수
const DICTATION_SIZE = [
  { title: '1개', value: '1' },
  { title: '2개', value: '2' },
  { title: '3개', value: '3' },
  { title: '4개', value: '4' },
  { title: '5개', value: '5' },
  { title: '6개', value: '6' },
  { title: '7개', value: '7' },
  { title: '8개', value: '8' },
  { title: '9개', value: '9' },
  { title: '10개', value: '10' }
];

// state
const lineNumbers = ref([1]); // 읽어주기 textarea 행번호
const text = ref(''); // 읽어주기 textarea value
const textareaRef = ref(null); // 읽어주기 textarea ref
const textareaRefCopy = ref(null); // hidden textarea
const gradeSemester = ref(route.query.gradeSemester); // 받아쓰기 학년/학기 옵션
const dictationLevel = ref(route.query.dictationLevel); // 받아쓰기 급수 옵션
const pageSize = ref(route.query.pageSize); // 받아쓰기 개수 옵션
const slider = ref(null); // 슬라이드 그룹 모델
const readOption1 = ref({
  voice: 0,
  speed: 1,
  repeat: 0,
  rangeType: 0,
  rangeStartNum: 1,
  rangeEndNum: 1
});
const readOption2 = ref({
  voice: 0,
  speed: 1,
  repeat: 0,
  rangeType: 0,
  rangeStartNum: 1,
  rangeEndNum: 1
});
const isOptionDisabled = computed(() => {
  if (!gradeSemester.value || !dictationLevel.value || !pageSize.value) {
    return true;
  } else {
    return false;
  }
});
const selectedDictationIndex = computed(() => {
  return dictationList.value.findIndex(dictation => dictation.dictationId === Number(route.query.dictationId));
});

// method
// 받아쓰기 AI 생성하기
const handleCreateAI = async pageSize => {
  slider.value = null;
  await router.push({
    query: {
      type: 'ai',
      gradeSemester: gradeSemester.value,
      dictationLevel: dictationLevel.value,
      pageIndex: 1,
      pageSize,
      dictationId: '1'
    }
  });

  await getDictationAI({
    gradeSemester: gradeSemester.value,
    dictationLevel: dictationLevel.value,
    pageSize
  });
};
// 받아쓰기 검색하기
const handleSearch = async () => {
  slider.value = null;
  await getDictationList({
    gradeSemester: gradeSemester.value,
    dictationLevel: dictationLevel.value,
    pageSize: pageSize.value
  });

  const currentQuery = { ...route.query };
  delete currentQuery['dictationId'];
  delete currentQuery['type'];

  await router.push({
    query: {
      ...currentQuery,
      gradeSemester: gradeSemester.value,
      dictationLevel: dictationLevel.value,
      pageSize: pageSize.value
    }
  });
};
// 받아쓰기 선택
const handleSelectCard = id => {
  router.push({
    query: {
      ...route.query,
      type: 'search',
      dictationId: id
    }
  });
};
// 읽어주기 텍스트 개행 함수
const handleLineNumbers = () => {
  const lines = text.value.split('\n');
  let currentLineNumber = 1;
  const newLineNumbers = [];
  lines.forEach(line => {
    if (line.trim() === '') {
      newLineNumbers.push(currentLineNumber); // 빈 줄에도 행 번호 추가
      currentLineNumber++;
      return;
    }

    textareaRefCopy.value.textContent = line;

    const wrappedLines = Math.ceil(
      textareaRefCopy.value.offsetWidth / (textareaRef.value.$el.querySelector('textarea').clientWidth - 40) // 40은 textarea padding-left 값과 동일
    );

    for (let i = 0; i < wrappedLines; i++) {
      if (i === 0) {
        newLineNumbers.push(currentLineNumber);
        currentLineNumber++;
      } else {
        newLineNumbers.push('');
      }
    }
  });

  lineNumbers.value = newLineNumbers;
};
// 이전 목록으로 이벤트
const backToList = () => {
  slider.value = null;
  const currentQuery = { ...route.query };
  delete currentQuery['dictationId'];
  delete currentQuery['type'];
  router.push({ query: currentQuery });
};
// 프린트
const print = () => {
  window.print();
};

onMounted(async () => {
  if (!isOptionDisabled.value) {
    await getDictationList({
      gradeSemester: route.query.gradeSemester,
      dictationLevel: route.query.dictationLevel,
      subject: route.query.subject,
      pageSize: route.query.pageSize
    });
  }
});
</script>

<template>
  <!-- 읽어주기 -->
  <UiSection class="d-print-none">
    <audio
      ref="audioPlayer1"
      :src="useAsset(audioFile)"
      @ended="handleAudioEnded1(readOption1)"
      @play="handlePlayingStatus1(true)"
      @pause="handlePlayingStatus1(false)"
    />
    <audio
      ref="audioPlayer2"
      :src="useAsset(audioFile)"
      @ended="handleAudioEnded2(readOption2)"
      @play="handlePlayingStatus2(true)"
      @pause="handlePlayingStatus2(false)"
    />
    <audio ref="audioPlayer3" :src="useAsset(audioFile)" @play="handlePlayingStatus3(true)" @pause="handlePlayingStatus3(false)" />
    <UiTitle>
      <SvgColorIconSmile />
      <h2>읽어주기</h2>
    </UiTitle>
    <UiFormExtras :class="['box-read', text && 'form-extras--active']">
      <div v-if="text" class="line-numbers">
        <span class="d-block" v-for="(n, index) in lineNumbers" :key="index">{{ n }}</span>
      </div>
      <UiTextarea
        placeholder="텍스트를 입력 후 재생버튼을 누르면, 입력한 텍스트를 읽어줘요."
        v-model="text"
        ref="textareaRef"
        hide-details
        auto-grow
        rows="1"
        @input="handleLineNumbers"
      />
      <span ref="textareaRefCopy" class="hidden" />

      <UiBtns>
        <DictationReadOptions :readOptions="readOption1" @handle-option="option => (readOption1 = option)" />
        <UiTooltip text="입력한 텍스트를 읽어줍니다.">
          <UiBtn
            :disabled="!text"
            :title="isPlayingAudio1 ? '재생' : '정지'"
            class="btn-secondary btn-icon"
            @click="handleAudio1('read', text, readOption1)"
          >
            <SvgSolidIconPause v-if="isPlayingAudio1" />
            <SvgSolidIconPlay v-else />
          </UiBtn>
        </UiTooltip>
      </UiBtns>
    </UiFormExtras>
  </UiSection>

  <!-- 받아쓰기 -->
  <UiSection>
    <UiTitle class="d-print-none">
      <SvgColorIconWrite />
      <h2>받아쓰기</h2>
      <span class="desc">옵션을 선택하고, 받아쓰기를 찾아보세요.</span>
      <DictationGuide />
    </UiTitle>
    <div class="banner d-print-none">
      <SvgColorIconAiBanner />
      더 다양한 받아쓰기를 보고 싶다면 AI를 통해 만들 수도 있어요!
    </div>
    <UiFormExtras class="d-print-none">
      <UiSelect
        v-model="gradeSemester"
        class="dictation-filter"
        placeholder="학년/학기"
        menu-icon="iconCaretDown"
        item-value="value"
        item-title="title"
        :items="GRADE_SEMESTER"
        hide-details
      />
      <UiSelect
        v-model="dictationLevel"
        class="dictation-filter"
        placeholder="급수"
        menu-icon="iconCaretDown"
        item-value="value"
        item-title="title"
        :items="DICTATION_LEVEL"
        hide-details
      />

      <UiSelect
        v-model="pageSize"
        class="dictation-filter"
        placeholder="개수"
        menu-icon="iconCaretDown"
        item-value="value"
        item-title="title"
        :items="DICTATION_SIZE"
        hide-details
      />
      <UiBtns class="extra">
        <UiTooltip text="선택한 옵션의 받아쓰기를 검색합니다.">
          <UiBtn :disabled="isOptionDisabled" variant="text" title="검색" class="btn-icon" @click="handleSearch">
            <SvgSolidIconSearch />
          </UiBtn>
        </UiTooltip>
        <UiTooltip text="AI로 받아쓰기를 생성합니다.">
          <UiBtn :disabled="isOptionDisabled" title="AI" class="btn-icon btn-third" variant="flat" @click="handleCreateAI(pageSize)">
            <SvgSolidIconAi />
          </UiBtn>
        </UiTooltip>
      </UiBtns>
    </UiFormExtras>

    <!-- 받아쓰기 검색 결과 -->
    <template v-if="!route.query.dictationId && dictationList.length > 0">
      <v-slide-group class="dictation-slider" show-arrows selected-class="active" v-model="slider">
        <v-slide-group-item v-for="dictation in dictationList" :key="dictation.dictationId" v-slot="{ selectedClass, toggle }">
          <div
            :class="['slider-item', selectedClass]"
            @click="
              () => {
                toggle();
                handleSelectCard(dictation.dictationId);
              }
            "
          >
            <UiBadge>1학년 2학기</UiBadge>
            <UiTitle
              ><h4>{{ dictation.title }}</h4></UiTitle
            >
            <table class="table">
              <colgroup>
                <col width="32" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr v-for="(word, index) in dictation.words" :key="index">
                  <th>{{ index + 1 }}</th>
                  <td>{{ word.word }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </template>

    <!-- 받아쓰기 상세 결과 -->
    <template v-else-if="route.query.dictationId && route.query.type">
      <div class="dictation-result">
        <div class="dictation-header">
          <UiInput class="input-school" variant="underlined" :model-value="dictationList[selectedDictationIndex]?.title" hide-details />
          <p>번호</p>
          <p>이름</p>

          <UiBtns class="extra">
            <UiTooltip text="현재 받아쓰기를 인쇄합니다.">
              <UiBtn class="btn-primary btn-icon d-print-none" title="프린트" @click="print">
                <SvgSolidIconPrint />
              </UiBtn>
            </UiTooltip>
            <DictationReadOptions :readOptions="readOption2" @handle-option="option => (readOption2 = option)" />

            <UiTooltip text="입력한 텍스트를 읽어줍니다.">
              <UiBtn
                :title="isPlayingAudio2 ? '재생' : '정지'"
                class="btn-secondary btn-icon"
                @click="
                  handleAudio2('dictation', dictationList[selectedDictationIndex]?.words.map(word => word.word).join(' '), readOption2)
                "
              >
                <SvgSolidIconPause v-if="isPlayingAudio2" />
                <SvgSolidIconPlay v-else />
              </UiBtn>
            </UiTooltip>
          </UiBtns>
        </div>
        <div class="dictation-body page-break" v-for="(item, index) in dictationList[selectedDictationIndex]?.words" :key="index">
          <div class="dictation-sample">
            <div class="dictation-row">
              <div class="dictation-col head">{{ index + 1 }}</div>
              <div class="dictation-col" v-for="(_, i) in Array.from({ length: 15 })">
                <UiInput maxlength="1" hide-details :model-value="item.word[i] === ' ' ? '' : item.word[i]" />
              </div>

              <div class="dictation-col head">
                <UiTooltip text="이 받아쓰기 문장을 읽어줍니다.">
                  <UiBtn
                    @click="handleAudio3('dictation', item.word, readOption2)"
                    :disabled="isPlayingAudio3"
                    variant="text"
                    class="btn-icon d-print-none"
                    title="읽어주기 재생"
                  >
                    <SvgSolidIconPlayRounded />
                  </UiBtn>
                </UiTooltip>
              </div>

              <div class="dictation-col" v-for="(_, i) in Array.from({ length: 14 })">
                <UiInput maxlength="1" hide-details :model-value="item.word[i + 15]" />
              </div>

              <div class="dictation-col">
                <UiTooltip text="이 받아쓰기 문장을 다시 만듭니다.">
                  <UiBtn
                    v-if="route.query.type === 'ai'"
                    variant="text"
                    class="btn-icon d-print-none"
                    title="새로고침"
                    @click="handleCreateAI(1)"
                  >
                    <SvgSolidIconRecreate />
                  </UiBtn>
                </UiTooltip>
              </div>
            </div>
          </div>
          <div class="dictation-answer">
            <div class="dictation-row">
              <div class="dictation-col head"></div>
              <div class="dictation-col" v-for="(_, i) in Array.from({ length: 15 })" :key="i"></div>
              <div class="dictation-col head"></div>
              <div class="dictation-col" v-for="(_, i) in Array.from({ length: 15 })" :key="i"></div>
            </div>
          </div>
        </div>
      </div>

      <UiPageBtn v-if="route.query.type === 'search'" class="d-print-none">
        <UiBtn @click="backToList" class="btn-primary" size="large">이전 목록으로</UiBtn>
      </UiPageBtn>
    </template>
  </UiSection>
</template>

<style lang="scss">
@import url(@/assets/scss/pages/dictation.scss);
</style>
