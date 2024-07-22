// 스튜디오 리스트
interface Studio {
  studioId: string;
  title: string;
  categoryId: number | null;
  tags: {
    tagId: string;
    name: string;
  }[];
  introduction: string;
  viewCount: number;
  cardColor: string | null;
  createdCount: number;
  likeCount: number;
  isLike: boolean;
  createdDate: Date;
}
interface StudioParamsType {
  searchKeyword: string;
  categoryId: number; // 1:교육, 2:업무, 3:기타, 4:취미, 5:스포츠
  pageIndex: number;
  pageSize: number;
  orderBy: number; // 0:createdDate desc, 1:viewCount desc, 2:likeCount desc
}
interface StudioResponse extends BasePageResponse {
  data: Studio[];
}

// 스튜디오 단건 조회
interface StudioDetail {
  studioId: number;
  title: string;
  introduction: string;
  categoryId: number;
  cardColor: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  createdCount: number;
  isLike: number;
  detail: string;
}
interface StudioDetailParse extends Omit<StudioDetail, 'detail'> {
  detail: StudioDetailForm[];
}
interface StudioDetailForm {
  description: string;
  type: string; // one, multiple, dropdown, buttons
  title: string;
  example?: string;
  options?: {
    name: string;
    ai: string;
  }[];
  value?: string;
}

interface StudioDetailResponse extends BaseResponse {
  data: StudioDetail;
}

// 스튜디오 AI 생성
interface StudioPrompt {
  result: string;
}
interface StudioPromptResponse extends BaseResponse {
  data: StudioPrompt;
}
