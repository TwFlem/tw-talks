import React from "react";
import { Page } from "../components/common/Page";
import { HeadShotCard } from "../components/home/HeadShotCard";

export function Home(): JSX.Element {
  return (
    <Page>
      <HeadShotCard />
    </Page>
  );
}
