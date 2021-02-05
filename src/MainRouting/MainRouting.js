import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import { SupervisedUserCircle } from "@material-ui/icons";
import React from "react";
import RecipeReviewCard from "../productCard/productCard";

const useStyle = makeStyles((theme) => ({
  appbarTypography: {
    flexGrow: 1
  },
  cardPadding: {
    [theme.breakpoints.down("xs")]: {
      margin: "0px 15px"
    }
  }
}));

const MainRouting = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={3}>
      {/* Appbar */}
      <Grid item xs={12}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography
              className={classes.appbarTypography}
              variant="subtitle1"
            >
              ECommerce
            </Typography>
            <IconButton color="inherit">
              <SupervisedUserCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>

      {/* Content Section */}
      <Grid item container xs={12}>
        <Grid item xs={false} sm={2}></Grid>

        <Grid container xs={12} sm={8} spacing={1}>
          <Grid className={classes.cardPadding} item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RecipeReviewCard />
          </Grid>
        </Grid>

        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default MainRouting;
