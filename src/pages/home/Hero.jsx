// import header from "../../assets/images/maldives1.jpg";

export const Hero = () => {

  return (
    <div className="relative">
      <div className="h-[330px] w-full bg-transparent ">
        {/* <img
          src={header}
          alt="profile header"
          className="h-[260px] w-full object-cover object-bottom"
        /> */}
      </div>
      <div className="absolute top-[17vh] bg-transparent text-center text-black z-30 w-screen">
        <h1 className="font-alli text-[40px] xs:text-[55px] md:text-[80px] tracking-wide">
          Find your next journey
        </h1>
      </div>
    </div>
  );
};
