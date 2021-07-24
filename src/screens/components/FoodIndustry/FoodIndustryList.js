import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import GetAQuote from '../../GetAQuote';

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
});
const FoodIndustryList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container xl={10} lg={10} md={12} sm={12} xs={12} style={{}}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h5" style={{ color : "blue"}}>
            Let the Food industry know your Presence with our Food Industry
            Mailing List!!
          </Typography>
          <Typography variant="body1" className={classes.content}>
          With Convantrix Food Industry Email List target experts furthermore, organizations that gracefully most of the food administrations and items devoured by the worldwide populace. Our advertising experts can form a Food Industry Mailing List particularly for you according to your requirements, which would positively help your advertising crusade with the transcending transformation rate.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          With Convantrix, Food Industry Email List connect with the much of the time pointed contacts from the Food Industry. Our email list is here to assist you with executing your advertising effort towards the directed market sections, and will assist you with investigating new business adventures. So influence multi-channel crusades just by putting resources into our email database and let your deals flourish.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Convantrix is a pro in furnishing organizations with a dream about their undertakings by means of our database. We target giving you data, which will assist you with forging cognizant business decisions.
          </Typography>
          <Typography variant="h5" className={classes.content} style={{ color : "blue"}}>
            Pick the right information!
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Our Food industry Email List is well-suited for executing a b2b battling to accomplish a cultivated business objective. Our pre-bundled mailing list is sufficient adaptable to be tweaked according to the necessities of customers.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Convantrix has made food industry database that will give you an edge to win new business coordinated efforts and arrangements. Our database will without a doubt help you in arriving at your possible future clients.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          With our Food and Beverage Industry Email List, we point is to help you connect with the business heads and chiefs to enable you with incredible deals bargains.
          </Typography>
          <Typography variant="h5" className={classes.content} style={{ color : "blue"}}>
            100% Verified Data That Your Business Requires, We Give It To You!
          </Typography>
          <Typography variant="body1" className={classes.content}>
          We comprehend the weight you face in contacting your objective crowd. With our Food Industry Mailing List now advertisers can effectively accomplish quality information, divided and altered to meet their business goals. Convantrix has the assurance in ordering a advantageous business database, which will be a rewarding one.
          </Typography>
          <ul className={classes.content}>
            <li className={classes.list}>Superior sales leads</li>
            <li className={classes.list}>Definite lead conversions</li>
            <li className={classes.list}>
              We provide you with current, validated, and accurate contact data
              of business professionals, users, and organizations
            </li>
            <li className={classes.list}>
              Amplified b2b marketing by the dint of direct marketing, online
              marketing campaigns, telemarketing, and event marketing
            </li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickOpen}
          >
            Get Food Industry Mailing List
          </Button>
          <Typography variant="h5" className={classes.content} style={{ color : "blue"}}>
            We Have The Complete Data That Will Bring More Success!{" "}
          </Typography>
          <ul className={classes.content}>
            <li className={classes.list}>Food Industry Websites</li>
            <li className={classes.list}>Food Industry Exhibitions</li>
            <li className={classes.list}>Food Industry Seminars</li>
            <li className={classes.list}>Food Industry Business cards</li>
            <li className={classes.list}>Food Industry Publications</li>
          </ul>
          <Typography variant="body1" className={classes.content}>
          Convantrix has an immense information sources collection, which is useful to build up a precise and refreshed food industry database. We accept that our Food Industry Email List is equipped enough to help our customers acquire a significant level of ROI.
          </Typography>
          <Typography variant="h5" className={classes.content} style={{ color : "blue"}}>
          We comprehend that to Achieve Brand Visibility in the Global Market, it is essential to have a lot of Complete Data Field.
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
          Our true information is your key to your blasting promoting effort. Our contact list is engaged at outperforming our clients' desire what's more, to deliver them more benefits.
          </Typography>
          <Typography variant="h5" className={classes.content} style={{ color : "blue"}}>
          Why pause, when you can win more! Buy our Food Email List today what's more, give your business the showcasing fundamentals to flourish. Contact us now!
          </Typography>
          <Typography variant="h5" className={classes.content} style={{ color : "blue"}}>
            Boost your B2B Leads more than before. Get in touch with Convantrix
            Now!
          </Typography>
          <div
            className={classes.content}
            style={{
              backgroundColor: "#66CCCC",
              padding: 32,
              borderRadius: 15,
            }}
          >
            <Typography variant="h5">
            Rundown Management – The Key to Effective Targeting and Enhanced Deliverability. Converse with our Database Specialists to portion your information with the correct crowd. Call US +1 (201) 289-8197 or Email us at info@Convantrix.com
            </Typography>
          </div>
        </Grid>
      </Grid>
       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogContent>
            <Button onClick={handleClose} color="primary" style={{float: "right" , backgroundColor: "whitesmoke", color: "black"}}>
            Cancel
          </Button>
            <GetAQuote />
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default FoodIndustryList;
