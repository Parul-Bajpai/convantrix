import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import NavBar from "../../NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Footer from "../Footer/Footer";
import GetAQuote from "../../GetAQuote";
import NavBar from "../../NavBar";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerAlignment: {
    textAlign: "center",
  },
  justifyAlignment: {
    textAlign: "justify",
  },
  greyBackground: {
    backgroundColor: "#f4f4f4",
  },
  blueColoredText: {
    color: "#007BFF",
    textAlign: "center",
    cursor: "pointer",
  },
}));

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className="home-page-wrapper">
        <Grid container spacing={3}>
          {/* <Grid item lg={12} md={12} sm={12} xs={12}>
            <Navigation />
          </Grid> */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Grid container spacing={4}>
                  <Grid item lg={8} md={8} sm={12} xs={12} data-aos="fade-up">
                    <GetAQuote />
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-up">
                    <Typography
                      variant="h5"
                      className={classes.typographyHeader}
                      gutterBottom
                    >
                      CONTACT INFORMATION
                    </Typography>
                    <p style={{ fontSize: "15px" }} className="responsive-para">
                      <i class="fa fa-volume-control-phone"></i>+1 (201)
                      289-8197
                      <br />
                      16192 Coastal Highway , Lewes, DE 19958, USA.
                      <br />
                      <i class="fa fa-clock-o"></i> 9:00 – 18:00 (Mon – Fri)
                      <br />
                      info@convantrix.com
                    </p>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
