interface Qna {
  qnaId: string;
  title: string;
  detail: string;
}
interface QnaResponse extends BaseResponse {
  data: Qna[];
}
