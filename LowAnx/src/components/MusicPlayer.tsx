import React, { useState, useRef, useEffect } from "react";
import {
  PlayFill,
  PauseFill,
  SkipStartFill,
  SkipEndFill,
  ArrowLeft,
  ArrowRight,
  List,
} from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";

const MusicPlayer = () => {
  const musicListData = [
    {
      id: "the-light-of-the-new-world",
      cover: "assets/img/kire-TheLightOfTheNewWorld.jpg",
      title: "The light of the new world",
      artist: "Kire",
      file: "./assets/song/Kire -  The light of the new world.mp3",
    },
    {
      id: "bridge",
      cover: "assets/img/kire-Bridge.jpeg",
      title: "Bridge",
      artist: "Kire",
      file: "./assets/song/Kire - Bridge.mp3",
    },
    {
      id: "forgive-me",
      cover: "assets/img/kire-ForgiveMe.jpeg",
      title: "Forgive me",
      artist: "Kire",
      file: "./assets/song/Kire - Forgive me.mp3",
    },
    {
      id: "lucid",
      cover: "assets/img/kire-Lucid.jpg",
      title: "Lucid",
      artist: "Kire",
      file: "./assets/song/Kire - Lucid.mp3",
    },
    {
      id: "sunrise",
      cover: "assets/img/kire-Sunrise.jpg",
      title: "Sunrise",
      artist: "Kire",
      file: "./assets/song/Kire - Sunrise.mp3",
    },
    {
      id: "little-cloud",
      cover: "assets/img/charye-LittleCloud.jpg",
      title: "Little Cloud",
      artist: "Charye",
      file: "./assets/song/Little Cloud - backing tracks.wav",
    },
    {
      id: "sunrise",
      cover: "assets/img/charye-MaskSelf.jpg",
      title: "MaskSelf",
      artist: "Charye",
      file: "./assets/song/MaskSelf 1 - Music & BackVocals.wav",
    },
    // Add more songs here
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateProgress = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      };

      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", updateProgress);

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", updateProgress);
      };
    }
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    const audio = audioRef.current;
    if (progressBar && audio) {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * audio.duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipTime = (amount: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(
        Math.max(audio.currentTime + amount, 0),
        duration
      );
    }
  };

  const handleNextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % musicListData.length);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex(
      (currentSongIndex - 1 + musicListData.length) % musicListData.length
    );
    setCurrentTime(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      setCurrentTime(0);
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentSongIndex]);

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + "...";
  };

  const currentSong = musicListData[currentSongIndex];

  return (
    <div className="music-player">
      <div className="song-info" onClick={() => setShowModal(true)}>
        <img src={currentSong.cover} alt="Song Cover" className="song-cover" />
        <div className="song-details">
          <div className="song-title">{truncateTitle(currentSong.title, 10)}</div>
          <div className="artist">{currentSong.artist}</div>
        </div>
      </div>
      <button
        className="control-button list-button"
        onClick={() => setShowModal(true)}
      >
        <List />
      </button>
      <div className="player-controls">
        <button className="control-button" onClick={() => skipTime(-10)}>
          <ArrowLeft />
        </button>
        <button className="control-button prev-button" onClick={handlePrevSong}>
          <SkipStartFill />
        </button>
        <button className="control-button play-button" onClick={togglePlay}>
          {isPlaying ? <PauseFill /> : <PlayFill />}
        </button>
        <button className="control-button next-button" onClick={handleNextSong}>
          <SkipEndFill />
        </button>
        <button className="control-button" onClick={() => skipTime(10)}>
          <ArrowRight />
        </button>
      </div>
      <div
        className="progress-bar"
        onClick={handleProgressBarClick}
        ref={progressBarRef}
      >
        <div
          className="progress"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <span className="text-muted-foreground">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
      <audio ref={audioRef} src={currentSong.file} />

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="fullscreen-modal"
        aria-labelledby="full-screen-modal"
      >
        <Modal.Header
          closeButton
          className="position-relative d-flex flex-column"
        >
          <img
            src={currentSong.cover}
            alt="Song Cover"
            className="img-fluid rounded mx-auto d-block song-image"
            style={{ zIndex: 0 }}
          />
          <div className="w-100 d-flex flex-column align-items-center text-center">
            <div className="modal-song-title mb-2">{currentSong.title}</div>
            <div className="modal-artist mb-3">{currentSong.artist}</div>
            <div
              className="modal-progress-bar w-100 mb-4"
              onClick={handleProgressBarClick}
              ref={progressBarRef}
            >
              <div
                className="progress"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
              <span className="text-muted">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="modal-player-control mt-2 mb-1">
              <button className="btn btn-light me-2" onClick={() => skipTime(-10)}>
                <ArrowLeft />
              </button>
              <button className="btn btn-light me-2" onClick={handlePrevSong}>
                <SkipStartFill />
              </button>
              <button className="btn btn-light me-2" onClick={togglePlay}>
                {isPlaying ? <PauseFill /> : <PlayFill />}
              </button>
              <button className="btn btn-light me-2" onClick={handleNextSong}>
                <SkipEndFill />
              </button>
              <button className="btn btn-light me-2" onClick={() => skipTime(10)}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="music-list">
            {musicListData.map((song, index) => (
              <div
                key={song.id}
                className="music-item d-flex align-items-center mb-2 p-3 border rounded"
                onClick={() => {
                  setCurrentSongIndex(index);
                  setCurrentTime(0);
                  setIsPlaying(true);
                  setShowModal(true);
                }}
              >
                <img
                  src={song.cover}
                  alt={song.title}
                  className="img-thumbnail me-3"
                />
                <div className="music-details">
                  <div className="music-title">{song.title}</div>
                  <div className="music-artist text-muted">{song.artist}</div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MusicPlayer;
