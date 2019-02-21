import { Typography } from "@material-ui/core";
import * as React from "react";
import styled from "../styled-components";

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing.unit * 6}px;
`;

const Footer = () => (
  <StyledFooter>
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      Something here to give the footer a purpose!
    </Typography>
  </StyledFooter>
);

export default Footer;
