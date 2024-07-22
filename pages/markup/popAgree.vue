<script setup>
definePageMeta({
  layout: 'default'
});

const required = value => !!value || '* 필수항목입니다. 내용을 입력해주세요.';
const modal = ref(true);
</script>

<template>
  <UiPopup v-model="modal">
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
          <UiCheckbox label="동의함(필수)" :rules="[required]" />
        </UiFormItem>
        <UiFormItem title="개인 정보 이용" class="fluid">
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
          <UiCheckbox label="동의함(필수)" :rules="[required]" />
        </UiFormItem>
      </div>
      <div class="popup-footer">
        <UiBtns>
          <UiBtn class="btn-primary" size="small" type="submit">동의하고 사용하기</UiBtn>
          <UiBtn size="small" @click="modal = false">취소하기</UiBtn>
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
