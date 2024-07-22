let data = [
  {
    dictationId: 1,
    gradeSemester: 'E11',
    dictationLevel: 'L09',
    title: '또박또박 읽어요',
    isUse: 1,
    viewCount: 0,
    isDel: 0,
    words: [
      {
        wordId: 1,
        dictationId: 1,
        word: '심심할 때면'
      },
      {
        wordId: 2,
        dictationId: 1,
        word: '첫 번째 생일에 돌잔치를 했습니다.'
      }
    ],
    createdBy: 'gadmin',
    createdDate: '2024-07-14T15:30:52',
    lastModifiedBy: null,
    lastModifiedDate: null
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
