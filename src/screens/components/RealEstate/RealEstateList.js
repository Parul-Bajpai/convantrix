import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginTop: 16,
  },
  list: {
    marginLeft: 16,
  },
  button: {
    display: "flex",
    flex: 1,
    padding: 16,
    flexDirection: "column",
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
});
const RealEstateList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container xl={10} lg={10} md={12} sm={12} xs={12} style={{}}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" style={{ color: "blue"}}>
            Reach your Targeted Prospects with Verified Realtor Email List!
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Consistently in any event 20% of American group will move from one spot to another, so monitoring it is a difficult task. Keeping this circumstance in our brain, we've made a Realtor Email List to help you to interface with the realtors who will assist you with focusing on this 20% gathering. Our Real Estate specialists email List is stuffed with custom fitted land information that incorporates the size of home, property holder's age and gaining, home rate, the participation of kids and evaluation lot information.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Convantrix is a pro in giving organizations a dream about their undertakings through our database. We target giving you data, which will assist you with making cognizant business decisions.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Our Realtor Email List comprises of refreshed and important information that will assist you with arriving at your intended interest group. Advertisers can use this database to take part in more significant undertakings and associations.
          </Typography>
          <Typography
            className={classes.content}
            variant="h5"
            style={{ color: "blue"}}
          >
            We Have the Most Effective Real Estate Mailing Lists for Your
            Business!
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Our Opt-in Real Estate Mailing List will unquestionably help you in executing a business battle that will concentrate on client maintenance just as for new client procurement. With Convantrix you get the opportunity to accomplish get to head assets of B2B leads, incorporated with cutting edge research strategy to assist you with drawing nearer to your future customers.
          </Typography>
          <ul className={classes.content}>
            <li className={classes.list}>
              Our Real Estate Email List is undoubtedly a profitable investment
              that will get you easily connected with the leading decision
              makers.
            </li>
            <li className={classes.list}>
              Our database is a trusted and credible one. We build up our data
              from credible sources that are endlessly upgraded to avoid
              duplicate and unwanted data.
            </li>
            <li className={classes.list}>
              Our data is molded as per the business demands of our clients and
              customers.
            </li>
            <li className={classes.list}>
              Our industry email list provides you admittance to superior sales
              opportunities and valuable B2B campaign.
            </li>
          </ul>
          <Typography
            className={classes.content}
            variant="h5"
            style={{ color: "blue"}}
          >
            Our Authentic Data Sources that Will Give you Ideal Prospects!
          </Typography>
          <ul className={classes.content}>
            <li className={classes.list}>Real Estate Industry Websites</li>
            <li className={classes.list}>Real Estate Industry Seminars</li>
            <li className={classes.list}>Real Estate Industry cards</li>
            <li className={classes.list}>Real Estate Industry Exhibitions</li>
            <li className={classes.list}>Real Estate Industry Publications</li>
          </ul>
          <Typography
            className={classes.content}
            variant="h5"
            style={{ color: "blue"}}
          >
            Our Realtor Email List consists of:
          </Typography>
          <ul className={classes.content}>
            <li className={classes.list}>First Name</li>
            <li className={classes.list}>Last Name</li>
            <li className={classes.list}>Contact Title</li>
            <li className={classes.list}>Address</li>
            <li className={classes.list}>Phone Number</li>
            <li className={classes.list}>SIC Code</li>
            <li className={classes.list}>NAICS Code</li>
            <li className={classes.list}>Web Address</li>
            <li className={classes.list}>Email</li>
            <li className={classes.list}>Zip code</li>
            <li className={classes.list}>Company Name</li>
          </ul>
          <Typography variant="body1" className={classes.content}>
          Our real information is your key to your blasting promoting effort. Our contact list is engaged at outperforming our clients' desire and to deliver them more benefits.
          </Typography>
          <Typography
            className={classes.content}
            variant="h5"
            style={{ color: "blue"}}
          >
           Why pause, when you can acquire more! Buy our Realtor Email List today and give your business the promoting fundamentals to flourish. Reach us now!
          </Typography>
          <Typography
            className={classes.content}
            variant="h5"
            style={{ color: "blue"}}
          >
            Boost your B2B Leads more than before. Get in touch with Convantrix
             Now!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default RealEstateList;
