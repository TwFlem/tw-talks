import * as React from "react";
import Link from "next/link";
import styled from "styled-components";

const Bar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8rem;
`;

const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > li {
    margin-left: 4rem;
  }
`;

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav>
      <Bar>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <LinkContainer>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </LinkContainer>
      </Bar>
    </nav>
  );
}
