import imgSection2Kafka from "/img/kafka.jpeg";
import imgSection2Hutao from "/img/hutao.jpeg";
import imgSection2Thelema from "/img/thelema.jpeg";
import imgSection2Nicole from "/img/nicole.jpeg";

const images = [
  imgSection2Kafka,
  imgSection2Hutao,
  imgSection2Thelema,
  imgSection2Nicole,
];

const Slide2 = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="pt-3 px-3 pb-12">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl font-bold mb-8 text-center">
              About Us?
            </h1>
            <div className="flex justify-center gap-3 mb-3 flex-wrap">
              {images.map((imgSrc, index) => (
                <img
                  key={index}
                  className="block w-32 h-32 object-cover rounded-lg"
                  src={imgSrc}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-center mt-4 p-3 lg:p-0 md:text-lg lg:text-xl ">
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
