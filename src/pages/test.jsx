import { useState } from "react";
import { Howl } from "howler";
import { FaPlay, FaPause } from "react-icons/fa";
import musicFile from "/music/tiktok.mp3";

const Test = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const playMusic = async () => {
    if (!sound) {
      const newSound = new Howl({
        src: [musicFile],
        html5: true,
        autoplay: true,
        onend: () => {
          console.log("Music ended!");
          setIsPlaying(false);
        },
      });

      // Coba untuk memulai konteks audio secara eksplisit
      try {
        await newSound.play();
        setSound(newSound);
        setIsPlaying(true);
      } catch (error) {
        console.error("AudioContext not allowed to start:", error);
        // Handle error, mungkin menampilkan pesan untuk pengguna
      }
    } else {
      sound.play();
      setIsPlaying(true);
    }
  };

  const pauseMusic = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <h1>Music Player</h1>
      <button onClick={isPlaying ? pauseMusic : playMusic}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default Test;
