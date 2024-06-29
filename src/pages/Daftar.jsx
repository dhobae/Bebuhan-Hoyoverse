/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import topBannerImg from "/img/daftar-banner.jpg";
import { FaPaperPlane } from "react-icons/fa";

// const Daftar = () => {
//   // 1. Membuat state untuk menyimpan data provinsi
//   const [provinces, setProvinces] = useState([]);
//   // 2. Menggunakan useEffect untuk menjalankan kode saat komponen pertama kali dirender
//   useEffect(() => {
//     // 3. Mendefinisikan fungsi asinkron untuk mengambil data provinsi dari API
//     const fetchProvinces = async () => {
//       try {
//         // 4. Mengirim permintaan GET ke API untuk mendapatkan data provinsi
//         const response = await axios.get(
//           "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
//         );
//         // 5. Menyimpan data provinsi yang diterima dari API ke dalam state
//         setProvinces(response.data);
//         // 6. Menampilkan data provinsi dalam console log untuk pengecekan
//         // console.log(response.data);
//       } catch (error) {
//         // 7. Menangani kesalahan jika terjadi saat mengambil data dari API
//         console.error("Error fetching provinces:", error);
//       }
//     };
//     // 8. Memanggil fungsi fetchProvinces untuk mengambil data
//     fetchProvinces();
//   }, []); // 9. Array kosong [] memastikan bahwa efek hanya dijalankan sekali setelah komponen pertama kali dirender

//   const [namaLengkap, setNamaLengkap] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [selectedProvince, setSelectedProvince] =
//     useState("KALIMANTAN SELATAN");
//   const [kotaKabupaten, setKotaKabupaten] = useState("");

//   const phoneCountryCode = "+62";

//   const handleNamaLengkapChange = (e) => {
//     setNamaLengkap(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const input = e.target.value;
//     // Menggunakan regex untuk menghapus karakter selain angka
//     const sanitizedInput = input.replace(/\D/g, "");
//     setPhoneNumber(sanitizedInput);
//   };

//   const handleProvinceChange = (e) => {
//     setSelectedProvince(e.target.value);
//   };

//   const handleKotaKabupatenChange = (e) => {
//     setKotaKabupaten(e.target.value);
//   };

//   // const Submit = (e) => {
//   //   e.preventDefault();

//   //   if (!namaLengkap || !phoneNumber || !selectedProvince || !kotaKabupaten) {
//   //     Swal.fire({
//   //       icon: "error",
//   //       title: "Oops...",
//   //       text: "Harap lengkapi semua field sebelum mengirimkan formulir.",
//   //     });
//   //     return;
//   //   }
//   //   let sanitizedPhoneNumber = phoneNumber.replace(/^0+/, "");
//   //   let countryPhoneNumber = phoneCountryCode + sanitizedPhoneNumber;

//   //   const formData = new FormData();
//   //   formData.append("nama", namaLengkap);
//   //   formData.append("nohp", countryPhoneNumber);
//   //   formData.append("provinsi", selectedProvince);
//   //   formData.append("kotakabupaten", kotaKabupaten);

//   //   fetch(
//   //     "https://script.google.com/macros/s/AKfycbyJqU1vqzGsOLAvVSqv9QQsHr8u2O_5LW7FUWDO-spGEQP2k_fR_Hg1eIwur5KOkWf1/exec",
//   //     {
//   //       method: "POST",
//   //       body: formData,
//   //     }
//   //   )
//   //     // .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data); // Output response dari server
//   //       // console.log(data.status);
//   //       if (data.status === 200) {
//   //         Swal.fire({
//   //           icon: "success",
//   //           title: "Berhasil!",
//   //           text: "Data berhasil dimasukkan.",
//   //         });
//   //       } else {
//   //         Swal.fire({
//   //           icon: "error",
//   //           title: "Gagal!",
//   //           text: "Terjadi kesalahan saat memasukkan data.",
//   //         });
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error:", error);
//   //       Swal.fire({
//   //         icon: "error",
//   //         title: "Error!",
//   //         text: "Terjadi kesalahan saat mengirimkan permintaan, coba lagi nanti",
//   //       });
//   //     });
//   // };

//   const Submit = async (e) => {
//     e.preventDefault();

//     if (!namaLengkap || !phoneNumber || !selectedProvince || !kotaKabupaten) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Harap lengkapi semua field sebelum mengirimkan formulir.",
//       });
//       return;
//     }

