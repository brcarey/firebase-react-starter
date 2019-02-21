import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid
} from "@material-ui/core";
import { CardProps } from "@material-ui/core/Card";
import { CardContentProps } from "@material-ui/core/CardContent";
import { CardMediaProps } from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { GetDashboardGallery } from "../../graphql";
import Container from "../../layouts/Container";
import styled from "../../styled-components";

const GalleryCard = styled((props: CardProps) => <Card {...props} />)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GalleryCardMedia = styled((props: CardMediaProps) => (
  <CardMedia {...props} />
))`
  padding-top: 56.25%;
`;

const GalleryCardContent = styled((props: CardContentProps) => (
  <CardContent {...props} />
))`
  flex-grow: 1;
`;

const GalleryContainer = styled(Container)`
  padding: ${props => props.theme.spacing.unit * 8}px 0;
`;

type Props = {
  items: GetDashboardGallery[];
};

const Gallery = ({ items }: Props) => (
  <GalleryContainer>
    <Grid container spacing={40}>
      {items.map(card => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
          <GalleryCard>
            <GalleryCardMedia
              // tslint:disable-next-line:max-line-length
              image={card.imageUrl}
              title={card.heading}
            />
            <GalleryCardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.heading}
              </Typography>
              <Typography>{card.description}</Typography>
            </GalleryCardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </GalleryCard>
        </Grid>
      ))}
    </Grid>
  </GalleryContainer>
);

export default Gallery;
