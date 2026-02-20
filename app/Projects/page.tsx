import Button from "../components/Button";
import Image from "next/image";

export default function Projects() {
    return (
    <div className="min-h-screen bg-[#2E4F4F] text-[#F3F4F4]">
        <h1 className="text-4xl font-bold text-center p-5">Projects</h1>

        <div className="flex flex-col text-center items-center gap-6 mt-10">
            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <Image 
                    src="/ourbloom.jpg"
                    alt="Our Blooms" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mb-6" 
                />
            <h2 className="text-2xl font-semibold mb-2">Project 1: Our Blooms</h2>
            <Button text="Learn More!" href="/project1" className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-md hover:from-red-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-400"/>
            </div>

            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <Image 
                    src="/Midterm.jpg"
                    alt="Midterm" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mb-6" 
                />
            <h2 className="text-2xl font-semibold mb-2">Project 2: Midterm</h2>
            <Button text="Learn More!" href="/project2" className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-md hover:from-red-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-400"/>
            </div>

            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <Image 
                    src="/DM.jpg"
                    alt="DM construction" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mb-6" 
                />
            <h2 className="text-2xl font-semibold mb-2">Project 3: DM Construction </h2>
            <Button text="Learn More!" href="/project3" className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-md hover:from-red-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-400"/>
            </div>

            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <Image 
                    src="/dec.jpg"
                    alt="Decimal" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mb-6" 
                />
            <h2 className="text-2xl font-semibold mb-2">Project 4: Decimal to Binary challenge</h2>
            <Button text="Learn More!" href="/project4" className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-md hover:from-red-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-400"/>
            </div>
            <br/>
        </div>
    </div>
    );
  }