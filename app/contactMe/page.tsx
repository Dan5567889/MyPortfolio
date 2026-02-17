export default function ContactMe() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#2E4F4F] text-[#F3F4F4] p-8">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <form className="flex flex-col gap-4 w-full max-w-md bg-[#2C3333] p-6 rounded-lg shadow-lg">
                <label className="flex flex-col">
                    <span className="font-semibold mb-2">Name:</span>
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 rounded border border-gray-300"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="font-semibold mb-2">Email:</span>
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded border border-gray-300 "
                    />
                </label>
                <label className="flex flex-col">
                    <span className="font-semibold mb-2">Message:</span>
                    <textarea
                        placeholder="Enter your message"
                        className="p-2 rounded border border-gray-300 "
                        rows={5}
                    ></textarea>
                </label>
                <button
                    type="submit"
                    className="bg-cyan-600 text-white font-semibold py-2 px-4 rounded hover:bg-cyan-700 "
                >
                    Submit
                </button>
            </form>
        </div>
    );
}