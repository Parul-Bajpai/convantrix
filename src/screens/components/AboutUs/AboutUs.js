import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Footer from "../Footer/Footer";
import GetAQuote from "../../GetAQuote";
import Navigation from "../Navigation";
import NavBar from "../../NavBar"

const useStyles = makeStyles((theme) => ({
  justifyAlignment: {
    textAlign: "justify",
  },
}));

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const classes = useStyles();
  return (
    <>
      <div className="home-page-wrapper">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <NavBar />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Grid container spacing={4}>
                  <Grid item lg={8} md={8} sm={12} xs={12} data-aos="fade-up">
                    <Typography variant="h5" gutterBottom style={{color: "blue"}}>
                      About Convantrix
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                    We are one of the best email promoting administrations comprehensively. Enriched with astounding email promoting and information the executives arrangements we provide food the specific needs of our crowd. We outfit a total rundown of imminent clients what's more, customers having a place with different businesses. Our databases are refreshed quarterly to proffer you the best of information administrations and measurements in the market.
                    </Typography>
                    <Typography variant="h5" gutterBottom style={{color: "blue"}}>
                      Our Mission
                    </Typography>
                    <Typography
                      className={classes.justifyAlignment}
                      variant="subtitle1"
                      gutterBottom
                    >
                      At Convantrix we want to fulfill our clients with the most noteworthy pace of ROI conceivable. We center around introducing our clients with fitting mailing and email records with an expansion of business insight. We resolve to ensure you most extreme deals and lead age and transformation. At Convantrix we will help you in increasing more business associations every once in a while.
                    </Typography>
                    <Typography
                      className={classes.justifyAlignment}
                      variant="subtitle1"
                      gutterBottom
                    >
                      Our database contains with the most recent data with least excess. It helps give an away from of how to sum up your battles. We convey devoted outcomes what's more, have a rundown of fulfilled clients profited by our administrations.
                    </Typography>
                    <Typography
                      className={classes.justifyAlignment}
                      variant="subtitle1"
                      gutterBottom
                    >
                      Convantrix has empowered different associations to quicken what's more, expand their lead to cash process. Preparing a complete set-up of arrangements recognizing the correct leads, guarantee a legitimate area and share circulation. It has an whole group which assists with robotizing deals powers, arrange your value cites, and smoothes out your deals pay to drive greater arrangements quicker.
                    </Typography>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12} data-aos="fade-up">
                    <GetAQuote />
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
