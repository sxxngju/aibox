let data = [
  {
    popupId: 1,
    linkUrl: 'https://dmath.i-scream.co.kr/',
    imageUrl: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202103/25/fbc1d446-2a25-4ea8-b3f4-30b2a795e97c.jpg'
  },
  {
    popupId: 2,
    linkUrl: 'https://dmath.i-scream.co.kr/',
    imageUrl: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202103/25/fbc1d446-2a25-4ea8-b3f4-30b2a795e97c.jpg'
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
