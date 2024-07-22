interface Notice {
  noticeId: string;
  title: string;
  detail: string;
  createdDate: Date;
}
interface NoticeResponse extends BaseResponse {
  data: Notice[];
}
