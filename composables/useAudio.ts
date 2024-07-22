const speed = { 0: 0.5, 1: 1.0, 2: 1.5 };
const repeat = { 0: 1, 1: 2, 2: 3 };

const useAudio = () => {
  // store
  const { getDictationTTS } = useApiDictationStore();

  // state
  const audioPlayer = ref<HTMLAudioElement | null>(null);
  const isPlayingAudio = ref(false);
  const playCount = ref(0);

  const handleAudio = async (type: 'read' | 'dictation', text: string, option: AudioOption) => {
    if (!audioPlayer.value) return;

    let newText = '';

    if (type === 'read') {
      if (option.rangeType === 0) {
        newText = text.split('\n').join(' ');
      } else if (option.rangeType === 1) {
        newText = text
          .split('\n')
          .slice(option.rangeStartNum - 1, option.rangeEndNum)
          .join(' ');
      }
    } else if (type === 'dictation') {
      newText = text;
    }

    if (audioPlayer.value.paused) {
      try {
        await getDictationTTS(newText, option.voice);

        audioPlayer.value.playbackRate = speed[option.speed];
        audioPlayer.value.play();
      } catch (error) {
        audioPlayer.value.pause();
      }
    } else {
      audioPlayer.value.pause();
    }
  };

  const handleAudioEnded = (option: AudioOption) => {
    if (!audioPlayer.value) return;

    playCount.value++;
    if (playCount.value < repeat[option.repeat]) {
      audioPlayer.value.play();
    } else {
      playCount.value = 0;
      isPlayingAudio.value = false;
    }
  };

  const handlePlayingStatus = (status: boolean) => {
    isPlayingAudio.value = status;
  };

  return {
    audioPlayer,
    isPlayingAudio,
    handleAudio,
    handleAudioEnded,
    handlePlayingStatus
  };
};

export default useAudio;
