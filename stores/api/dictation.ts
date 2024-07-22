export const useApiDictationStore = defineStore('apiDictation', () => {
  const dictationList = ref<Dictation[]>([]); // 받아쓰기 목록
  const audioFile = ref<string | null>(null); // TTS 음성파일(.wav)

  // TTS 음성 파일 받아오기
  const getDictationTTS = async (text: string, sex: 'M1' | 'M2' | 'W1' | 'W2') => {
    const response = await useCustomFetch<AudioResponse>('/dictation/tts', {
      method: 'POST',
      body: {
        sex: sex,
        text: text
      }
    });

    if (response.success) {
      const blob = new Blob([response.data.voiceFile], { type: 'audio/wav' });
      const url = window.URL.createObjectURL(blob);
      audioFile.value = 'test.wav';
    } else {
      audioFile.value = null;
      throw createError({ statusCode: 400, statusMessage: 'fetch error', fatal: true });
    }

    return response;
  };

  // 받아쓰기 불러오기
  const getDictationList = async ({
    gradeSemester,
    dictationLevel,
    pageSize
  }: {
    gradeSemester: string;
    dictationLevel: number;
    pageSize: string;
  }) => {
    const response = await useCustomFetch<DictationResponse>('/dictation/list', {
      method: 'GET',
      query: {
        gradeSemester,
        dictationLevel,
        pageIndex: 1,
        pageSize: Number(pageSize)
      }
    });

    dictationList.value = response.data;

    return response;
  };

  // 받아쓰기 생성하기
  const getDictationAI = async ({
    gradeSemester,
    dictationLevel,
    pageSize
  }: {
    gradeSemester: string;
    dictationLevel: number;
    pageSize: number;
  }) => {
    const response = await useCustomFetch<DictationResponse>('/dictation/ai', {
      method: 'POST',
      body: {
        gradeSemester,
        dictationLevel,
        pageSize
      }
    });

    dictationList.value = response.data;

    return response;
  };

  return {
    // state
    dictationList,
    audioFile,
    // api
    getDictationList,
    getDictationTTS,
    getDictationAI
  };
});
