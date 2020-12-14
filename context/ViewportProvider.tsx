import React, { ReactChild, createContext, useEffect, useState } from "react";
import { whenWindowExists } from "../utils/window";

const initState = {
  width: 0,
  height: 0,
};
export type ViewportState = typeof initState;
export const viewportContext = createContext(initState);

type ViewportProviderProps = {
  children: ReactChild;
};
export function ViewportProvider(props: ViewportProviderProps): JSX.Element {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(
    whenWindowExists(() => {
      addEventListener("resize", handleWindowResize);
      return () => removeEventListener("resize", handleWindowResize);
    }),
    []
  );

  return (
    <viewportContext.Provider value={{ width, height }}>
      {props.children}
    </viewportContext.Provider>
  );
}
