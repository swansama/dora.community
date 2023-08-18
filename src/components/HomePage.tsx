import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import doraDevCard from "../assets/doradevcard.png";
import sodr2022thumb from "../assets/sodr-2022-thumb.png"
import { Button } from "./Button";
import { Card } from "./Card";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const HomePageStyled = styled(Box)({
  // padding: "0.5rem",
});

export const HomePage = () => {
  return (
    <HomePageStyled>
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

        <Box display="flex" p="0.5rem">
          <Card title="DORA.dev" imageLeft={doraDevCard} >
            DevOps Research and Assessment (DORA) is the largest and longest
            running research program of its kind, that seeks to understand the
            capabilities that drive software delivery and operations
            performance. DORA helps teams apply those capabilities, leading to
            better organizational performance.
          </Card>
          <Card title="2022 Accelerate State of DevOps Report" imageLeft={sodr2022thumb}>
            Over the past eight years, more than 33,000 professionals around the
            world have taken part in the Accelerate State of DevOps survey,
            making it the largest and longest-running research of its kind. Year
            after year, Accelerate State of DevOps Reports provide data-driven
            industry insights that examine the capabilities and practices that
            drive software delivery, as well as operational and organizational
            performance. In 2021, more than 22 billion records were exposed
            because of data breaches, with several huge companies falling
            victim. Between that and other malicious attacks, security continues
            to be top of mind for organizations as they work to keep customer
            data safe and their businesses up and running. With this in mind, we
            decided to focus on security for the 2022 Accelerate State of DevOps
            Report.
          </Card>
          <Card
            title="YouTube Playlist"
            iconLeft={faYoutube}
            iconStyle={{ color: "#d01b1b" }}
          >
            Use our quick check tool to discover how you compare to industry
            peers, identify specific capabilities you can use to improve
            performance, and make progress on your software delivery goals.
          </Card>
        </Box>
        <Box>
          <Card title="Calendar">
            <Box textAlign="center">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=e3fbd7767d71ac6017e2aa6f90dbdcd3aacad8809259edd84a3583e5de33c5b6%40group.calendar.google.com&ctz=America%2FNew_York"
                // style="border: 0"
                width="800"
                height="600"
                frameborder="0"
                // scrolling="no"
              ></iframe>
            </Box>
          </Card>
        </Box>
        
      </Stack>
    </HomePageStyled>
  );
};
