<script setup>
definePageMeta({
  layout: 'default'
});

const required = value => !!value || '* 필수항목입니다. 내용을 입력해주세요.';
</script>

<template>
  <UiTitle>
    <h2>제휴/문의</h2>
  </UiTitle>
  <v-form>
    <UiSection class="write-list lined">
      <UiFormItem title="제목" class="fluid required">
        <UiInput placeholder="내용을 입력하세요" :rules="[required]" />
      </UiFormItem>
      <UiFormItem title="회사(기관)명" class="required">
        <UiInput placeholder="회사(기관)명을 입력해주세요" :rules="[required]" />
      </UiFormItem>
      <UiFormItem title="작성자명" class="required">
        <UiInput placeholder="작성자명을 입력해주세요" :rules="[required]" />
      </UiFormItem>
      <UiFormItem title="연락처" class="required">
        <UiInput placeholder="-를 포함하여 전화번호를 입력해주세요" :rules="[required]" />
      </UiFormItem>
      <UiFormItem title="이메일" class="required">
        <UiInput placeholder="수신 가능한 정확한 이메일로 입력해주세요" :rules="[required]" />
      </UiFormItem>
      <UiFormItem title="파일첨부" class="fluid">
        <UiFileInput placeholder="최대 5개, 50MB를 초과할 수 없음" class="with-list" multiple is-button="파일 첨부" />
        <ul class="file-list">
          <li>
            img.jpg (5kb)
            <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
          </li>
          <li>
            img.jpg (5kb)
            <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
          </li>
          <li>
            img.jpg (5kb)
            <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
          </li>
          <li>
            img.jpg (5kb)
            <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
          </li>
          <li>
            img.jpg (5kb)
            <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
          </li>
        </ul>
      </UiFormItem>
      <UiFormItem title="내용" class="fluid required">
        <UiTextarea placeholder="내용을 입력해주세요" rows="10" no-resize counter="1000" :rules="[required]" />
      </UiFormItem>
    </UiSection>
    <UiSection class="lined">
      <UiFormItem title="[필수] 개인정보 수집 및 이용동의" class="fluid">
        <div class="policyBox">
          <div class="scroll-inner">
            <p>
              아이스크림미디어는 아래의 목적으로 개인정보를 수집 및 이용하며, 개인정보를 안전하게 취급하는데 최선을 다합니다.<br />
              <br />
              목적 : 제휴/문의에 따른 연락처 정보 확인<br />
              항목 : 회사(기관)명. 작성자명, 연락처, 이메일<br />
              보유기간 : 내용의 검토 및 상담을 위해 등록 후 90일간 보관하며, 이후 해당 정보를 지체없이 파기합니다. 단, 제휴/문의의 기각 및
              거절시에는 해당 정보를 즉시 파기합니다.<br />
              <br />
              위 정보 수집에 대한 동의를 거부할 권리가 있으며 동의 거부 시에는 제안 접수가 제한될 수 있습니다.
            </p>
          </div>
        </div>
        <UiCheckbox label="개인정보 수집 및 이용에 동의합니다." :rules="[required]" />
      </UiFormItem>
    </UiSection>
    <UiPageBtn>
      <UiBtn class="btn-primary" size="large">등록하기</UiBtn>
    </UiPageBtn>
  </v-form>
</template>

<style lang="scss">
@import url(@/assets/scss/pages/cs.scss);
</style>
