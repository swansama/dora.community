import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import doraLogo from "../assets/dora-logo.jpg";
import doraLogoNoWords from "../assets/dora-logo-no-words.svg";
import { Nav } from "./Nav";

const HeaderStyled = styled(Box)({
  padding: "0.5rem",
  display: "flex",
  borderBottom: "1px solid black",
});

const LogoStyled = styled(Box)({
  flexGrow: 1,
});

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <img src={doraLogoNoWords} height="50px" />
      </LogoStyled>
      <Nav />
    </HeaderStyled>
  );
};
