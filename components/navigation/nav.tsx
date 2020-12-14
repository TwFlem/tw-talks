import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useViewport } from "../../hooks/useViewport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { theme } from "../../styles/theme";

// TODO: config urls
const links = [
  {
    label: "Resume",
    href: "https://storage.googleapis.com/tw-talks-public-content/Resume.pdf",
  },
  { href: "https://github.com/TwFlem", icon: faGithub },
  {
    href: "https://www.linkedin.com/in/trenton-fleming-81822b138/",
    icon: faLinkedin,
  },
  {
    href: "https://twitter.com/trenflem",
    icon: faTwitterSquare,
  },
];

const mediumBreakpoint = 700;
export function Nav(): JSX.Element {
  const viewPortState = useViewport();
  if (viewPortState.width >= mediumBreakpoint) {
    return <DesktopNav />;
  }
  return <MobileNav />;
}

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.colors.backgroundLight};
`;

function MobileNav(): JSX.Element {
  return (
    <nav>
      <NavContainer>
        <HomeButton />
        <div>hamburger</div>
      </NavContainer>
    </nav>
  );
}

const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > li {
    margin-left: 1rem;
  }
`;

function DesktopNav(): JSX.Element {
  return (
    <nav>
      <NavContainer>
        <HomeButton />
        <LinkContainer>
          {links.map((link) => (
            <li key={`${link.href}${link.label}`}>
              <a href={link.href}>
                {!!link.icon && (
                  <FontAwesomeIcon icon={link.icon} color={theme.colors.link} />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </LinkContainer>
      </NavContainer>
    </nav>
  );
}

function HomeButton(): JSX.Element {
  return (
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
  );
}
