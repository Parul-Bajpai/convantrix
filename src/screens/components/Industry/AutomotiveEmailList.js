import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import GetAQuote from "../../GetAQuote";

const AutomotiveMailList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="automotive-mail-wrapper">
      <Grid item container xl={10} lg={10} md={12} sm={12} xs={12} style={{}}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography variant="body1" gutterBottom>
            Convantrix offers the most front line and fascinating Car Industry
            Executives Email List containing outstandingly responsive business
            bosses and other top executives of an association. This once-over
            can be used by associations for Email, Postal, Phone and other
            multi-channel advancing exertion centered at the Automotive Industry
            everywhere throughout the globe.
          </Typography>
          <Typography variant="body1" gutterBottom>
            This rundown of top Automotive Executive messages is the ideal
            answer for those prompt publicists planning to develop quick
            relationship with associations in the Automotive Industry. The
            once-over in like manner offers a grouping of segment, title and
            industry characteristics.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are among the pioneers in having the most updated contacts of
            fast approaching customers and business advancement customers. The
            fields made sure about by Convantrix consolidate total contact focal
            points like:
          </Typography>
          <ul style={{ paddingLeft: "15px" }}>
            <li>
              <span>Contact name</span>
            </li>
            <li>
              <span>Title</span>
            </li>
            <li>
              <span>Email address</span>
            </li>
            <li>
              <span>Business contact number</span>
            </li>
            <li>
              <span>Organization name</span>
            </li>
            <li>
              <span>Physical location</span>
            </li>
            <li>
              <span>Income</span>
            </li>
            <li>
              <span>Organization size</span>
            </li>
            <li>
              <span>SIC code</span>
            </li>
            <li>
              <span>Industry</span>
            </li>
          </ul>
          <Typography variant="body1" gutterBottom>
            Around 50 such contact information fields are made sure about in our
            database which can be changed by necessities. A submitted gathering
            of selling specialists consistently keep our databases updated and
            checked by any stretch of the imagination times.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Business associations and specialists using this application as a
            some portion of an extent of business undertakings are joined into
            our mailing list. This mailing list/email list offers a champion
            among the most starting late updated and greatest databases in the
            globe.
          </Typography>

          <Typography variant="h5" gutterBottom style={{ color: "blue" }}>
            <b>
              Our mailing records are engaged at improving the organization’s
              B2B:
            </b>
          </Typography>
          <ul style={{ paddingLeft: "15px" }}>
            <li>
              <span>Direct promoting</span>
            </li>
            <li>
              <span>Telemarketing</span>
            </li>
            <li>
              <span>Occasion promoting and other</span>
            </li>
            <li>
              <span>Web promoting effort</span>
            </li>
          </ul>
          <Button
            style={{ margin: "1rem 0" }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOpen}

          >
            Get Automotive Mailing Lists
          </Button>
          <Typography variant="body1" gutterBottom>
            Convantrix orders this mailing list through various sources
            counting, open records, destinations, business cards, creations and
            that is only the start. We have similarly grouped along with a part
            of the primary magazines and trade shows to source the contact focal
            points of driving pioneers in the business. Solitary customer
            consent is taken before updating their contact focal points in the
            database.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Access our database of completely regulated records, updated phone
            and email data. The database at our end is checked routinely to
            ensure most noteworthy precision. Convantrix offers mailing records
            for titles, for instance, that include: Chief/President, CFO,
            CIO/CTO, COO, Owner/Partner, Vice Presidents, Chiefs, IT Executives,
            Sales Executives, Marketing Executives, HR Heads, Operations
            Executives, Finance Executives, Business Advancement Exec,
            Controller, Corporate Secretary, Treasurer, Supervisors,
            Purchasing/Procurement, Administration, R and D Exec, numerous more.
          </Typography>
          <div className="list-management">
            Rundown Management – The Key to Effective Targeting and Enhanced
            Deliverability. Converse with our Database Specialists to section
            your information with right crowd.
            <br />
            <strong>
              Call US
              <span style={{ color: "#ff0000", wordWrap: "breakWord" }}>
                {" "}
                +1 (201) 289-8197
              </span>
            </strong>{" "}
            or email us at{" "}
            <span style={{ color: "#ff0000", textSizeAdjust: "auto" }}>
              <strong style={{ wordWrap: "breakWord" }}>
                info@convantrix.com&nbsp;
              </strong>
            </span>
          </div>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Button
            onClick={handleClose}
            color="primary"
            style={{
              float: "right",
              backgroundColor: "whitesmoke",
              color: "black",
            }}
          >
            Cancel
          </Button>
          <GetAQuote />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AutomotiveMailList;
