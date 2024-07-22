<script setup>
definePageMeta({
  layout: 'default'
});

// textarea
const lineNumbers = ref([1]);
const text = ref('');
const textareaRef = ref(null);
const textareaRefCopy = ref(null);

const updateLineNumbers = event => {
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

import LayerReadOptions from './layerReadOptions';
import LayerDictationGuide from './layerDictationGuide';

const player1 = ref(null);
const player2 = ref(null);

const print = () => {
  window.print();
};
</script>

<template>
  <UiSection>
    <UiTitle>
      <SvgColorIconSmile />
      <h2>읽어주기</h2>
    </UiTitle>
    <UiFormExtras :class="['box-read', `${text !== '' ? 'form-extras--active' : ''}`]">
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
        @input="updateLineNumbers"
      />
      <span ref="textareaRefCopy" class="hidden" />

      <UiBtns>
        <LayerReadOptions />
        <UiTooltip text="입력한 텍스트를 읽어줍니다.">
          <v-btn-toggle v-model="player1">
            <UiBtn :title="player1 === 0 ? '정지' : '재생'" class="btn-secondary btn-icon">
              <SvgSolidIconPause v-if="player1 === 0" />
              <SvgSolidIconPlay v-else />
            </UiBtn>
          </v-btn-toggle>
        </UiTooltip>
      </UiBtns>
    </UiFormExtras>
  </UiSection>

  <UiSection>
    <UiTitle>
      <SvgColorIconWrite />
      <h2>받아쓰기</h2>
      <span class="desc">옵션을 선택하고, 받아쓰기를 찾아보세요.</span>
      <LayerDictationGuide />
    </UiTitle>
    <div class="banner">
      <SvgColorIconAiBanner />
      더 다양한 받아쓰기를 보고 싶다면 AI를 통해 만들 수도 있어요!
    </div>
    <UiFormExtras>
      <UiSelect
        class="dictation-filter"
        placeholder="학년/학기"
        menu-icon="iconCaretDown"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        hide-details
      />
      <UiSelect
        class="dictation-filter"
        placeholder="급수"
        menu-icon="iconCaretDown"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        hide-details
      />
      <UiSelect
        class="dictation-filter"
        placeholder="개수"
        menu-icon="iconCaretDown"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        hide-details
      />
      <UiBtns class="extra">
        <UiTooltip text="선택한 옵션의 받아쓰기를 검색합니다.">
          <UiBtn variant="text" title="검색" class="btn-icon">
            <SvgSolidIconSearch />
          </UiBtn>
        </UiTooltip>
        <UiTooltip text="AI로 받아쓰기를 생성합니다.">
          <UiBtn title="AI" class="btn-icon btn-third">
            <SvgSolidIconAi />
          </UiBtn>
        </UiTooltip>
      </UiBtns>
    </UiFormExtras>

    <v-slide-group class="dictation-slider" show-arrows v-model="model">
      <v-slide-group-item v-for="n in 10" :key="n" v-slot="{ isSelected, toggle }">
        <div :class="['slider-item', { active: isSelected }]" @click="toggle">
          <UiBadge>1학년 2학기{{ isSelected }}</UiBadge>
          <UiTitle><h4>소중한 책을 소개해요</h4></UiTitle>
          <table class="table">
            <colgroup>
              <col width="32" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>1</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>2</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>3</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>4</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>5</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>6</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>7</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>8</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>9</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
              <tr>
                <th>10</th>
                <td>우리 아기의 첫 번째 생일에 즐거운 돌잔치를 했어요</td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-slide-group-item>
    </v-slide-group>

    <!-- TODO : 받아쓰기에서 AI 버튼 클릭 시 or 위 슬라이더 항목 선택 시 아래 컨턴츠가 나타납니다.-->
    <div class="dictation-result">
      <div class="dictation-header">
        <UiInput class="input-school" variant="underlined" value="탄천 초등학교 1학년 1반 받아쓰기 (2024년 4월 3일)" hide-details />
        <p>번호</p>
        <p>이름</p>
        <UiBtns class="extra">
          <UiTooltip text="현재 받아쓰기를 인쇄합니다.">
            <UiBtn class="btn-primary btn-icon" title="프린트" @click="print">
              <SvgSolidIconPrint />
            </UiBtn>
          </UiTooltip>
          <LayerReadOptions />
          <UiTooltip text="입력한 텍스트를 읽어줍니다.">
            <v-btn-toggle v-model="player2">
              <UiBtn :title="player2 === 0 ? '정지' : '재생'" class="btn-secondary btn-icon">
                <SvgSolidIconPause v-if="player2 === 0" />
                <SvgSolidIconPlay v-else />
              </UiBtn>
            </v-btn-toggle>
          </UiTooltip>
        </UiBtns>
      </div>
      <div class="dictation-body page-break">
        <div class="dictation-sample">
          <div class="dictation-row">
            <div class="dictation-col head">1</div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="첫" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="번" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="째" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="생" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="일" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="에" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="돌" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="잔" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="치" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="를" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="했" /></div>
            <div class="dictation-col head">
              <UiTooltip text="이 받아쓰기 문장을 읽어줍니다.">
                <UiBtn variant="text" class="btn-icon" title="읽어주기 재생"><SvgSolidIconPlayRounded /></UiBtn>
              </UiTooltip>
            </div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="어" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="요" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col">
              <UiTooltip text="이 받아쓰기 문장을 다시 만듭니다.">
                <UiBtn variant="text" class="btn-icon" title="새로고침"><SvgSolidIconRecreate /></UiBtn>
              </UiTooltip>
            </div>
          </div>
        </div>
        <div class="dictation-answer">
          <div class="dictation-row">
            <div class="dictation-col head"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col head"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
          </div>
        </div>
      </div>
      <div class="dictation-body page-break">
        <div class="dictation-sample">
          <div class="dictation-row">
            <div class="dictation-col head">2</div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="첫" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="번" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="째" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="생" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="일" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="에" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="돌" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="잔" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="치" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="를" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="했" /></div>
            <div class="dictation-col head">
              <UiTooltip text="이 받아쓰기 문장을 읽어줍니다.">
                <UiBtn variant="text" class="btn-icon" title="읽어주기 재생"><SvgSolidIconPlayRounded /></UiBtn>
              </UiTooltip>
            </div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="어" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="요" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col">
              <UiTooltip text="이 받아쓰기 문장을 다시 만듭니다.">
                <UiBtn variant="text" class="btn-icon" title="새로고침"><SvgSolidIconRecreate /></UiBtn>
              </UiTooltip>
            </div>
          </div>
        </div>
        <div class="dictation-answer">
          <div class="dictation-row">
            <div class="dictation-col head"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col head"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
          </div>
        </div>
      </div>
      <div class="dictation-body page-break">
        <div class="dictation-sample">
          <div class="dictation-row">
            <div class="dictation-col head">3</div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="첫" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="번" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="째" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="생" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="일" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="에" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="돌" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="잔" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="치" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="를" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="했" /></div>
            <div class="dictation-col head">
              <UiTooltip text="이 받아쓰기 문장을 읽어줍니다.">
                <UiBtn variant="text" class="btn-icon" title="읽어주기 재생"><SvgSolidIconPlayRounded /></UiBtn>
              </UiTooltip>
            </div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="어" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details value="요" /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col"><UiInput maxlength="1" hide-details /></div>
            <div class="dictation-col">
              <UiTooltip text="이 받아쓰기 문장을 다시 만듭니다.">
                <UiBtn variant="text" class="btn-icon" title="새로고침"><SvgSolidIconRecreate /></UiBtn>
              </UiTooltip>
            </div>
          </div>
        </div>
        <div class="dictation-answer">
          <div class="dictation-row">
            <div class="dictation-col head"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col head"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
            <div class="dictation-col"></div>
          </div>
        </div>
      </div>
    </div>

    <UiPageBtn>
      <UiBtn class="btn-primary" size="large">이전 목록으로</UiBtn>
    </UiPageBtn>
  </UiSection>
</template>

<style lang="scss">
@import url(@/assets/scss/pages/dictation.scss);
</style>
