import { useContext } from "react";
import { viewportContext, ViewportState } from "../context/ViewportProvider";

export function useViewport(): ViewportState {
  const { width, height } = useContext(viewportContext);
  return { width, height };
}
