import { Card } from "./Card";
import Box from "@mui/material/Box";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import { Button } from "./Button";
// import { DoraGuideHighlight} from "./DoraGuideHighlight";
import steve from "../assets/steve.jpg"
import { DoraGuideHighlight } from "./DoraGuideHighlight";
// import { styled } from "@mui/material/styles";

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
        <Card title="Lean Coffee Discussions">
          <p>
            Community discussions use the{" "}
            <a href="https://leancoffee.org/">Lean Coffee Format</a>. The goal
            of these discussions is to provide opportunities for the community
            to learn, listen, and collaborate. All types of participation is
            welcome, including active listening.
          </p>
          <p>
            Most sessions start with a guest speaker,{" "}
            <a href="https://www.youtube.com/playlist?list=PLKK5zTDXqzFNt1OTjhlrCnhVl1UO2QMbk">
              check out previous sessions.
            </a>{" "}
            Only the presentation portion is recorded.
          </p>
          <p>
            Would you like to present at a community discussion? Please email{" "}
            <a href="emailto:dora-community-events@googlegroups.com">
              dora-community-events@googlegroups.com
            </a>
          </p>
        </Card>
        <Card title="Community Connections">
          <p>
            Opportunity to meet other members of the community. Attendees are
            put into small groups, with the goal of making new connections, and
            learning from each other.
          </p>
        </Card>
        <Card title="Community Summit">
          <h4>Accelerate your journey with lessons from fellow travelers</h4>
          <p>
            DORA studies the culture and capabilities that enable
            high-performing technology-driven organizations like yours.
          </p>{" "}
          <p>
            Join the inaugural DORA Community Summit to learn, discuss, and
            collaborate on putting the research findings into practice. Register
            now by adding the DORA Community Summit ($75) to your DevOps
            Enterprise Summit registration.
          </p>
          <p>
            <a href="https://www.dora.community/summit">
              Learn more about the DORA Community Summit
            </a>
          </p>
        </Card>
      </Box>
      <Box>
      <Card title="DORA Community Guides">
          <DoraGuideHighlight title="Amanda Lewis" altText="Amanda Lewis" image={steve} body="I am awesome!" />
      </Card>
      </Box>
    </>
  );
};
