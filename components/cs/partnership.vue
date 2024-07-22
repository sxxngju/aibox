<script setup>
// composable
const router = useRouter();

// store
const { postPartnership } = useApiPartnershipStore();

// state
const formRef = ref(null);
const isValid = ref(false);
const form = ref({
  title: '',
  company: '',
  name: '',
  phone: '',
  email: '',
  files: [],
  content: '',
  agreement: false
});

const rule = {
  required: value => !!value || '* 필수항목입니다. 내용을 입력해주세요.',
  email: value => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || '유효한 이메일 형식이 아닙니다.';
  },
  phone: value => {
    const pattern = /^01([0|1|6|7|8|9])\-?\d{3,4}\-?\d{4}$/;
    return pattern.test(value) || '유효한 전화번호 형식이 아닙니다.';
  }
};

// method
const handleSubmit = async () => {
  if (!form.value.agreement) {
    return alert('개인정보 수집 및 이용 동의 후 등록할 수 있습니다.');
  } else if (!isValid.value) {
    return alert('입력되지 않은 내용이 있습니다.');
  }

  try {
    await postPartnership(form.value);
    alert('정상 등록되었습니다.');
    router.push('/');
  } catch (error) {
    alert(error);
  }
};

const handleFile = () => {
  if (form.value.files.length > 5) {
    form.value.files = [];
    return alert('파일은 최대 5개까지 등록할 수 있습니다.');
  } else {
    let totalSize = 0;
    form.value.files.forEach(file => (totalSize += file.size));

    if (totalSize > 50000000) {
      form.value.files = [];
      return alert('파일은 최대 50MB까지 등록할 수 있습니다.');
    } else {
      return;
    }
  }
};

const formatFileSize = bytes => {
  const kb = 1000;
  const mb = kb * 1000;

  if (bytes >= mb) {
    return (bytes / mb).toFixed(1) + 'MB';
  } else if (bytes >= kb) {
    return (bytes / kb).toFixed(1) + 'KB';
  } else {
    return bytes + 'Bytes';
  }
};

const removeFile = index => {
  form.value.files.splice(index, 1);
};
</script>

<template>
  <UiTitle>
    <h2>제휴/문의</h2>
  </UiTitle>
  <v-form ref="formRef" v-model.lazy="isValid" @submit.prevent="handleSubmit">
    <UiSection class="write-list lined">
      <UiFormItem title="제목" class="fluid required">
        <UiInput v-model="form.title" required maxlength="100" placeholder="제목을 입력해주세요" :rules="[rule.required]" />
      </UiFormItem>
      <UiFormItem title="회사(기관)명" class="required">
        <UiInput v-model="form.company" required maxlength="100" placeholder="회사(기관)명을 입력해주세요" :rules="[rule.required]" />
      </UiFormItem>
      <UiFormItem title="작성자명" class="required">
        <UiInput v-model="form.name" required maxlength="30" placeholder="작성자명을 입력해주세요" :rules="[rule.required]" />
      </UiFormItem>
      <UiFormItem title="연락처" class="required">
        <UiInput
          v-model="form.phone"
          required
          maxlength="30"
          placeholder="-를 포함하여 전화번호를 입력해주세요"
          :rules="[rule.required, rule.phone]"
        />
      </UiFormItem>
      <UiFormItem title="이메일" class="required">
        <UiInput
          v-model="form.email"
          type="email"
          required
          maxlength="100"
          placeholder="수신 가능한 정확한 이메일로 입력해주세요"
          :rules="[rule.required, rule.email]"
        />
      </UiFormItem>
      <UiFormItem title="파일첨부" class="fluid">
        <UiFileInput
          v-model="form.files"
          multiple
          placeholder="최대 5개, 50MB를 초과할 수 없음"
          is-button="파일 첨부"
          show-size
          @change="handleFile"
          class="with-list"
        />
        <ul class="file-list">
          <li v-for="(file, index) in form.files" @click="removeFile(index)">
            {{ file.name }} ({{ formatFileSize(file.size) }})
            <UiBtn class="btn-icon" variant="text"><SvgSolidIconDelete /></UiBtn>
          </li>
        </ul>
      </UiFormItem>
      <UiFormItem title="내용" class="fluid required">
        <UiTextarea
          v-model="form.content"
          required
          placeholder="내용을 입력해주세요"
          rows="10"
          no-resize
          maxlength="1000"
          counter="1000"
          :rules="[rule.required]"
        />
      </UiFormItem>
    </UiSection>
    <UiSection class="lined">
      <UiFormItem title="[필수] 개인정보 수집 및 이용동의" class="fluid">
        <div class="policyBox">
          <div class="scroll-inner">
            <p>아이스크림미디어는 아래의 목적으로 개인정보를 수집 및 이용하며, 개인정보를 안전하게 취급하는데 최선을 다합니다.</p>
            <br />
            <p>1. 목적: 제휴/문의에 따른 연락처 정보 확인</p>
            <p>2. 항목: 회사(기관)명, 작성자명, 연락처, 이메일</p>
            <p>
              3. 보유기간: 내용의 검토 및 상담을 위해 등록 후 90일간 보관하며, 이후 해당 정보를 지체없이 파기합니다. 단, 제휴/문의의 기각 및
              거절시에는 해당 정보를 즉시 파기합니다.
            </p>
            <br />
            <p>위 정보 수집에 대한 동의를 거부할 권리가 있으며 동의 거부 시에는 제안 접수가 제한될 수 있습니다.</p>
          </div>
        </div>
        <UiCheckbox v-model="form.agreement" label="개인정보 수집 및 이용에 동의합니다." required :rules="[rule.required]" />
      </UiFormItem>
    </UiSection>

    <UiPageBtn>
      <UiBtn class="btn-primary" size="large" type="submit">등록하기</UiBtn>
    </UiPageBtn>
  </v-form>
</template>
<style lang="scss">
@import url(@/assets/scss/pages/cs.scss);
</style>
