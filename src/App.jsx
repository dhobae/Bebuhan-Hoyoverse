/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./routes.jsx";
import { useState, useEffect } from "react";
import { Howl } from "howler";
import musicFile from "/music/dacapo.mp3";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, useLocation } from "react-router-dom";

import { TbMusicOff } from "react-icons/tb";
import { IoIosMusicalNotes } from "react-icons/io";



const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const playMusic = async () => {
    if (!sound) {
      const sound = new Howl({
        src: [musicFile],
        html5: true,
        autoplay: true,
        loop: true,
      });

      sound.on("play", () => {
        setIsPlaying(true);
      });

      sound.on("pause", () => {
        setIsPlaying(false);
      });

      sound.on("end", () => {
        setIsPlaying(false);
      });

      try {
        await sound.play();
        setSound(sound);
      } catch (error) {
        console.error("Error playing music:", error);
      }
    } else {
      if (!isPlaying) {
        sound.play();
      }
    }
  };

  const pauseMusic = () => {
    if (sound && isPlaying) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const MySwal = withReactContent(Swal);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (location.pathname === "/") {
        MySwal.fire({
          title: "Do you want to play the music?",
          showCancelButton: true,
          confirmButtonText: <IoIosMusicalNotes className="h-5 w-5" />,
          cancelButtonText: <TbMusicOff className="h-5 w-5" />,
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            playMusic();
          } else if (result.isDismissed) {
            pauseMusic();
          }
        });
      }
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <Navbar
        isPlaying={isPlaying}
        playMusic={playMusic}
        pauseMusic={pauseMusic}
        sound={sound}
      />
      <AppRoutes />
    </Router>
  );
};


export default App;

