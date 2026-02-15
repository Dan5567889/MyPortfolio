import Button from "../components/Button";

export default function Projects() {
    return (
    <div className="bg-[#2E4F4F] text-[#F3F4F4]">
        <h1 className="text-4xl font-bold text-center p-5">Projects</h1>

        <div className="flex flex-col text-center items-center gap-6 mt-10">
            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Project 1: Our Blooms</h2>
            <Button text="Learn More!" href="#" className="bg-yellow-400 text-black px-4 py-2 rounded inline-block"/>
            </div>

            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Project 2: Midterm</h2>
            <Button text="Learn More!" href="#" className="bg-yellow-400 text-black px-4 py-2 rounded inline-block"/>
            </div>

            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Project 3: DM Construction </h2>
            <Button text="Learn More!" href="#" className="bg-yellow-400 text-black px-4 py-2 rounded inline-block"/>
            </div>

            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Project 4: Deciaml to Binary challenge</h2>
            <Button text="Learn More!" href="#" className="bg-yellow-400 text-black px-4 py-2 rounded inline-block"/>
            </div>
            <br/>
        </div>
    </div>
    );
  }