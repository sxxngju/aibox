<script setup>
// store
const { serviceTerm, personalTerm } = storeToRefs(useApiTermsStore());
const { getTermsRecent } = useApiTermsStore();
const { type } = storeToRefs(useModalStore());
const { openModal, closeModal } = useModalStore();
const { getAgreeNum, editAgreeNum } = useApiTeachersStore();
const { userLogout } = useApiAuthStore();

// state
const isAgreeTerms1 = ref(false);
const isAgreeTerms2 = ref(false);
const disabled = computed(() => {
  return !isAgreeTerms1.value || !isAgreeTerms2.value;
});
const required = value => !!value || '* 필수항목입니다. 내용을 입력해주세요.';

// method
const handleClickAgree = async () => {
  await editAgreeNum();
  closeModal();
};
const handleClickCancel = () => {
  userLogout();
};

onMounted(async () => {
  const response = await getAgreeNum();

  if (response?.data?.isAgreement !== 2) {
    openModal({ type: 'agree' });
  }

  await getTermsRecent('U');
  await getTermsRecent('A');
});
</script>

<template>
  <UiPopup v-if="type === 'agree'">
    <div class="dialog">
      <div class="popup-header">
        <h2>
          아이스크림 통합회원 계정으로 이용 시<br />
          AI BOX 이용약관 및 개인정보 이용에 대한 안내 동의 후, 이용이 가능합니다.
        </h2>
      </div>
      <div class="popup-body">
        <UiFormItem title="서비스 이용약관" class="fluid">
          <div class="policyBox">
            <div class="scroll-inner">
              <p>{{ serviceTerm?.detail }}</p>
            </div>
          </div>
          <UiCheckbox v-model="isAgreeTerms1" label="동의함(필수)" :rules="[required]" />
        </UiFormItem>
        <UiFormItem title="개인 정보 이용" class="fluid">
          <div class="policyBox">
            <div class="scroll-inner">
              <p>{{ personalTerm?.detail }}</p>
            </div>
          </div>
          <UiCheckbox v-model="isAgreeTerms2" label="동의함(필수)" :rules="[required]" />
        </UiFormItem>
      </div>
      <div class="popup-footer">
        <UiBtns>
          <UiBtn :disabled="disabled" class="btn-primary" size="small" @click="handleClickAgree">동의하고 사용하기</UiBtn>
          <UiBtn size="small" @click="handleClickCancel">취소하기</UiBtn>
        </UiBtns>
      </div>
    </div>
  </UiPopup>
</template>

<style lang="scss">
.dialog {
  .form-item {
    .title {
      font-size: $font-size-sm;
      margin-bottom: $base-spacer;
    }
    .v-checkbox {
      .v-label {
        font-size: $font-size-xsm;
      }

      .v-selection-control {
        justify-content: flex-end;
      }

      .v-input__details {
        left: unset;
        right: 0;
        text-align: right;
        .v-messages__message:not(:empty) {
          padding: {
            left: 0;
            right: 0;
          }
          background-color: transparent;
        }
      }
    }
  }
  .policyBox {
    width: 600px;
    padding: $policy-box-padding;
    margin-bottom: $base-spacer * 2;
    background-color: $color-bg-default;
    border-radius: $input-border-radius;
    border: 1px solid $color-border-light;
    font-size: $input-font-size;
    color: $color-text-default;
    .scroll-inner {
      max-height: 154px;
      padding-right: 30px;
      overflow-y: scroll;
    }
  }
}
</style>
