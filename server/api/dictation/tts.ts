let data = {
  voiceFile: null
};

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
