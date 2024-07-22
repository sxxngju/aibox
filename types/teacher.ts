// 이용동의여부 건수 조회
interface Agree {
  teacherId: string;
  isAgreement: number;
}
interface AgreeResponse extends BaseResponse {
  data: Agree;
}
