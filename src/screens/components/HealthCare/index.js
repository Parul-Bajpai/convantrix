import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GetAQuote from "../../GetAQuote";
import RenderEmailList from "./RenderEmailList";
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
});
const IndustryContainer = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid
          className={classes.gridAlign}
          xl={10}
          lg={10}
          md={12}
          sm={12}
          xs={12}
          container
          spacing={3}
        >
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <RenderEmailList />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <GetAQuote />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};
export default IndustryContainer;
