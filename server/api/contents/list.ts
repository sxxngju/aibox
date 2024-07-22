let popularContentsData = [
  {
    contentId: 1,
    title: '받아쓰기',
    introduction: '급수, 자주 쓰는 문장을 자동으로 선별해서 말해줘요.',
    linkUri: '/dictation',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-01.png'
  },
  {
    contentId: 2,
    title: '교과평어',
    introduction: '선생님의 업무 경감 도우미 막막한 업무에서 해방시켜 드립니다.',
    linkUri: 'https://www.i-scream.co.kr/user/subjectevaluation/SubjectEvaluationCheck.do',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-02.png'
  },
  {
    contentId: 3,
    title: 'AI 매일 수학',
    introduction: '학생 맞춤형 문제 출제 AI 분석 리포트 제공',
    linkUri: 'https://dmath.i-scream.co.kr/',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-03.png'
  },
  {
    contentId: 4,
    title: '행동발달',
    introduction: '급수, 자주 쓰는 문장을 자동으로 선별해서 말해줘요.',
    linkUri: 'https://www.i-scream.co.kr/blank/behavioral/behaviorView.do',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-04.png'
  },
  {
    contentId: 5,
    title: '이미지 생성',
    introduction: '원하는 이미지를 AI로 직접 생성해 보세요.',
    linkUri: 'https://edubank.i-scream.co.kr/media/list/10015?search_keyword',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-05.png'
  },
  {
    contentId: 6,
    title: 'AI 컬러링',
    introduction: '색칠하기 준비는 여기서! 생성형 AI로 간단하게 만들어 보세요.',
    linkUri: 'https://www.i-screammedia.com/',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-06.png'
  },
  {
    contentId: 7,
    title: 'test1',
    introduction: '급수, 자주 쓰는 문장을 자동으로 선별해서 말해줘요.',
    linkUri: 'https://www.i-screammedia.com/',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-01.png'
  },
  {
    contentId: 8,
    title: 'test2',
    introduction: '선생님의 업무 경감 도우미 막막한 업무에서 해방시켜 드립니다.',
    linkUri: 'https://www.i-screammedia.com/',
    imagePath: '../_nuxt/assets/images/bg-popular-contents-02.png'
  }
];

let recommendServiceData = [
  {
    contentId: 1,
    title: 'Get GPT',
    introduction: '사용자가 코딩 없이도 생성형 AI 앱을 만들 수 있도록 돕는 서비스',
    linkUri: 'https://getgpt.app/',
    imagePath: '../_nuxt/assets/images/logo-get-gpt.png'
  },
  {
    contentId: 2,
    title: 'CANVA',
    introduction: '프레젠테이션, 소셜 미디어 등 손쉽게 디자인',
    linkUri: 'https://www.canva.com/ko_kr/',
    imagePath: '../_nuxt/assets/images/logo-canva.png'
  },
  {
    contentId: 3,
    title: 'Adobe Express',
    introduction: '이미지, 비디오 등을 빠르고 쉽게 제작 가능',
    linkUri: 'https://www.adobe.com',
    imagePath: '../_nuxt/assets/images/logo-adove-express.png'
  },
  {
    contentId: 4,
    title: 'Microsoft Azure AI',
    introduction: '검색, 찾아보기, 쓰기 및 액션 & API 오퍼링',
    linkUri: 'https://ai.azure.com/',
    imagePath: '../_nuxt/assets/images/logo-microsoft-azure.png'
  },
  {
    contentId: 5,
    title: 'Chat GPT',
    introduction: '다양한 주제에 대해 대화를 할 수 있는 인공지는 모델',
    linkUri: 'https://openai.com/chatgpt/',
    imagePath: '../_nuxt/assets/images/logo-chat-gpt.png'
  },
  {
    contentId: 6,
    title: '뤼튼',
    introduction: '누구나 쉽게 사용할 수 있는 생성 AI 플랫폼 서비스',
    linkUri: 'https://wrtn.ai/',
    imagePath: '../_nuxt/assets/images/logo-wrtn.png'
  },
  {
    contentId: 7,
    title: 'Google Copilot',
    introduction: '이미지 인식, 음성 변환과 같은 서비스를 손쉽게 이용',
    linkUri: 'https://www.microsoft.com/ko-kr/microsoft-copilot',
    imagePath: '../_nuxt/assets/images/logo-Google-Copilot.png'
  },
  {
    contentId: 8,
    title: '이미지 없음 1',
    introduction: '이미지 없는 경우',
    linkUri: '',
    imagePath: '../_nuxt/assets/images/logo-no-img.png'
  },
  {
    contentId: 9,
    title: '이미지 없음 2',
    introduction: '이미지 없는 경우',
    linkUri: '',
    imagePath: '../_nuxt/assets/images/logo-no-img.png'
  },
  {
    contentId: 10,
    title: '이미지 없음 3',
    introduction: '이미지 없는 경우',
    linkUri: '',
    imagePath: '../_nuxt/assets/images/logo-no-img.png'
  }
];

export default defineEventHandler(async event => {
  const { areaId } = getQuery(event);

  if (event.req.method === 'GET') {
    return {
      success: true,
      code: '',
      message: '',
      responseTime: 0,
      paginationInfo: {},
      errors: {},
      data: areaId === '1' ? popularContentsData : recommendServiceData
    };
  }
});
