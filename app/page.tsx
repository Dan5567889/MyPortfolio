import Image from "next/image";
import Button from "./components/Button";
import Project_card from "./components/Project_card";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="grid  grid-cols-1 place-content-center gap-4 bg-[#2E4F4F] text-[#F3F4F4]">
     <Navbar />
      <div className="flex flex-col items-center gap-2"> 
      <h1> About </h1>
      <h3> Dante Hernandez</h3>
        <Image className="rounded-full" src="/me.jpg" alt="Profile Picture" width={148} height={191}  />
        <Image className="gap-4"src="/LinkedIn.jpg" alt="Profile Picture" width={52} height={52}  />
      </div>

      <h4 className="bg-[#0E8388]">Description: I am a current High School senior at Technology High School in Newark, New Jersey. I plan on attending a 4-year College.</h4>
      <h4 className="bg-[#0E8388]">Internships: I was a intern for a VR game development course the summer before my freshman year. They even made a article!</h4>
      <h4 className="bg-[#0E8388]"> Skills: I am proficient in using Figma, HTML, CSS, Java, teamwork, communication, and using Lucid Charts. </h4>
    
    {/*  
      <Button text={"Nice"}/>
      <Button text={"good"}/>
      <Button text={"cool"}/>
      <Button text={"evil"}/>
      <Project_card title={"VR Game Development Internship"} date={"Summer 2020"} info={"I was a intern for a VR game development course the summer before my freshman year. They even made a article!"} src={"/VR.jpg"} alt={"VR Game Development Internship"}/>
     */}
     
    </div>
    
   
  );
}
