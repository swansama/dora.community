import { Card } from "./Card";
import Box from "@mui/material/Box";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
import { Button } from "./Button";
// import { styled } from "@mui/material/styles";

export const CommunityGuidelinesPage = () => {
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
        <Card title="Community Guidelines">
          
            
            <h3>Overview:</h3>
            <p>
            This DORA Community creates opportunities for members to
            connect, listen, share, learn, and support each other on the journey
            of improving our software delivery and operations. Fostering
            psychological safety is important for members to feel they are in a
            safe space where they can participate with people who share similar
            interests. We as a community, pledge to make participation in our
            community, harassment free experience for everyone, regardless of
            age, body, size, disability, ethnicity, gender identity and
            expression, level of experience, education, socio-economic status,
            nationality, personal appearance, race, religion, or sexual identity
            and orientation. Please read and adhere to the following guidelines:
            </p>

            <h3>Guidelines:</h3> 
            
            <p> 
            <li>Using welcoming and inclusive language Being respectful
            of differing viewpoints and experiences</li>
            <li> Gracefully accepting
            constructive criticism</li> 
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members.</li> </p> 
            
            
            <h3> Examples of
            unacceptable behavior by participants include: </h3> 
            
            <p>
              <li>The use of sexualized
            language or imagery and unwelcome sexual attention or advances </li>

            <li>Trolling, insulting/derogatory comments, and personal or political
            attacks</li>
            
            <li> Public or private harassment Publishing others’ private
            information, such as a physical or electronic address, without
            explicit permission</li>
            
            <li> Other conduct which could reasonably be
            considered inappropriate in a professional setting</li>
          </p>
        </Card>
      </Box>
    </>
  );
};
