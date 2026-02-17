import Link from "next/link";
import Button from "./Button";

export default function Footer() {
    return (
      <div>
        <footer className="bg-[#2C3333] text-[#F3F4F4] p-5 text-center">
          <Button text="CONTACT ME" href="/contactMe"/>
        </footer>
      </div>
    );
  }