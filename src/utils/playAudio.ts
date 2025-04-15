// const audioRef = useRef<HTMLAudioElement | null>(null);  <-- use like this
const playAudio = (audioRef: any) => {
  if (audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }
}

export default playAudio