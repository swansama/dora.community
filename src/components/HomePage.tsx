import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import { Button } from "./Button";
import { Card } from "./Card";

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
                  <img src={doraCommunityOfPractice} height="300px" />
                </Box>

                <Box
                  p="1rem"
                  fontSize="2rem"
                  textAlign="center"
                  alignItems="center"
                >
                  The DORA Community provides opportunities to learn, discuss,
                  and collaborate on software delivery and operational
                  performance. Enabling a culture of continuous improvement.
                </Box>

                <Button variant="contained" centered>
                  Join the DORA Community of Practice
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex" p="0.5rem">
          <Card title="DORA.dev" imageLeft={doraCommunityOfPractice} />
          <Card title="2022 State of DevOps Report" />
          <Card title="Benchmark" />
        </Box>
        <Box>
          <Card title="Calendar" />
        </Box>
        <div>div 3</div>
      </Stack>
    </HomePageStyled>
  );
};
