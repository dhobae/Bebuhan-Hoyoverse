import hovkiana from "/live-wallpaper/compressedhovkiana.mp4";

const VidAnimate = () => {
  return (
    // area
    <div className="absolute inset-0">
      {/*  wrap */}
      <div className="w-full h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-screen object-cover brightness-50 overflow-hidden"
        >
          <source src={hovkiana} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VidAnimate;
