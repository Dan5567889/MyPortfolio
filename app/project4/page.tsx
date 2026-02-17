import Button from "../components/Button";
import Image from "next/image";

export default function Project4() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#2E4F4F] text-[#F3F4F4]">
                   <div className="max-w-2xl w-full bg-secondary/10 p-10 rounded-3xl border border-white/10 shadow-xl">
                   <Image 
                    src="/dec.jpg"
                    alt="code" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mb-6" 
                />
                       <h1 className="text-4xl font-bold mb-4">Decimal to Binary Converter</h1>
                       
                       <div className="space-y-6">
                           <p className="text-lg leading-relaxed bg-[#0E8388] ">
                               <span className="font-semibold  bg-[#0E8388]">Description:</span> I created did this challenge to help get a better understanding for Binary code.  
                           </p>
       
                           <h4 className="text-md font-mono bg-[#0E8388]">
                               <span className="text-white font-sans font-semibold">Languages:</span> JavaScript
                           </h4>
       
                           <div className="flex gap-4 pt-4 justify-center">
                               <Button text="Website" href="https://codehs.com/sandbox/id/decimal-to-binary-challen-edS6KL" className="bg-[#0E8388]"/>
                           </div>
                       </div>
                   </div>
               </div>   
    );
}