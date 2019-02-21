import * as React from "react";

import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "../../styled-components";

const HeroUnit = styled.div`
  background-color: ${props => props.theme.palette.background.paper};
`;

const HeroContent = styled.div`
  max-width: ${props => props.theme.breakpoints.values.sm}px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.unit * 8}px
    ${props => props.theme.spacing.unit * 4}px
    ${props => props.theme.spacing.unit * 6}px;
`;

const HeroButtons = styled.div`
  margin-top: ${props => props.theme.spacing.unit * 4}px;
`;

type Props = {
  firstName: string;
  lastName: string;
};

const Hero = ({ firstName, lastName }: Props) => (
  <HeroUnit>
    <HeroContent>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Hi {firstName} {lastName}!
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
      <HeroButtons>
        <Grid container spacing={16} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Main call to action
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Secondary action
            </Button>
          </Grid>
        </Grid>
      </HeroButtons>
    </HeroContent>
  </HeroUnit>
);

export default Hero;
