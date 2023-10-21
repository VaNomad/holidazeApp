// import header from "../../assets/images/maldives1.jpg";

export const Hero = () => {

  return (
    <div className="relative">
      <div className="h-[260px]">
        {/* <img
          src={header}
          alt="profile header"
          className="h-[260px] w-full object-cover object-bottom"
        /> */}
      </div>
      <div className="absolute bottom-[-3rem] bg-transparent text-center bg-black z-30 w-screen">
        <h1 className="font-alli text-[40px] xs:text-[55px] md:text-[80px] tracking-wide decoration-holipink underline-offset-8">
          Find your next journey
        </h1>
      </div>
    </div>
  );
};
