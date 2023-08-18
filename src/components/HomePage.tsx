import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import doraDevCard from "../assets/doradevcard.png";
import sodr2022thumb from "../assets/sodr-2022-thumb.png";
import { Button } from "./Button";
import { Card } from "./Card";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const HomePage = () => {
  return (
    <>
      <Stack spacing={0}>
        <Box display="flex">
          <Box>
            <Box>
              <Box display="flex" style={{ backgroundColor: "#f8f9fa" }}>
                <Box width="600px" p="1rem">
                  <img src={doraCommunityOfPractice} height="200px" />
                </Box>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Box p="1rem" fontSize="1.5rem" textAlign="center">
                      The DORA Community provides opportunities to learn,
                      discuss, and collaborate on software delivery and
                      operational performance. Enabling a culture of continuous
                      improvement.
                    </Box>

                    <Button variant="contained" centered>
                      Join the DORA Community of Practice
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gap="1.5em"
          p="0.5rem"
        >
          <Card title="DORA.dev" imageLeft={doraDevCard}>
            DevOps Research and Assessment (DORA) is the largest and longest
            running research program of its kind, that seeks to understand the
            capabilities that drive software delivery and operations
            performance. DORA helps teams apply those capabilities, leading to
            better organizational performance.
            <Button variant="contained" centered>
              Explore DORA.dev
            </Button>
          </Card>
          <Card
            title="Accelerate State of DevOps Report"
            imageLeft={sodr2022thumb}
          >
            Over the past eight years, more than 33,000 professionals around the
            world have taken part in the Accelerate State of DevOps survey,
            making it the largest and longest-running research of its kind. Year
            aft
            <Button variant="contained" centered>
              Read the Report
            </Button>
          </Card>
          <Card
            title="YouTube Playlist"
            iconLeft={faYoutube}
            iconStyle={{ color: "#d01b1b" }}
          >
            Use our quick check tool to discover how you compare to industry
            peers, identify specific capabilities you can use to improve
            performance, and make progress on your software delivery goals.
            <Button variant="contained" centered>
              Watch Community Recordings
            </Button>
          </Card>
        </Box>
        <Box>
          <Card title="Calendar">
            <Box display="flex" justifyContent="center">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=America%2FNew_York&mode=AGENDA&src=ZTNmYmQ3NzY3ZDcxYWM2MDE3ZTJhYTZmOTBkYmRjZDNhYWNhZDg4MDkyNTllZGQ4NGEzNTgzZTVkZTMzYzViNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
                // style="border:solid 1px #777"
                width="800"
                height="600"

                // frameborder="0"
                // scrolling="no"
              ></iframe>

              {/* <iframe
                src="https://calendar.google.com/calendar/embed?src=e3fbd7767d71ac6017e2aa6f90dbdcd3aacad8809259edd84a3583e5de33c5b6%40group.calendar.google.com&ctz=America%2FNew_York"
                // style="border: 0"
                width="800"
                height="600"
                frameborder="0"
                // scrolling="no"
              ></iframe> */}
            </Box>
          </Card>
        </Box>
      </Stack>
    </>
  );
};
