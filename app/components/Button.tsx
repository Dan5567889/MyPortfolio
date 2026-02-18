import Link from "next/link";

export default function Button({ text, href, className = "" }: { text: string; href: string; className?: string }) {
  return (
    <Link href={href}>
      <button className={`hover:text-stone-400 ${className}`}>
        {text}
      </button>
    </Link>
  );
}