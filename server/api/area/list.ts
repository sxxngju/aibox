let data = [
  {
    areaId: 1,
    name: '인기콘텐츠',
    orders: 1,
    isUse: 1,
    isFix: 1,
    isDel: 0,
    createdBy: 'gadmin',
    createdDate: '2024-07-14T14:52:36',
    lastModifiedBy: null,
    lastModifiedDate: null
  },
  {
    areaId: 2,
    name: '추천AI서비스',
    orders: 2,
    isUse: 1,
    isFix: 1,
    isDel: 0,
    createdBy: 'gadmin',
    createdDate: '2024-07-14T14:52:55',
    lastModifiedBy: null,
    lastModifiedDate: null
  },
  {
    areaId: 3,
    name: 'AI업무경감',
    orders: 3,
    isUse: 1,
    isFix: 1,
    isDel: 0,
    createdBy: 'gadmin',
    createdDate: '2024-07-14T14:53:08',
    lastModifiedBy: null,
    lastModifiedDate: null
  }
];

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
