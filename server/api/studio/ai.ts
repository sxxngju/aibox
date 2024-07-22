let data = [
  {
    result:
      '회의록 작성시 주의해야할 점으로는 회의 내용을 객관적이고 명확하게 기록하는 것이 중요합니다. 참가자들의 발언은 정확히 인용하고, 의결사항은 구체적으로 기록해야 합니다. 또한, 회의록은 참석자 모두가 접근 가능해야 하고, 수정사항에 대해서는 정정 보고를 통해 모든 참가자가 인지할 수 있도록 해야 합니다.',
    timestamp: '2024-06-21-10:55'
  }
];

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
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
