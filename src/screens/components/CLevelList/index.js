import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CLevelList from "./CLevelList";
import GetAQuote from "../../GetAQuote";
import NavBar from "../../NavBar";
import Footer from "../Footer/Footer";

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
const CLevelListContainer = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <Grid className={classes.gridAlign} container spacing={3}>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <CLevelList />
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

export default CLevelListContainer;
