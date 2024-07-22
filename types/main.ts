// 메인 영역 목록 조회
interface MainOrder {
  areaId: string;
  name: string;
  orders: number;
}
interface MainOrderResponse extends BaseResponse {
  data: MainOrder[];
}

// 메인 인기 콘텐츠 및 추천 AI 리스트
interface MainContent {
  contentId: number;
  title: string;
  introduction: string;
  areaId: number;
  imagePath: string;
  imageName: string;
  linkUri: string;
  refSite: string;
  viewCount: number;
}
interface MainContentResponse extends BasePageResponse {
  data: MainContent[];
}
