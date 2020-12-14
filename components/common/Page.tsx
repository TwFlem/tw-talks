import React from "react";
import { Nav } from "../navigation/nav";

type PageProps = { children: React.ReactNode };
export function Page(props: PageProps): JSX.Element {
  return (
    <div>
      <Nav />
      <div>{props.children}</div>
    </div>
  );
}
