import Link from "next/link";
import Button from "./Button";

export default function Footer() {
    return (
      <div>
        <footer className="bg-[#2C3333] text-[#F3F4F4] p-5 text-center">
        <p className="text-lg mt-2 text-stone-400">If you have any questions feel free to contact me!</p>
        <p className="text-lg mt-2 text-stone-400">Created using next.js and figma</p>
        </footer>
        

      </div>
    );
  }