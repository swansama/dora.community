import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import { Button } from "./Button";

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
                  <img src={doraCommunityOfPractice} width="100%" />
                </Box>
                <Box p="1rem">
                  The DORA Community provides opportunities to learn, discuss,
                  and collaborate on software delivery and operational
                  performance. Enabling a culture of continuous improvement.
                  <Button variant="contained" centered>
                    Yo sign Up
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex">
          <Box>
            <Box
              style={{
                borderRadius: "14px 14px 0 0",
                border: "1px solid #CCC",
              }}
            >
              <Box
                p="1rem"
                textAlign="center"
                style={{
                  backgroundColor: "#CCC",
                  borderRadius: "14px 14px 0 0",
                }}
              >
                Title
              </Box>
              <Box display="flex">
                <Box width="600px" p="1rem">
                  <img src={doraCommunityOfPractice} width="100%" />
                </Box>
                <Box p="1rem">
                  The DORA Community provides opportunities to learn, discuss,
                  and collaborate on software delivery and operational
                  performance. Enabling a culture of continuous improvement.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <div>Calendar</div>
        <div>div 3</div>
      </Stack>
    </HomePageStyled>
  );
};
