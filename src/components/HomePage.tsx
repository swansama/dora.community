import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


const HomeStyled = styled(Box)({
  padding: "0.5rem",
  display: "flex",
  borderBottom: "1px solid black"
});



export const HomePage = () => {
  return (
    <HomeStyled>
     
      This is the home page
    </HomeStyled>
  );
};
