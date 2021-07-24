import React, { useEffect } from "react";
import ExpandLessOutLined from "@material-ui/icons/ExpandLessOutlined";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { throttle } from "lodash";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({}));

const Navigation = () => {
  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 200));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // const [scrolled, setScrolled] = useState(false);

  const toggleIcons = () => {
    document.getElementById("nav-bar").classList.toggle("active");
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const handleScroll = () => {
    const toTop = document.querySelector(".to-top");
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
      // setScrolled(true);
    } else {
      toTop.classList.remove("active");
      // setScrolled(false);
    }
  };

  return (
    <div className="navigation-container">
      <header>
        <nav id="nav-bar">
          <div className="menu-icons" onClick={toggleIcons}>
            <MenuIcon style={{ color: "#000000" }} className="hamburger-menu" />
            <CloseIcon className="close-cross" />
          </div>

          <ul className="container py-lg-2 py-sm-3 nav-list">
            <li>
              <a href="/" style={{ paddingLeft: "0px" }}>
                <img
                  src="/assets/convantrix.png"
                  alt="convantrix"
                  title="Convantrix"
                  height={40}
                />
              </a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="#">
                B2B List
                <ArrowDropDownIcon />
              </a>
              <ul className="sub-menu">
                <li>
                <a href="/c-level-mailing-list">C Level List</a>
                </li>
                <li>
                  <a href="/health-care">Health Care List</a>
                </li>
                <li>
                <a href="/industry-email-list">Industry Lists</a>
                </li>
                <li>
                <a href="/technology-list">Technology List</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <div onClick={scrollToTop} className="to-top">
        <ExpandLessOutLined />
      </div>
    </div>
  );
};

export default Navigation;
