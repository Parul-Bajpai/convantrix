import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FoodIndustryList from "./FoodIndustryList";
import GetAQuote from "../../GetAQuote";
import NavBar from "../../NavBar";
import { Footer } from "../Footer";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridAlign: {
    padding: 32,
  },
  quote: {
    // display: "flex",
    // flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 32,
  },
});
const FoodIndustry = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <Grid
          xl={10}
          lg={10}
          md={12}
          sm={12}
          xs={12}
          className={classes.gridAlign}
          container
          spacing={3}
        >
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <FoodIndustryList />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            style={{}}
            className={classes.quote}
          >
            <GetAQuote />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default FoodIndustry;
