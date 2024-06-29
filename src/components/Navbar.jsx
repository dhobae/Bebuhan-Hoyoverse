/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaPen,
  FaBook,
  FaPlay,
  FaPause,
  FaCompactDisc,
} from "react-icons/fa";

// const Navbar = ({ isPlaying, playMusic, pauseMusic }) => {
//   // const visualizerRef = useRef < HTMLCanvasElement > null;

//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const headerRef = useRef();

//   useEffect(() => {
//     let handler = (e) => {
//       if (e.detail === 2) return; // ignore double-clicks
//       if (!headerRef.current.contains(e.target)) {
//         setIsOpen(false);
//         // console.log(headerRef.current);
//       }
//     };

//     document.addEventListener("click", handler);

//     return () => {
//       document.removeEventListener("click", handler);
//     };
//   });

//   useEffect(() => {
//     if (location.pathname === "/") {
//       document.body.classList.add("overflow-y-hidden");
//       // jika ada putih2 di swiperjs bawahnya bearti overflow nya bermasalah
//     } else {
//       document.body.classList.remove("overflow-y-hidden");
//     }
//   }, [location.pathname]);

//   const links = [
//     {
//       to: "/",
//       icon: <FaHome className="h-5 w-5 text-gray-700" />,
//       label: "Home",
//     },
//     {
//       to: "/daftar",
//       icon: <FaPen className="h-5 w-5 text-gray-700" />,
//       label: "Daftar",
//     },
//     {
//       to: "/list-anggota",
//       icon: <FaBook className="h-5 w-5 text-gray-700" />,
//       label: "List Anggota",
//     },
//   ];

//   return (
//     <>
//       <header
//         className={`w-full z-50 ${
//           location.pathname !== "/"
//             ? "bg-white sticky top-0 px-2 lg:px-16"
//             : "bg-transparent absolute top-0"
//         }`}
//         ref={headerRef}
//       >
//         {/* button trigger */}
//         <div
//           className={`flex ${
//             location.pathname !== "/"
//               ? "justify-between items-center"
//               : "justify-end"
//           }`}
//         >
//           {location.pathname !== "/" ? (
//             <div className="p-3">
//               {/* <h3 className="">Bebuhan Hoyoverse</h3> */}
//               <Link to={"/"} className="text-xl font-bold">
//                 Bebuhan Hoyoverse
//               </Link>
//             </div>
//           ) : null}

//           <button
//             onClick={(e) => {
//               e.stopPropagation(); // Stop the event from propagating further
//               setIsOpen(!isOpen);
//             }}
//             className={`p-4 rounded-tl-lg rounded-bl-lg bg-opacity-75 ${
//               location.pathname !== "/" ? "bg-transparent" : "bg-white"
//             }`}
//           >
//             {/* <span className="h-6 w-6 text-gray-700">
//               {isOpen ? <FaTimes /> : <FaBars />}
//             </span> */}
//             {isOpen ? (
//               <FaTimes className="h-6 w-6 text-gray-700" />
//             ) : (
//               <FaBars className="h-6 w-6 text-gray-700" />
//             )}
//           </button>
//         </div>

//         {/* lists */}
//         <nav
//           className={`absolute right-3 z-[250] top-[4.5rem] w-1/2 md:w-1/3 lg:w-1/6 bg-white
//             ${
//               location.pathname !== "/" ? "bg-opacity-100" : "bg-opacity-75"
//             } rounded-lg shadow-lg transition-opacity duration-300 ${
//             isOpen ? "opacity-100 block" : "opacity-0 hidden"
//           }`}
//         >
//           <div className="flex flex-col space-y-5 p-5">
//             {links.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.to}
//                 className={`flex items-center space-x-3 px-3 py-3 rounded-md transition-all duration-300 ${
//                   location.pathname === link.to
//                     ? "bg-orange-400"
//                     : "hover:bg-orange-400"
//                 }`}
//               >
//                 {link.icon}
//                 <span className="text-gray-700">{link.label}</span>
//               </Link>
//             ))}

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 isPlaying ? pauseMusic() : playMusic();
//               }}
//             >
//               <div
//                 className={`flex items-center space-x-3 px-3 py-3 rounded-md hover:bg-teal-400 transition-all duration-300 ${
//                   isPlaying ? "bg-teal-400" : null
//                 }`}
//               >
//                 <div>
//                   {isPlaying ? (
//                     <FaPause className="h-5 w-5 text-gray-700" />
//                   ) : (
//                     <FaPlay className="h-5 w-5 text-gray-700" />
//                   )}
//                 </div>
//                 <div className="text-gray-700">
//                   {isPlaying ? "Pause?" : "Play?"}
//                 </div>
//               </div>
//             </button>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

const Navbar = ({ isPlaying, playMusic, pauseMusic, sound }) => {
  const [rotation, setRotation] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalIdRef.current = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 1);
      }, 10);
    } else {
      clearInterval(intervalIdRef.current);
    }
    return () => clearInterval(intervalIdRef.current);
  }, [isPlaying]);

  useEffect(() => {
    const handleEnd = () => {
      setRotation(0); // Reset rotation when music ends
    };

    if (sound) {
      sound.on("end", handleEnd);
    }

    return () => {
      if (sound) {
        sound.off("end", handleEnd);
      }
    };
  }, [sound]);

  const handleClick = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  console.log(isPlaying);

  return (
    <nav className="z-50 bg-transparent absolute top-4 right-4">
      <div className="text-white">
        <button onClick={handleClick}>
          <div style={{ transform: `rotate(${rotation}deg)` }}>
            <FaCompactDisc className="text-4xl" />
          </div>
        </button>
      </div>
    </nav>
  );
};


export default Navbar;


