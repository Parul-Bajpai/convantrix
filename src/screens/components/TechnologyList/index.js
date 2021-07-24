import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Details from "./Details";
import GetAQuote from "../../GetAQuote";
import { Footer } from "../Footer";
import NavBar from "../../NavBar";

const useStyles = makeStyles({
  root: {
    // marginTop: "1rem"
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 32,
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
const TechnologyListContainer = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid className={classes.gridAlign} container spacing={3}>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <Details />
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
    </>
  );
};
export default TechnologyListContainer;
