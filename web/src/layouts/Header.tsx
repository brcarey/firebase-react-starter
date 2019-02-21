import { Badge, Button, IconButton, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { ToolbarProps } from "@material-ui/core/Toolbar";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { Notifications } from "@material-ui/icons";
import * as React from "react";
import { Link } from "react-router-dom";
import LogoImage from "twemoji/2/svg/1f525.svg";
import { Routes } from "../routes";
import styled from "../styled-components";

const StyledToolbar = styled((props: ToolbarProps) => <Toolbar {...props} />)`
  ${props => props.theme.breakpoints.up(0)} and (orientation: landscape) {
    min-height: 48px;
  }

  ${props => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  min-height: 56px;
`;

const Logo = styled.img`
  fill: currentColor;
  width: 2em;
  height: 2em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
  margin-right: 16px;
`;

const PlainLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Title = styled((props: TypographyProps) => (
  <Typography component="h1" variant="h6" {...props} />
))`
  flex-grow: 1;
  white-space: nowrap;
  color: inherit;
`;

const Header = () => (
  <AppBar position="relative">
    <StyledToolbar>
      <Logo src={LogoImage} />
      <Title>Fire Starter</Title>
      <PlainLink to={Routes.dashboard.location}>
        <Button color="inherit">Dashboard</Button>
      </PlainLink>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <Notifications />
        </Badge>
      </IconButton>
    </StyledToolbar>
  </AppBar>
);

export default Header;
