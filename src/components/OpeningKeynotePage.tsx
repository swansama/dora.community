import { Card } from "./Card";
import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import nicoleForsgren from "../assets/nicoleforsgrenheadshot.jpeg";
import { DoraGuideHighlight } from "./DoraGuideHighlight";

export const OpeningKeynotePage = () => {
  return (
    <>
      <Hero />

      <Box>
        <DoraGuideHighlight
          title="Nicole Forsgren, PhD"
          altText="Nicole Forsgren"
          image={nicoleForsgren}
          body="Dr. Nicole Forsgren is a Partner at Microsoft Research, where she leads Developer Velocity Lab</a>. She is author of the Shingo Publication Award-winning book Accelerate: The Science of Lean Software and DevOps and is best known as lead investigator on the largest DevOps studies to date. She has been a successful entrepreneur (with an exit to Google), professor, performance engineer, and sysadmin. Her work has been published in several peer-reviewed journals."
        ></DoraGuideHighlight>
      </Box>
    </>
  );
};
