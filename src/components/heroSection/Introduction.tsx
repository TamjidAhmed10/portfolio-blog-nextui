import { Button } from "@nextui-org/button";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Introduction = () => {
    return (
      <div className=" mx-auto flex flex-col gap-4 px-10 py-5 md:p-14">
        <h1 className=" font-bold text-4xl  ">Front-End React Developer</h1>
        <p>
          I am a Front-End / Full-Stack Developer. I am currently working at One
          Direction Companies Limited as a Front-End Developer
        </p>
        <div className=" flex gap-2">
          <BsGithub size={30} /> <BsLinkedin size={30} />
        </div>
        <div className=" flex gap-3">
          <Button color="secondary" className="  basis-1/4 ">
            Resume
          </Button>
          <Button color="secondary" className="  basis-1/4 ">
            Contact Me
          </Button>
        </div>
      </div>
    );
  };
  export default Introduction