export default function Projects() {
    return (
    <div>
        <h1 className="text-4xl font-bold text-center mt-10">Projects</h1>
        <div className="flex flex-col items-center gap-6 mt-10">
            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Project 1: Personal Portfolio Website</h2>
            <p className="text-gray-300">
                Developed a personal portfolio website using Next.js and Tailwind CSS to showcase my projects and skills. The website features a responsive design, smooth animations, and a clean user interface.
            </p>
            </div>
            <div className="bg-[#2C3333] text-[#F3F4F4] p-5 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Project 2: E-commerce Platform</h2>
            <p className="text-gray-300">
                Built an e-commerce platform using React and Node.js, allowing users to browse products, add items to their cart, and complete purchases securely. Implemented features such as user authentication, product search, and order management.
            </p>
            </div>
        </div>
    </div>
    );
  }