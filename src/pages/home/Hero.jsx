import header from "../../assets/images/maldives1.jpg";

export const Hero = () => {

  return (
    <div className="relative">
      {/* <div className="absolute top-10 bg-transparent text-black bg-black z-30 w-screen">
        <h1 className="font-alli text-[40px] decoration-holipink underline-offset-8">
          Find your next journey here
        </h1>
      </div> */}
      <div>
        <img
          src={header}
          alt="profile header"
          className="h-[260px] w-full object-cover object-bottom"
        />
      </div>
      {/* <div className="absolute bottom-0 bg-transparent text-center bg-black z-30 w-screen">
        <h1 className="font-alli text-[40px] decoration-holipink underline-offset-8">
          Popular Venues
        </h1>
      </div> */}
      <div className="absolute bottom-[-1rem] bg-transparent text-center bg-black z-30 w-screen">
        <h1 className="font-alli text-[40px] decoration-holipink underline-offset-8">
          Find your next journey..
        </h1>
      </div>
    </div>
  );
};
