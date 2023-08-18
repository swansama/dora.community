import Box from "@mui/material/Box";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import { styled } from "@mui/material/styles";

export const Card = ({ title = "", imageLeft = "" }) => {
  return (
    <Box m="0.5rem">
      <Box
        style={{
          borderRadius: "14px 14px 0 0",
          border: "1px solid #f8f9fa",
        }}
      >
        <Box
          p="1rem"
          textAlign="center"
          style={{
            // backgroundColor: "#f8f9fa",
            backgroundColor: "#f00",
            borderRadius: "14px 14px 0 0",
          }}
        >
          {title}
        </Box>
        <Box display="flex">
          {imageLeft && (
            <Box p="1rem">
              <img src={imageLeft} width="150px" />
            </Box>
          )}
          <Box p="1rem">
            The DORA Community provides opportunities to learn, discuss, and
            collaborate on software delivery and operational performance.
            Enabling a culture of continuous improvement.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
