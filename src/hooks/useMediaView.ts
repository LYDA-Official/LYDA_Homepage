import { useMediaQuery } from "@chakra-ui/react";

const useMediaView = (viewPort?: number) => {
  const [pcView] = useMediaQuery("(min-width: 1025px)");
  const [tableView] = useMediaQuery("(min-width: 361px)");
  const [mobileView] = useMediaQuery("(max-width: 360px)");
  const [customMaxView] = useMediaQuery(`"(max-width: ${viewPort}px)"`);

  return { pcView, tableView, mobileView, customMaxView };
};

export default useMediaView;
