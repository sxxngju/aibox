// 팝업 목록
interface Popup {
  popupId: number;
  title: string;
  linkUri: string;
  imageName: string;
}
interface PopupsResponse extends BaseResponse {
  data: Popup[];
}
