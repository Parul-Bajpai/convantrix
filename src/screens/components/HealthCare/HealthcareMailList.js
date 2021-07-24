import React, { useEffect, Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GetAQuote from "../../GetAQuote";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const HealthcareMailList = () => {
   useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("col-active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
   }, []);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  // const handle = () => {
	// 	Component(<GetAQuote />);
  // };
  
  return (
    <div>
      <div className="healthcare-mail-wrapper">
        <Grid item container xl={10} lg={10} md={12} sm={12} xs={12} style={{}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h5" gutterBottom style={{color: "blue"}}>
              Reach Targeted Audience Base with Responsive & Accurate Healthcare Email List!
            </Typography>
            <Typography variant="body1" gutterBottom>
            On the off chance that you are searching for a database to connect with your intended interest group in Healthcare Industry, and afterward pick our Healthcare Email List, today. Our complete database incorporates contact subtleties of medical clinics, wellness establishments, drug stores, and centers. Social insurance Industry is a tremendous and different part that requires exceptional information while making a database.
            </Typography>
            <Typography variant="body1" gutterBottom>
            Our first class Healthcare Industry Email List will help you in investigating different business openings. Our information fields are portioned to keep our email databases accessible for any sort of alteration to meet our clients' prerequisites.
            </Typography>
            <Typography variant="body1" gutterBottom>
            Convantrix savvy, very much investigated and targeted email list focused on email list is the privilege answer for advertisers to make a speculation. Convantrix Healthcare Industry List will keep you in front of your rivals in this industry.
            </Typography>
            <Typography variant="h5" gutterBottom style={{color: "blue"}}>
                Our List of Top Selling Healthcare Email Lists:
            </Typography>
          </Grid>
          <Grid item container xl={12} lg={12} md={12} sm={12} xs={12} style={{margin: "10px"}}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <ul  style={{ paddingLeft: "15px" }}>
                <li>
                  <a href="/physician-email-list">
                    Physicians Email Lists
                  </a>
                </li>
                <li>
                  <a href="/dentists-email-lists">
                    Dentists Email List
                  </a>
                </li>
                <li>
                  <a href="/doctors-email-list">
                    Doctors Email Lists
                  </a>
                </li>
                <li>
                  <a href="/radiologists-email-list">
                    Diagonastic Radiology Mailing List
                  </a>
                </li>
                <li>
                  <a href="/chiropractor-email-lists">
                    Chiropractor Mailing List
                  </a>
                </li>
                <li>
                  <a href="/oncology-email-list">
                    Oncology Mailing List
                  </a>
                </li>
                <li>
                  <a href="/certified-nurse-anesthetist-email-list">
                    Certified Registered Nurse Anesthetist Mailing List
                  </a>
                </li>
                <li>
                   <a href="/dermatologist-email-list">
                      dermatologist Email List
                   </a>
                </li>
                <li>
                   <a href="/pharmacist-email-list">
                     Pharmacist Email List
                   </a>
                 </li> 
                 <li>
                   <a href="/opthalmologists-email-list">
                   Opthalmologists Email List
                   </a>
                 </li>  
                 <li>
                   <a href="/cardiologist-email-list">
                   Cardiologist Email List
                   </a>
                 </li>  
                 
            


              </ul>
            </Grid>
           <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            
            </Grid>
           <Button
            style={{ margin: "1rem 0" }}
            variant="contained"
            color="primary"
              fullWidth
              onClick={handleClickOpen}
          >
            Get Industry Email List Now!
          </Button>
          </Grid>
          
          <Typography variant="h5" gutterBottom style={{color: "blue"}}>
            Healthcare Email Lists Marketing Features That Will Gain More ROI!
          </Typography>
          <Typography variant="body1" gutterBottom>
          The Medical Email Lists incorporates custom fitted data that is tirelessly refreshed. It gives you a rundown of experts from all levels of the administrator and is legitimate for controlling B2B crusades through email, post, and telephone. We gather our information from confided in sources to give the most exact and legitimate contact subtleties.
          </Typography>
          <Typography variant="body1" gutterBottom>
          This Healthcare Industry Database will pack you better ROI, which will in the long run increment your image perceivability. You can get to high regard contacts and pioneers of the Healthcare Industry and can run an effective brand battle.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our efficient Healthcare Email List will positively help you in 
            forging a successful B2B campaign.
          </Typography>
          <Typography variant="h5" gutterBottom style={{color: "blue"}}>
            Step Ahead of Your Competitors, Flourish the Business!
          </Typography>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <ul style={{ paddingLeft: "15px" }}>
              <li>
              Our Healthcare Email Marketing is without a doubt a beneficial venture that will help you in making a more beneficial bond with the intended interest groups.
              </li>
              <li>
              Reach Over 3.2 Million Health and Medical Professionals
              </li>
              <li>
              The biggest human services email database, commonly coordinating more prominent than 90% of target documents.
              </li>
              <li>
              Our contact detail is a trusted and total one. We accumulate our information from solid sources that are perpetually updated through telecalls to kill copy just as bogus data.
              </li>
              <li>
              Our Healthcare Email List is adjusted according to the business necessities of our clients and customers
              </li>
              <li>
                Nurses, Doctors, Paramedics, Dentists, Cosmetologists, Pharmacists, Therapists, menu-top Workers and more.
              </li>
              <li>
                Effectively reach healthcare providers through multiple channels through verified data
              </li>
              <li>
                Our Healthcare Mailing List proffers improved sales opportunities & enhanced B2B campaign
              </li>
            </ul>
          </Grid>
          <Typography variant="h5" gutterBottom style={{color: "blue"}}>
            Our Reliable Healthcare Email Database Makes Your Business a Unique One!
          </Typography>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <ul style={{ paddingLeft: "15px" }}>
              <li>
                Healthcare Industry Surveys and feedback forms
              </li>
              <li>
                Healthcare Industry Yellow pages and public documents
              </li>
              <li>
                Healthcare Industry Census reports and Annual reports
              </li>
              <li>
                Healthcare Industry Trade and Business publication
              </li>
            </ul>
          </Grid>
          <Typography variant="body1" gutterBottom>
          Our exhaustive email client list is custom-made to empower productive business correspondence. Other than the referenced ones, we have numerous other applicable wellsprings of information collection.
          </Typography>
          <Typography variant="h5" gutterBottom style={{color: "blue"}}>
          Be a Market Leader. Start your Business Campaign with our Healthcare Email List, Increment your Business Presence with Our Contact Data.
          </Typography>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <ul style={{ paddingLeft: "15px" }}>
              <li>First and Last Name</li>
              <li>Contact Title</li>
              <li>Postal Address</li>
              <li>Telephone Number</li>
              <li>SIC Code</li>
              <li>Fax Number</li>
              <li>Zip code</li>
              <li>NAICS Code</li>
              <li>Web Address</li>
              <li>Company Name</li>
            </ul>
          </Grid>
          <Typography variant="body1" gutterBottom>
          We being the best one in the business with respect to information the executives, we mean to help our clients with all the likely advertising needs.
          </Typography>
          <Typography variant="body1" gutterBottom><strong>
          Buy our Healthcare Email List now and give your business crusade the necessary assets to blossom with. Know more, get in touch with us today!</strong>
          </Typography>
          <Typography variant="h5" gutterBottom style={{color: "blue"}}>
            Frequently Asked Questions:
          </Typography>
          <button className="collapsible">
            1. What is Healthcare Email List?
          </button>
          <div className="content">
            <p>
              A <strong>  Healthcare Email List </strong> is a collection of contact information for 
              healthcare professionals, executives, hospitals, doctors, surgeons and much more.
            </p>
          </div>
          <button className="collapsible">
            2. Is it worth buying Healthcare Email Database?
          </button>
          <div className="content">
            <p>
              If you want to generate more B2B leads, then buying a{" "}
              Yes, if you want to generate more leads, then buying a <strong>  Healthcare Email Database </strong> 
              will help you connect with more clients and reach a wider target audience in a short period of time.  
            </p>
          </div>
          <button className="collapsible">
            3. Is Convantrix the best place for Medical Email Lists?
          </button>
          <div className="content">
            <p>
             Yes, Convantrix is the best place to <strong>  buy Medical Email List </strong>, 
             as our data is error-free and comes in an easily downloadable format. Also, our server is 100% secure.
            </p>
          </div>
          <button className="collapsible">
            4. How Convantrix is different from other Healthcare Databases?
          </button>
          <div className="content">
            <p>At Convantrix, our data analysts and researcher ensure that all
              the data are collected from reliable sources like government records, conferences,
              forums &amp; communities, and more.
            </p>
          </div>
        </Grid>
      </div>
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
export default HealthcareMailList;
