// 이용동의 팝업 약관
interface Terms {
  termsId: number;
  startDate: string;
  endDate: string;
  termsType: string;
  detail: string;
}
interface TermsResponse extends BaseResponse {
  data: Terms[];
}
interface TermsRecentResponse extends BaseResponse {
  data: Terms;
}
