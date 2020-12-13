import React from "react";
import Image from "next/image";

export function HeadShotCard() {
  return (
    <div>
      <Image
        src="/headshot.jpg"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <p>Trenton Fleming</p>
      <div />
      <p>Software Engineer</p>
    </div>
  );
}
