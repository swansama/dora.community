import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";

const HeaderStyled = styled(Box)({
  padding: "0.5rem",
  display: "flex",
  borderBottom: "1px solid black"
});

const LogoStyled = styled(Box)({
  flexGrow: 1,
});

const NavStyled = styled(Box)({});

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <img src={doraCommunityOfPractice} height="100px" />
      </LogoStyled>
      <NavStyled>Home</NavStyled>
    </HeaderStyled>
  );
};
