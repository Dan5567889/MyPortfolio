import Link from "next/link";

export default function Button({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <button className="hover:text-cyan-400">
        {text}
      </button>
    </Link>
  );
}