import { Image } from "@nextui-org/image";

const Photographs = () => {
    return (
      <div className="rounded-full overflow-hidden w-[300px] h-[300px]">
        <Image
          src="/Tamjid.jpg"
          alt="Photograph"
          width={300}
          height={300}
          className="rounded-full w-full h-full "
         
        />
      </div>
    );
  };
  export default Photographs