//     let sanitizedPhoneNumber = phoneNumber.replace(/^0+/, "");
//     let countryPhoneNumber = phoneCountryCode + sanitizedPhoneNumber;

//     const formData = new FormData();
//     formData.append("nama", namaLengkap);
//     formData.append("nohp", countryPhoneNumber);
//     formData.append("provinsi", selectedProvince);
//     formData.append("kotakabupaten", kotaKabupaten);

//     try {
//       const response = await axios.post(
//         "https://script.google.com/macros/s/AKfycbz7p_EX-jyTxSa2HZFW0MpooU76G6YRr_Lz0ji6HiIclD_9D6wcPbyp4WjjEkNgnmyA/exec",
//         formData
//       );

//       console.log(response.data); // Output response dari server

//       if (response.status === 200) {
//         Swal.fire({
//           icon: "success",
//           title: "Berhasil!",
//           text: "Data berhasil dimasukkan.",
//         });
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Gagal!",
//           text: "Terjadi kesalahan saat memasukkan data.",
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Error!",
//         text: "Terjadi kesalahan saat mengirimkan permintaan, coba lagi nanti",
//       });
//     }

//     setTimeout(() => {
//       setNamaLengkap("");
//       setPhoneNumber("");
//       setSelectedProvince("");
//       setKotaKabupaten("");
//     }, 1000);
//   };

//   return (
//     <>
//       <div className="h-screen flex items-center justify-center px-3 lg:px-0">
//         <div className="w-full max-w-5xl bg-white rounded-lg shadow-md">
//           {/* card-header */}
//           <img
//             src={topBannerImg}
//             alt="images"
//             className="w-full rounded-t-lg"
//           />

//           {/* card body */}
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-4 text-center">
//               Daftar Sebagai Anggota
//             </h2>

//             <form onSubmit={(e) => Submit(e)}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="nama-lengkap"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Nama Lengkap
//                   <span className="text-red-400 text-sm">*</span>
//                 </label>
//                 <input
//                   name="namalengkap"
//                   type="text"
//                   id="nama-lengkap"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   placeholder="Masukkan Nama"
//                   value={namaLengkap}
//                   onChange={handleNamaLengkapChange}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="noHpWa"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   No. HP/WA
//                   <span className="text-red-400 text-sm">*</span>
//                 </label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     value={phoneCountryCode}
//                     className="w-16 px-3 py-2 border rounded-l-md bg-gray-100 text-gray-500"
//                     disabled
//                   />
//                   <input
//                     name="nohpwa"
//                     type="tel"
//                     id="noHpWa"
//                     className="flex-1 px-3 py-2 border rounded-r-md focus:outline-none focus:ring focus:border-blue-300"
//                     placeholder="Masukkan nomor HP/WA"
//                     value={phoneNumber}
//                     onChange={handlePhoneNumberChange}
//                   />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="provinsi"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Provinsi
//                   <span className="text-red-400 text-sm">*</span>
//                 </label>
//                 <select
//                   name="provinsi"
//                   id="provinsi"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   value={selectedProvince} // Gunakan nilai dari state selectedProvince
//                   onChange={handleProvinceChange} // Tangani perubahan pada elemen select
//                 >
//                   <option value="" disabled>
//                     Pilih Provinsi
//                   </option>
//                   {provinces.map((province) => (
//                     <option key={province.id} value={province.name}>
//                       {province.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="kotaKabupaten"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Kota/Kabupaten
//                   <span className="text-red-400 text-sm">*</span>
//                 </label>
//                 <input
//                   name="kotaKabupaten"
//                   type="text"
//                   id="kotaKabupaten"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   placeholder="Masukkan Kota/Kabupaten"
//                   value={kotaKabupaten}
//                   onChange={handleKotaKabupatenChange}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
//               >
//                 <div className="flex justify-center items-center gap-3">
//                   <FaPaperPlane />
//                   <div>KIRIM</div>
//                 </div>
//               </button>
//             </form>
//           </div>
//           {/* card-body */}
//         </div>
//         {/* end wrap */}
//       </div>
//     </>
//   );
// };

const Daftar = () => {
  const gFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScPrPOIo7daVA2i9Fgqr4Lj7ihWW7Yg22r9Tm52-yGKcaLn2A/viewform?usp=sf_link";

  useEffect(() => {
    window.location.href = gFormLink;
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center text-md font-semibold underline">
        Kamu Diarahkan Ke Link Pendaftaran ...
      </div>
    </>
  );
};

export default Daftar;
