import Button from "./Button";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-[#2C3333] text-[#F3F4F4] flex flex-row items-center">
      <div className="flex flex-row gap-5">
        <Image
          src="/robot.jpg"
          alt="Profile Picture"
          width={65}
          height={71}
        />
        <h4 className="p-5">Dante Hernandez</h4>
      </div>

      <div className="flex flex-row p-5 gap-4 ml-auto">
        
      <Button text="About" href="/"/>
      <Button text="Projects" href="/Projects" />
      </div>
    </div>
  );
}