const Banner = ({ title, bgImage }) => {
  return (
    <div
      className="h-[40vh] sm:h-[50vh] mt-20 sm:mt-25 flex justify-center items-center bg-center bg-cover bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <h2 className="text-3xl sm:text-5xl text-zinc-800 z-10 bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl font-bold shadow-lg z-10 text-center mx-4">
        {title}
      </h2>
      <div className="bg-black/50 absolute inset-0"></div>
    </div>
  );
};

export default Banner;
