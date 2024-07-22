let data = {
  teacherId: '123',
  isAgreement: 2
};

export default defineEventHandler(async event => {
  if (event.req.method === 'GET') {
    return {
      success: true,
      code: '',
      message: '',
      responseTime: 0,
      errors: {},
      data
    };
  } else if (event.req.method === 'POST') {
    return {
      success: true,
      code: '',
      message: '',
      responseTime: 0,
      errors: {},
      data: null
    };
  }
});
