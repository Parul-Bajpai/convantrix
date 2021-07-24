import React from "react";
import {
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
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
  table: {
    minWidth: 650,
  },
});
const GasAndOilList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function createData(
    jobTitle,
    northAmerica,
    Europe,
    Africa,
    southAmerica,
    middleEast
  ) {
    return { jobTitle, northAmerica, Europe, Africa, southAmerica, middleEast };
  }

  const rows = [
    createData("Owner/CEO", 5, 945, 2, 950, 1, 900, 560, 720, 460),
    createData("Manager", 4640, 2980, 3240, 1620, 1310, 690),
    createData("Executive Management", 8590, 5140, 3250, 1650, 1400, 950),
    createData("Wholesaler", 2850, 1620, 870, 760, 550, 130),
    createData("Process Engineer", 5000, 2140, 1720, 950, 1055, 760),
    createData("Production Technician", 3960, 1670, 1830, 780, 895, 655),
    createData("Oil & Gas Plant Engineers", 4760, 2620, 2300, 535, 780, 1080),
    createData("Others", 3290, 2340, 1290, 620, 1190, 680),
    createData("Total", 39035, 21460, 16400, 7475, 7900, 5405),
  ];
  return (
    <div className={classes.root}>
      <Grid container xl={10} lg={10} md={12} sm={12} xs={12} style={{}}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography
            variant="h5"
            style={{ color: "blue"}}
          >
            Get connected to the leading Oil & Gas Companies of the world with
            our Oil & Gas Mailing List!!
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Are you considering taking your items and administrations to the Oil and Gas industry? You can accomplish loads of business in this industry with our Oil and Gas Email List, which is a powerful, reasonable arrangement that will help you in managing the promoting challenges. The progression towards an effective promoting effort begins with acquiring the right arrangement of contact subtleties. With our Oil and Gas Mailing List, you can accomplish high elements with respect to client requests and fulfillment.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Email showcasing is crucial for any industry in the present computerized world. With our email list, presently you can create an industry-driving email advertising effort and get related with a portion of the main heads of the oil and gas segment.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Our Oil and Gas Industry Email List is an arranged and target crowd sectioned email list arrangement, which is an every now and again refreshed database. It is an all around investigated and adjusted email list.
          </Typography>
          <img
            alt="image1"
            className={classes.content}
            height="100px"
            width="100%"
            src="https://www.optincontacts.com/wp-content/uploads/2019/04/oil-and-gas-industry-Email-List.png"
          ></img>
          <Typography
            variant="h5"
            style={{ color: "blue" }}
            className={classes.content}
          >
            Why Our Oil & Gas Email List?
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Our Oil and Gas Email List is adept for executing a b2b battling to accomplish a practiced business objective. Our pre-bundled mailing list is adaptable enough to be altered according to the necessities of customers.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          Convantrix has made the Oil and gas industry database that will give you an edge to win new business joint efforts and arrangements. Our database will without a doubt help you in arriving at your expected future clients.
          </Typography>
          <Typography variant="body1" className={classes.content}>
          With Our Oil and Gas Mailing List, we point is to assist you with connecting with the business heads and chiefs to enable you with incredible deals bargains.
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "blue" }}
            className={classes.content}
          >
            How Our Oil & Gas Mailing List is the Right Email List for you?
          </Typography>
          <Typography variant="body1" className={classes.content}>
          We comprehend the weight you face in connecting with your objective crowd. With our Oil and Gas Industry Email List now advertisers can effectively accomplish quality information, divided and changed to meet their business destinations. Convantrix has the confidence in gathering the valuable business database, which will be a worthwhile one.
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
            Get Free Samples
          </Button>
          <TableContainer className={classes.content} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Job Title</TableCell>
                  <TableCell align="right">North America</TableCell>
                  <TableCell align="right">Europe</TableCell>
                  <TableCell align="right">Africa</TableCell>
                  <TableCell align="right">South America</TableCell>
                  <TableCell align="right">Middle East</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.jobTitle}
                    </TableCell>
                    <TableCell align="right">{row.northAmerica}</TableCell>
                    <TableCell align="right">{row.Europe}</TableCell>
                    <TableCell align="right">{row.Africa}</TableCell>
                    <TableCell align="right">{row.southAmerica}</TableCell>
                    <TableCell align="right">{row.middleEast}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            variant="h5"
            style={{ color: "blue"}}
            className={classes.content}
          >
            Convantrix TOP SELLING OIL AND GAS INDUSTRY EMAIL DATABASE
            INCLUDES:
          </Typography>
          <ul className={classes.content}>
            <li className={classes.list}>Oil And Gas Field</li>
            <li className={classes.list}>
              Natural Gas Transmission And Distribution
            </li>
            <li className={classes.list}>Natural Gas Distribution</li>
            <li className={classes.list}>
              Upstream, Midstream and Downstream sectors
            </li>
            <li className={classes.list}>Refined Petroleum Pipelines</li>
            <li className={classes.list}>Oil And Gas Field Exploration</li>
            <li className={classes.list}>Natural Gas Liquids</li>
            <li className={classes.list}>Natural Gas Transmission</li>
            <li className={classes.list}>Bituminous Coal Underground Mining</li>
            <li className={classes.list}>Oil And Gas Field Exploration</li>
            <li className={classes.list}>
              Oil And Gas Field Machinery And Equipment
            </li>
            <li className={classes.list}>Petroleum Refining</li>
            <li className={classes.list}>Crude Petroleum And Natural Gas</li>
            <li className={classes.list}>Irrigation Systems</li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "blue" }}
            className={classes.button}
            onClick={handleClickOpen}
          >
            Get Oil And Gas Email List
          </Button>
          <Typography
            variant="h5"
            style={{ color: "blue" }}
            className={classes.content}
          >
            We Have The Complete Data That Will Bring More Success!
          </Typography>
          <ul className={classes.content}>
            <li className={classes.list}>Websites</li>
            <li className={classes.list}>Exhibitions</li>
            <li className={classes.list}>Seminars</li>
            <li className={classes.list}>Business cards</li>
            <li className={classes.list}>Publications</li>
          </ul>
          <Typography variant="body1" className={classes.content}>
          Convantrix has a colossal collection of information sources, which are applied to shape a precise and refreshed oil and gas industry database. We accept that our Oil and Gas Mailing List is able enough to help our customers acquire a significant level of ROI.
          </Typography>
          <Typography
            style={{ color: "blue" }}
            variant="h5"
            className={classes.content}
          >
            We understand that to Achieve Brand Visibility in the Global Market;
            it is important to have a set of Complete Data Field.
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
          Our valid information is your key to your blasting advertising effort. Our contact list is engaged at outperforming our clients' desire also, to deliver them more benefits.
          </Typography>
          <Typography
            style={{ color: "blue" }}
            variant="h5"
            className={classes.content}
          >
            Why pause, when you can gain more! Buy our Oil and Gas Email List today and give your business the showcasing fundamentals to flourish. Get in touch with us now!
          </Typography>
          <Typography variant="h5" className={classes.content} style={{color : "blue"}}>
            Boost your B2B Leads more than before. Get in touch with Convantrix
             Now!
          </Typography>
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

export default GasAndOilList;
