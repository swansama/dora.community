import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const FooterStyled = styled(Box)({
  padding: "0.5rem",
  display: "flex",
  borderTop: "1px solid black",
});

const NavStyled = styled(Box)({});

export const Footer = () => {
  return (
    <FooterStyled>
      <NavStyled>Home</NavStyled>
    </FooterStyled>
  );
};
