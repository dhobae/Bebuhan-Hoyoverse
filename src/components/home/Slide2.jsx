// import imgSection2Kafka from "/img/kafka.jpeg";
// import imgSection2Hutao from "/img/hutao.jpeg";
// import imgSection2Thelema from "/img/thelema.jpeg";
// import imgSection2Nicole from "/img/nicole.jpeg";

import communityImage from "/img/foto-komunitas.jpg";

// const images = [
//   imgSection2Kafka,
//   imgSection2Hutao,
//   imgSection2Thelema,
//   imgSection2Nicole,
// ];

const Slide2 = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="px-3 pt-3 pb-12">
          <div className="max-w-4xl text-white">
            <h1 className="mb-8 text-4xl font-bold text-center">
              About Us?
            </h1>
            <div className="flex flex-wrap justify-center gap-3 p-6 mb-3 lg:p-0">
              {/* {images.map((imgSrc, index) => (
                <img
                  key={index}
                  className="block object-cover w-32 h-32 rounded-lg"
                  src={imgSrc}
                  alt={`Image ${index + 1}`}
                />
              ))} */}
              <img src={communityImage} alt="#none#" className="block object-cover rounded-lg" />
            </div>
            <p className="p-3 mt-4 text-center lg:p-0 md:text-lg lg:text-xl ">
              Sebuah komunitas yang terbentuk pada awalnya hanya dari sebuah ide
              iseng karena pada saat itu tujuanya adalah untuk saling bantu jika
              ada kesulitan dalam memainkan sebuah game atau pun tips dan trik
              dari game hoyoverse ini
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide2;
