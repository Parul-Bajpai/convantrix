import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavLink,
} from "reactstrap";

import ExpandLessOutLined from "@material-ui/icons/ExpandLessOutlined";
import GetAQuote from "./GetAQuote";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", throttle(handleScroll, 200));
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const handleScroll = () => {
    const toTop = document.querySelector(".to-top");
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
      setScrolled(true);
    } else {
      toTop.classList.remove("active");
      setScrolled(false);
    }
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (document.getElementById("progress-bar")) {
      document.getElementById("progress-bar").style.width = scrolled - 2 + "%";
    }
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <Navbar
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
        }}
        dark
        expand="md"
        // className={scrolled ? "nav scrolled" : "nav"}
      >
        <NavbarBrand href="/" className="hexooid-logo">
          <img
            src="/assets/convantrix-logo.png"
            alt="convantrix"
            title="Convantrix"
            style={{ width: "141px", height: "73px", objectFit: "cover" }}
          />
        </NavbarBrand>
        <NavbarToggler style={{ backgroundColor: "#000" }} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            navbar
            style={{
              // color: "#000",
              // position: "absolute",
              // top: "0",
              // left: "0",
              // right: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <NavLink
              style={{ color: "rgb(0,0,0)", fontWeight: "bolder" }}
              color="link"
              href="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{ color: "rgb(0,0,0)", fontWeight: "bolder" }}
              color="link"
              href="/about"
            >
              About Us
            </NavLink>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                style={{ color: "rgb(0,0,0)", fontWeight: "bolder" }}
              >
                B2B Email List
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem
                  href="/c-level-mailing-list"
                  style={{ fontWeight: "bolder" }}
                >
                  C Level List
                </DropdownItem>
                
                <DropdownItem
                  href="/health-care-email-list"
                  style={{ fontWeight: "bolder" }}
                >
                  Healthcare List
                </DropdownItem>
               
                <DropdownItem
                  href="/industry-email-list"
                  style={{ fontWeight: "bolder" }}
                >
                  Industry Lists
                </DropdownItem>
                <DropdownItem
                  href="/technology-email-list"
                  style={{ fontWeight: "bolder" }}
                >
                  Technology List
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink
              style={{ color: "rgb(0,0,0)", fontWeight: "bolder" }}
              color="link"
              href="/contact-us"
            >
              Contact Us
            </NavLink>
          </Nav>
        </Collapse>

        {scrolled && (
          <div className="custom-scroll-progress">
            <div className="scroll-progress" id="progress-bar"></div>
          </div>
        )}

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
      </Navbar>

      <div onClick={scrollToTop} className="to-top">
        <ExpandLessOutLined />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  aboutUs: PropTypes.bool,
};

NavBar.defaultProps = {
  aboutUs: false,
};

export default NavBar;
