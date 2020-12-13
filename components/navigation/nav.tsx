import * as React from "react";
import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <ul>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
