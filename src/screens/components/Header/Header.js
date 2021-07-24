import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AOS from "aos";
import "aos/dist/aos.css";
import Typography from "@material-ui/core/Typography";

import GetAQuote from "../../GetAQuote";
import NavBar from "../../NavBar";

const Header = () => {
  const [index, setIndex] = useState(0);
  const [images] = useState([
    "https://www.optincontacts.com/wp-content/themes/opticontacts/images/marketers.png",
    "https://www.lakeb2b.com/wp-content/themes/twentysixteen/assets/img/banner-bg-01.png",
    "https://www.lakeb2b.com/wp-content/uploads/2020/04/switch-gear.png",
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);
  return (
    <>
      <div
        style={{
          // position: "relative",
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            // position: "absolute",
            // top: 0,
            // left: 0,
            // bottom: 0,
            // right: 0,
            background:
              "linear-gradient(to bottom, rgba(130, 220, 181, 100), rgba(7, 68, 98, 0.7))",
          }}
        >
          <NavBar />

          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={2000}
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              height: window.innerHeight * 0.9,
            }}
          >
            <Carousel.Item>
              <div>
                <div className="container flex items-center content-center py-lg-5 py-sm-3">
                  <Typography data-aos="fade-left" variant="h5" gutterBottom>
                    Advertisers In More Than 75 Countries Get The FREE Data
                    Sample Consistently – You Can Too
                  </Typography>
                  <Typography
                    data-aos="fade-right"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Information exchange for the Convantrix and get Free
                    Database Sample, Advertising Updates, bits of knowledge,
                    tips and valuable advisers for improve your advertising.
                  </Typography>
                  <Button
                    href="#contact"
                    style={{ borderRadius: 25, margin: 16 }}
                    variant="outline-light"
                    data-aos="fade-down"
                    onClick={handleClickOpen}
                  >
                    Get Free Quote Now !
                  </Button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <div className="container py-lg-5 py-sm-3">
                  <Typography data-aos="fade-left" variant="h5" gutterBottom>
                    Advertisers In More Than 75 Countries Get The FREE Data
                    Sample Consistently – You Can Too
                  </Typography>
                  <Typography
                    data-aos="fade-right"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Information exchange for the Convantrix and get Free
                    Database Sample, Advertising Updates, bits of knowledge,
                    tips and valuable advisers for improve your advertising.
                  </Typography>
                  <Button
                    href="#contact"
                    style={{ borderRadius: 25, margin: 16 }}
                    variant="outline-light"
                    data-aos="fade-down"
                    onClick={handleClickOpen}
                  >
                    Get Free Quote Now !
                  </Button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <div className="container py-lg-5 py-sm-3">
                  <Typography data-aos="fade-left" variant="h5" gutterBottom>
                    Advertisers In More Than 75 Countries Get The FREE Data
                    Sample Consistently – You Can Too
                  </Typography>
                  <Typography
                    data-aos="fade-right"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Information exchange for the Convantrix and get Free
                    Database Sample, Advertising Updates, bits of knowledge,
                    tips and valuable advisers for improve your advertising.
                  </Typography>
                  <Button
                    href="#contact"
                    style={{ borderRadius: 25, margin: 16 }}
                    variant="outline-light"
                    data-aos="fade-down"
                    onClick={handleClickOpen}
                  >
                    Get Free Quote Now !
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
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
      </div>
    </>
  );
};

export default Header;
