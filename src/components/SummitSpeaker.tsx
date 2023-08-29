import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import {nicoleForsgren} from "../assets/nicoleforsgrenheadshot.jpeg";






export const SummitSpeaker = ()  => {
  return (
   <Box>
   <Card>
   <img src={nicoleForsgren} width="150px" />
    </Card>
    </Box>
  );
};
