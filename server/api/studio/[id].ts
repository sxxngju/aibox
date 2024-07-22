let data = {
  studioId: 1,
  title: '아~편해 회의록 생성기',
  introduction: '회의록 작성을 위한 툴/회의 내용 요약, 정리',
  categoryId: 2,
  categoryName: null,
  cardColor: 'green',
  tags: ['회의록', '생성기'],
  viewCount: 0,
  likeCount: 1,
  createdCount: 0,
  step: 4,
  detail:
    '[{"description":"여행할 국가를 입력해주세요.","type":"one","title":"국가","example":"한국"},{"description":"여행지의 느낌을 상세히 작성해주세요.","type":"multiple","title":"느낀 점","example":"항공편이 대부분 새벽 일찍 도착하는 일정이라 걱정이 많았는데 새벽 투어가 매우 잘 되어 있어서 버리는 시간 없이 알차게 놀았다."},{"options":[{"name":"시원한 음식","ai":"시원한 음식이 먹고 싶어"},{"name":"매운 음식","ai":"매운 음식이 먹고 싶어"}],"description":"오늘의 음식 추천이나 먹고 싶은 느낌의 음식을 작성해주세요.","type":"dropdown","title":"오늘의 음식은?"}]',
  promptModel: 'GPT4',
  prompt: '회의록 작성 규칙 및 가이드',
  isUse: 1,
  orders: 1,
  isDel: 0,
  createdBy: 'gadmin',
  createdDate: '2024-07-14T16:56:24',
  lastModifiedBy: '3133074c-757b-413d-b111-fe9b46c3bdc1',
  lastModifiedDate: '2024-07-22T13:48:27',
  isLike: 1
};
export default defineEventHandler(async event => {
  if (event.req.method === 'GET') {
    return {
      success: true,
      code: '',
      message: '',
      responseTime: 0,
      paginationInfo: {},
      errors: {},
      data
    };
  }
});
