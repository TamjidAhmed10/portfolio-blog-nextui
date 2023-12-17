import Introduction from "./Introduction";
import Photographs from "./Photograph";

const Hero = () => {
  return (
    <div className="container mx-auto max-w-7xl grid md:grid-cols-2 items-center justify-items-center py-8">
      <div className=" w-[85%] max-w-[308px]">
        <Photographs />
      </div>
      <div className="">
        <Introduction />
      </div>
    </div>
  );
};
export default Hero;
