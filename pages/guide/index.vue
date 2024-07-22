<script setup>
definePageMeta({
  layout: 'guide'
});
</script>

<template>
  <div class="guide-contents">
    <section>
      <h2>Rule</h2>
    </section>
    <section>
      <h2>UI Pattern</h2>
      <v-list lines="one">
        <v-list-item>
          <router-link to="/guide/icon">icon</router-link>
          <router-link to="/guide/card">Card</router-link>
          <router-link to="/guide/accordion">Accordion</router-link>
          <router-link to="/guide/noData">NoData</router-link>
          <router-link to="/guide/tabs">Tabs</router-link>
          <router-link to="/guide/slider">Slider</router-link>
          <router-link to="/guide/alert">Alert</router-link>
          <router-link to="/guide/popup">Popup</router-link>
          <router-link to="/guide/multiPopup">MultiPopup</router-link>
          <router-link to="/guide/pagination">Pagination</router-link>
          <router-link to="/guide/tooltip">Tooltip</router-link>
        </v-list-item>
      </v-list>
    </section>
    <section>
      <h2>UI Form</h2>
      <v-list lines="one">
        <v-list-item>
          <router-link to="/guide/heading">Heading , Title</router-link>
          <router-link to="/guide/btn">Button</router-link>
          <router-link to="/guide/input">Input</router-link>
          <router-link to="/guide/fileInput">FileInput</router-link>
          <router-link to="/guide/textarea">Textarea</router-link>
          <router-link to="/guide/formItem">FormItem</router-link>
          <router-link to="/guide/formExtras">FormExtras</router-link>
          <router-link to="/guide/checkbox">Checkbox</router-link>
          <router-link to="/guide/select">Select</router-link>
          <router-link to="/guide/chip">chip</router-link>
        </v-list-item>
      </v-list>
    </section>
    <!-- <section>
        <h2>Markup list</h2>
    </section> -->
  </div>
  <div class="guide-contents">
    <section>
      <h2>IA</h2>
      <v-table class="guide-table">
        <thead>
          <tr>
            <th>1depth</th>
            <th>tab</th>
            <th>구분</th>
            <th>ID</th>
            <th>완료예상</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>main</td>
            <td></td>
            <td></td>
            <td><router-link to="/markup/main">main</router-link></td>
            <td>6/28</td>
            <td>[07-02] .filter-order(업무경감 섹션 최신순/조회수/좋아요 버튼) .size-small 클래스 제거</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>이용동의팝업</td>
            <td><router-link to="/markup/popAgree">popAgree</router-link></td>
            <td>6/26</td>
            <td>[07-04]팝업 슬롯 구조 변경</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>이벤트팝업</td>
            <td><router-link to="/markup/popEvent">popEvent</router-link></td>
            <td>6/26</td>
            <td>[07-04]팝업 슬롯 구조 변경</td>
          </tr>
          <tr>
            <td>고객센터</td>
            <td></td>
            <td></td>
            <td><router-link to="/markup/cs">cs</router-link></td>
            <td>완료</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>공지</td>
            <td></td>
            <td><router-link to="/markup/notice">notice</router-link></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>자주하는질문</td>
            <td></td>
            <td><router-link to="/markup/faq">faq</router-link></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>이용약관</td>
            <td></td>
            <td><router-link to="/markup/agreement">agreement</router-link></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>개인정보처리방침</td>
            <td></td>
            <td><router-link to="/markup/policy">policy</router-link></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>제휴/문의</td>
            <td></td>
            <td><router-link to="/markup/partnership">partnership</router-link></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>받아쓰기</td>
            <td></td>
            <td>검색</td>
            <td><router-link to="/markup/dictation">dictation</router-link></td>
            <td>완료</td>
            <td>
              <p>[06-27] 설정 팝 오버 추가</p>
              <p>[07-03] 읽어주기 .form-extras > textarea 값의 유무에 따라 form-extras--active클래스 토글 추가</p>
              <p>[07-03] 받아쓰기 하단 v-slide-group에 dictation-slider 클래스 추가</p>
              <p>[07-17] 받아쓰기 .dictation-sample에서 .dictation-answer 분리(형제요소로 수정)</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>읽어주기 옵션</td>
            <td>레이어 팝업</td>
            <td><router-link to="/markup/layerReadOptions">layerReadOptions</router-link></td>
            <td>완료</td>
            <td>
              <p>[07-03] 레이어 팝업 .popup-follow에 layer-read-options 클래스 추가</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>받아쓰기 안내</td>
            <td>레이어 팝업</td>
            <td><router-link to="/markup/layerDictationGuide">layerDictationGuide</router-link></td>
            <td>완료</td>
            <td>
              <p>[07-03] 레이어 팝업 .popup-follow에 layer-dictation-guide 클래스 추가</p>
            </td>
          </tr>
          <!-- <tr>
            <td></td>
            <td></td>
            <td>검색결과</td>
            <td><router-link to="markup/dictationList">dictationList</router-link></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>AI결과 불러오기</td>
            <td><router-link to="markup/dictationAI">dictationAI</router-link></td>
            <td></td>
            <td></td>
          </tr> -->
          <tr>
            <td>업무경감</td>
            <td></td>
            <td></td>
            <td><router-link to="/markup/reduction">reduction</router-link></td>
            <td>완료</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>업무경감 안내</td>
            <td>레이어 팝업</td>
            <td><router-link to="/markup/layerReductionCaution">layerReductionCaution</router-link></td>
            <td>완료</td>
            <td>
              <p>[07-03] 레이어 팝업 .popup-follow에 layer-reduction-caution 클래스 추가</p>
            </td>
          </tr>
          <tr>
            <td>에러페이지</td>
            <td></td>
            <td></td>
            <td><router-link to="/markup/error">error</router-link></td>
            <td>완료</td>
            <td></td>
          </tr>
          <tr>
            <td>교사인증 실패</td>
            <td></td>
            <td></td>
            <td><router-link to="/markup/blank">blank</router-link></td>
            <td>완료</td>
            <td>[07-10] 추가</td>
          </tr>
        </tbody>
      </v-table>
      <!-- <v-list lines="one">
        <v-list-item>
          <router-link to="/markup/error">에러페이지</router-link>
          <router-link to="/markup/notice">공지</router-link>
          <router-link to="/markup/faq">자주하는 질문</router-link>
          <router-link to="/markup/agreement">이용약관</router-link>
          <router-link to="/markup/policy">개인정보처리방침</router-link>
          <router-link to="/markup/partnership">고객센터/제휴문의</router-link>
          <router-link to="/markup/dictation">받아쓰기</router-link>
          <router-link to="/markup/reduction">업무경감</router-link>
          <router-link to="/markup/eventPopup">이벤트 팝업</router-link>
        </v-list-item>
      </v-list> -->
    </section>
  </div>
</template>

<style lang="scss">
a {
  border-bottom: 1px solid #eee;
}
.guide-table {
  border-top: 2px solid $color-border-dark;
  border-bottom: 2px solid $color-border-dark;
  margin-bottom: 100px;
  td {
    a {
      font-weight: 700;
      border-bottom: none;
    }
  }
}
</style>
