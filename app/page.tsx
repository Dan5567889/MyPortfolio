import Image from "next/image";
import Button from "./components/Button";
import Project_card from "./components/Project_card";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 place-content-center gap-4 bg-[#2E4F4F] text-[#F3F4F4]">
      <div className="flex flex-col items-center gap-2 p-5 ">
        <h1> About </h1>
        <h3> Dante Hernandez</h3>
        <div className="flex flex-row gap-40   ">
          <Image
            className="w-30 h-20  "
            src="/pr.jpg"
            alt="Puerto Rico Flag"
            width={148}
            height={50}
          />
          <Image
            className="rounded-full"
            src="/ME.jpg"
            alt="Profile Picture"
            width={148}
            height={148}
          />
          <Image
            className="w-30 h-20"
            src="/spain.jpg"
            alt="Spain Flag"
            width={148}
            height={50}
          />
        </div>
        <Link href="https://www.linkedin.com/in/dante-hernandez-8026313a6/" target="_blank" rel="noopener noreferrer">
          <Image src="/LinkedIn.jpg" 
          alt="LinkedIn" 
          width={52} 
          height={52} 
          />
        </Link>
      </div>

    <div className="flex flex-col p-5"> 
      <h4 className="bg-[#0E8388]">
        Description: I am a current High School senior at Technology High School
        in Newark, New Jersey. I plan on attending a 4-year College.
      </h4>
      <br/>
      <h4 className="bg-[#0E8388]">
        Internships: I was a intern for a VR game development course the summer
        before my freshman year. They even made a article!
      </h4>
      <br/>
      <h4 className="bg-[#0E8388]">
        Skills: I am proficient in using Figma, HTML, CSS, Java, teamwork,
        communication, and using Lucid Charts.
      </h4>
      </div>
    </div>
  );
}
