import { useEffect, useMemo, useRef, useState } from "react";
import { cssWrapper } from "./style";
import { cssVideo } from "./style";

const formatTime = doubleSeconds => {
  const allSeconds = Math.floor(doubleSeconds)
  const minutes = `${Math.floor(allSeconds / 60)}`
  const seconds = `${allSeconds % 60}`
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

const Player = () => {
  const videoRef = useRef()

  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackTime, setPlaybackTime] = useState(0)
  const [playbackDuration, setPlaybackDuration] = useState(0)
  const [playbackChangeSource, setPlaybackChangeSource] = useState('video')
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (!videoRef.current) {
      return
    }

    videoRef.current.addEventListener('durationchange', evt => {
      setPlaybackDuration(evt.target.duration)
    })

    videoRef.current.addEventListener('timeupdate', evt => {
      setPlaybackTime(evt.target.currentTime)
      setPlaybackChangeSource('video')
    })
  }, [videoRef])

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (playbackChangeSource !== 'video') {
      videoRef.current.currentTime = playbackTime
    }
  }, [playbackChangeSource, playbackTime])

  useEffect(() => {
    videoRef.current.muted = isMuted
  }, [isMuted])

  const playbackTimeView = useMemo(() => formatTime(playbackTime), [playbackTime])
  const playbackDurationView = useMemo(() => formatTime(playbackDuration), [playbackDuration])

  const handleTogglePlay = () => {
    setIsPlaying(isPlaying => !isPlaying)
  }

  const handleToggelMute = () => {
    setIsMuted(isMuted => !isMuted)
  }

  const handleSeek = (evt) => {
    setPlaybackChangeSource('seeker')
    setPlaybackTime(evt.target.valueAsNumber)
  }

  return(
    <div>
      <div className={cssWrapper}>
        <video
          ref={videoRef}
          className={cssVideo}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <button type="button" onClick={handleTogglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button type="button" onClick={handleToggelMute}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <input 
        type="range" 
        value={playbackTime} 
        max={playbackDuration} 
        onChange={handleSeek} 
        step={0.000001} 
      />
      <span>{playbackTimeView}/{playbackDurationView}</span>
    </div>
  )
}

export default Player;
