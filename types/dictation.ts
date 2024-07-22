// 읽어주기 옵션
interface AudioOption {
  voice: 'M1' | 'M2' | 'W1' | 'W2';
  speed: 0 | 1 | 2;
  repeat: 0 | 1 | 2;
  rangeType: 0 | 1;
  rangeStartNum: number;
  rangeEndNum: number;
}

interface AudioResponse extends BaseResponse {
  data: {
    voiceFile: ArrayBuffer;
  };
}

// 받아쓰기 리스트
interface Word {
  wordId: number;
  dictationId: number;
  word: string;
}
interface Dictation {
  dictationId: number;
  gradeSemester: string;
  title: string;
  words: Word[];
}
interface DictationResponse extends BasePageResponse {
  data: Dictation[];
}
