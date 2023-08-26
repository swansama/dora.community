import { Card } from "./Card";
import Box from "@mui/material/Box";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import { Button } from "./Button";
import { styled } from "@mui/material/styles";

export const JoinPage = () => {
  return (
    <>
      <Box display="flex" style={{ backgroundColor: "#f8f9fa" }}>
        <Box width="600px" p="1rem">
          <img src={doraCommunityOfPractice} height="200px" />
        </Box>
        <Box display="flex" alignItems="center">
          <Box>
            <Box p="1rem" fontSize="1.5rem" textAlign="center">
              The DORA Community provides opportunities to learn, discuss, and
              collaborate on software delivery and operational performance.
              Enabling a culture of continuous improvement.
            </Box>

            <Button variant="contained" centered>
              Join the DORA Community of Practice
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Card title="Google Group Mailing List">
          <p>
            Join the DORA Community of Practice Google Group Mailing list to:
          </p>
          <li>Asyncronously connect with members</li>
          <li>Calendar invitations for community events</li>
          <li>Community News </li>
        </Card>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        gap="1.5em"
        p="0.5rem"
      >
        <Card title="Lean Coffee Discussions"></Card>
        <Card title="Community Connections"></Card>
        <Card title="Community Summit"></Card>
      </Box>
      <Box>
        <Card title="DORA Guides"></Card>
      </Box>
    </>
  );
};
