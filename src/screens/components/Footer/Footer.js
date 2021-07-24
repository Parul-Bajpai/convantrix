import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   background: "#252525",
  // },
  typographyHeader: {
    color: "#fff",
  },
  typographyPara: {
    color: "#fff",
    textAlign: "start",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer-wrapper">
      <div className="container py-lg-5 py-sm-3">
        <Grid container spacing={7}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Typography
              variant="h5"
              className={classes.typographyHeader}
              gutterBottom
            >
              WHO WE ARE
            </Typography>
            <Typography
              className={classes.typographyPara}
              variant="subtitle1"
              gutterBottom
            >
              We are one of the best email advertising administrations all inclusive. Blessed with amazing email advertising and information the board arrangements we provide food the specific needs of our crowd. We outfit a complete rundown of imminent clients and customers having a place with different enterprises.
            </Typography>
            <Typography
              variant="h5"
              className={classes.typographyHeader}
              gutterBottom
            >
              FOLLOW US ON
            </Typography>
            <div className="footerSocial">
              <a
                href="https://www.facebook.com/Convantrix-640838046541783"
                title="Follow us on facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.optincontacts.com/wp-content/uploads/2019/04/facebook-e1554208101847.png"
                  title="Follow us on facebook"
                  alt="Follow us on facebook"
                  className="img-fluid"
                  rel="noopener noreferrer"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                title="Follow us on linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.optincontacts.com/wp-content/uploads/2019/04/linkedin-e1554208695700.png"
                  title="Follow us on linkedin"
                  alt="Follow us on linkedin"
                  className="img-fluid"
                />
              </a>
              <a
                href="https://twitter.com/PvtLlc"
                title="Follow us on twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.optincontacts.com/wp-content/uploads/2019/04/twitter-e1554208712502.png"
                  title="Follow us on twitter"
                  alt="Follow us on twitter"
                  className="img-fluid"
                />
              </a>
            </div>
          </Grid>
         
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Typography
              variant="h5"
              className={classes.typographyHeader}
              gutterBottom
            >
              CONTACT INFORMATION
            </Typography>
            <p style={{ color: "#fff", fontSize: "15px" }}>
              <i className="fa fa-volume-control-phone"></i>+1 (201) 289-8197
              <br />
              16192 Coastal Highway , Lewes, DE 19958, USA.
              <br />
              <i className="fa fa-clock-o"></i> 9:00 – 18:00 (Mon – Fri)
              <br />
              info@convantrix.com
            </p>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Typography
              variant="h5"
              className={classes.typographyHeader}
              gutterBottom
            >
              QUICK LINKS
            </Typography>
            <h6 className="mb-3">
              <a href="/">Home</a>
            </h6>
            <h6 className="mb-3">
              <a href="/about">About Us</a>
            </h6>
            <h6 className="mb-3">
              <a href="/contact-us">Contact Us</a>
            </h6>
            <h6 className="mb-3">
              <a href="/privacy-policy">Privacy Policy</a>
            </h6>
          </Grid>
        </Grid>
      </div>
      <div className="copyrights">
        <p style={{ color: "#999", fontSize: "15px" }}>
          © 2020 Convantrix. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
