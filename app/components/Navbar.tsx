import Button from "./Button";
import Image from "next/image";
export default function Navbar() {
return(
    <div className="bg-[#2C3333] grid grid-rows-1 grid-cols-4  ">
        <div className="flex flex-row  gap-5 "> 
        <Image 
        src="/robot.jpg" 
        alt="Profile Picture" 
        width={65} 
        height={71}  
        />
        <h4 className="p-5"> Dante Hernandez</h4>
        </div>
        <div className="gap-"> 
        <Button text={"About"}/>
        
        <Button text={"Projects"}/>
        </div>
    </div>
)
}