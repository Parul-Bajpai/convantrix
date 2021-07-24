import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../../NavBar";
import Navigation from "../Navigation";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerAlignment: {
    textAlign: "center",
  },
  justifyAlignment: {
    textAlign: "justify",
  },
  greyBackground: {
    backgroundColor: "#f4f4f4",
  },
  blueColoredText: {
    color: "#007BFF",
    textAlign: "center",
    cursor: "pointer",
  },
}));

const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
  return (
    <>
      <div className="home-page-wrapper">
        <Grid container spacing={3}>
          {/* <Grid item lg={12} md={12} sm={12} xs={12}>
            <NavBar />
          </Grid> */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Header />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Typography variant="h4" gutterBottom style={{ color: "blue" }}>
                  Buy Targeted Email List!
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Database Marketing solution For Fast-Growing Businesses
                </Typography>
                <Typography
                  className={classes.justifyAlignment}
                  variant="subtitle1"
                  gutterBottom
                >
                  Convantrix coordinated way to deal with Database promoting
                  gives you all the adaptability you need in an available, easy
                  to-utilize with our focused on email database. Incredible
                  promoting devices at your fingertips, making efforts and
                  projects simpler and quicker. Each advertiser has an
                  incredible battle within them – we should cooperate to
                  dispatch it to the world.
                </Typography>
              </div>
            </section>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.greyBackground}
            data-aos="fade-up"
          >
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Typography
                  variant="h4"
                  className={classes.centerAlignment}
                  gutterBottom
                  style={{ color: "blue", marginBottom: "2.5rem" }}
                >
                  What We Provide
                </Typography>
                <div>
                  <Grid container className="mt-lg-2 py-sm-1" spacing={4}>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={12}
                      xs={12}
                      style={{ marginBottom: "0.7rem" }}
                    >
                      <div className="home-card">
                        {/* <div className="card-image"> */}
                        <img
                          src={require("./technology.jpg")}
                          alt="Technology-list"
                          title="Technology-list"
                          className="card-image"
                        />
                        {/* </div> */}
                        <div className="card-content">
                          <Typography
                            variant="h6"
                            className={classes.blueColoredText}
                            gutterBottom
                          >
                            <a href="/technology-email-list">
                              Technology Users Lists
                            </a>
                          </Typography>
                          <Typography
                            className={classes.centerAlignment}
                            variant="subtitle1"
                            gutterBottom
                          >
                            Connect with the top innovation clients and IT
                            chiefs to advance your items with top of the line
                            innovation mailing list across USA.
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={12}
                      xs={12}
                      style={{ marginBottom: "0.7rem" }}
                    >
                      <div className="home-card">
                        <img
                          src={require("./health.jpg")}
                          alt="health"
                          className="card-image"
                        />
                        <div className="card-content">
                          <Typography
                            variant="h6"
                            className={classes.blueColoredText}
                            gutterBottom
                          >
                            <a href="/health-care-email-list">Health Care Email List</a>
                          </Typography>
                          <Typography
                            className={classes.centerAlignment}
                            variant="subtitle1"
                            gutterBottom
                          >
                            Connect with the medicinal services experts,
                            specialists what's more, emergency clinics with our
                            total arrangement of social insurance mailing list.
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={12}
                      xs={12}
                      style={{ marginBottom: "0.7rem" }}
                    >
                      <div className="home-card">
                        <img
                          src={require("./c-level.jpg")}
                          alt="c-level-list"
                          className="card-image"
                        />
                        <div className="card-content">
                          <Typography
                            variant="h6"
                            className={classes.blueColoredText}
                            gutterBottom
                          >
                            <a href="/c-level-mailing-list">
                              C-level Email Lists
                            </a>
                          </Typography>
                          <Typography
                            className={classes.centerAlignment}
                            variant="subtitle1"
                            gutterBottom
                          >
                            Get the chance to contact with all the Chief
                            Officers of different organizations from various
                            offices, with our C-level mailing list
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      sm={12}
                      xs={12}
                      style={{ marginBottom: "0.7rem" }}
                    >
                      <div className="home-card">
                        <img
                          src={require("./industry.jpg")}
                          alt="industry"
                          title="Technology-list"
                          className="card-image"
                        />
                        <div className="card-content">
                          <Typography
                            variant="h6"
                            className={classes.blueColoredText}
                            gutterBottom
                          >
                            <a href="/industry-email-list">
                              Industry Email List
                            </a>
                          </Typography>
                          <Typography
                            className={classes.centerAlignment}
                            variant="subtitle1"
                            gutterBottom
                          >
                            Profit responsive contact subtleties of US producing
                            associations, experts and proprietors with our
                            producing mailing list.
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </section>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} data-aos="fade-up">
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Grid container spacing={3}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img
                      src={require("./DatabaseMarketting.png")}
                      alt="Database Marketing"
                      title="Database Marketing"
                      className="img-fluid"
                    />
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      style={{ color: "blue" }}
                    >
                      Database Marketing
                    </Typography>
                    <Typography
                      className={classes.justifyAlignment}
                      variant="subtitle1"
                      gutterBottom
                    >
                      <p className="mt-3">
                        <strong> Convantrix</strong> is a pioneer in the field
                        of information the executives and administrations to{" "}
                        <strong> purchase focused on email list</strong>. We
                        have confidence in giving inventive and altered email
                        database according to the fluctuated needs of our
                        customers. Our point is to support you accomplish your
                        business targets.
                      </p>
                      <p className="mt-2">
                        Our <strong> focused on email database</strong> is
                        profoundly viable in this serious market. Our center is
                        to meet the prerequisite of every single individual.{" "}
                        <strong> Convantrix</strong> administrations are
                        moderate and prompt
                      </p>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.greyBackground}
            data-aos="fade-up"
          >
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Grid container spacing={3}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      style={{ color: "blue" }}
                    >
                      Digital Intelligence Solution
                    </Typography>
                    <Typography
                      className={classes.justifyAlignment}
                      variant="subtitle1"
                      gutterBottom
                    >
                      <p className="mt-3">
                        Convantrix has the correct email showcasing answer for
                        your business. As the significance of being carefully
                        noticeable is developing exponentially, we offer you
                        systems that are a blend of conventional and
                        computerized showcasing angles. Our email showcasing
                        administrations offer you SEO, web based advertising,
                        email promoting additionally social media promoting. Our
                        enhancing email promoting administrations and
                        arrangement is the thing that your business needs today!
                      </p>
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img
                      src={require("./5.jpg")}
                      alt="Database Marketing"
                      title="Database Marketing"
                      className="img-fluid"
                    />
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} data-aos="fade-up">
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Typography
                  variant="h4"
                  className={classes.centerAlignment}
                  gutterBottom
                  style={{ color: "blue", marginBottom: "0.3rem" }}
                >
                  <strong> Testimonials</strong>
                </Typography>
                <Typography
                  variant="h4"
                  className={classes.centerAlignment}
                  gutterBottom
                  style={{ color: "blue", marginBottom: "0.3rem" }}
                >
                  Hear What They Have To Say About Us!
                </Typography>

                <Grid container className="mt-lg-1 py-sm-1" spacing={6}>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{ marginBottom: "0.7rem" }}
                  >
                    {/* </div> */}
                    <div className="card-content">
                      <Typography
                        variant="h6"
                        className={classes.blueColoredText}
                        gutterBottom
                      >
                        Maria Swartzki
                      </Typography>
                      <Typography
                        className={classes.centerAlignment}
                        variant="subtitle1"
                        gutterBottom
                      >
                        "I really like their work, I guess now they have got a
                        new lifetime customer. From now on, every New project
                        that I do will only be via their Convantrix."
                      </Typography>
                    </div>
                  </Grid>

                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{ marginBottom: "0.7rem" }}
                  >
                    <div className="card-content">
                      <Typography
                        variant="h6"
                        className={classes.blueColoredText}
                        gutterBottom
                      >
                        Teresa Henry
                      </Typography>
                      <Typography
                        className={classes.centerAlignment}
                        variant="subtitle1"
                        gutterBottom
                      >
                        " Andrew Jackson provided a great service before and
                        after the purchase of the data". Convantrix has great
                        quality data and Quality service Team..
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{ marginBottom: "0.7rem" }}
                  >
                    <div className="card-content">
                      <Typography
                        variant="h6"
                        className={classes.blueColoredText}
                        gutterBottom
                      >
                        Martina Henks
                      </Typography>
                      <Typography
                        className={classes.centerAlignment}
                        variant="subtitle1"
                        gutterBottom
                      >
                        "It was an Excellent experience with Convantrix Team. We
                        have never came across who provides high quality data
                        with intellgence data fields with update. we are looking
                        forward to Utilize your other services as well for our
                        feature Projects"
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
          <Grid
            className={classes.greyBackground}
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            data-aos="fade-up"
          >
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Typography
                  variant="h4"
                  className={classes.centerAlignment}
                  gutterBottom
                  style={{
                    color: "blue",
                    marginBottom: "0.3rem",
                  }}
                >
                  <strong>Interesting Facts</strong>
                </Typography>
                <Typography
                  variant="h4"
                  className={classes.centerAlignment}
                  gutterBottom
                  style={{ color: "blue", marginBottom: "0.3rem" }}
                >
                  Acheivements That We Are Proud Of
                </Typography>

                <Grid container className="mt-lg-1 py-sm-1" spacing={6}>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{ marginBottom: "0.7rem" }}
                  >
                    <div className="card-content">
                      <Typography
                        variant="h5"
                        className={classes.blueColoredText}
                        gutterBottom
                      >
                        400+
                      </Typography>
                      <Typography
                        className={classes.centerAlignment}
                        variant="subtitle1"
                        gutterBottom
                      >
                        Happy Customers
                      </Typography>
                    </div>
                  </Grid>

                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{ marginBottom: "0.7rem" }}
                  >
                    <div className="card-content">
                      <Typography
                        variant="h5"
                        className={classes.blueColoredText}
                        gutterBottom
                      >
                        267+
                      </Typography>
                      <Typography
                        className={classes.centerAlignment}
                        variant="subtitle1"
                        gutterBottom
                      >
                        Workers Employed
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={{ marginBottom: "0.7rem" }}
                  >
                    <div className="card-content">
                      <Typography
                        variant="h5"
                        className={classes.blueColoredText}
                        gutterBottom
                      >
                        368+
                      </Typography>
                      <Typography
                        className={classes.centerAlignment}
                        variant="subtitle1"
                        gutterBottom
                      >
                        Projects Completed
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} data-aos="fade-up">
            <section>
              <div className="container py-lg-5 py-sm-3">
                <Typography variant="h5" gutterBottom style={{ color: "blue" }}>
                  Frequently Asked Questions:
                </Typography>
                <button className="collapsible">
                  1. How can I buy a targeted email list for marketing?{" "}
                </button>
                <div className="content">
                  <p>
                    You can easily purchase a targeted Email List from
                    Convantrix . All you need to do is purchase a membership
                    plan that suits your needs and enjoy its unlimited benefits.
                  </p>
                </div>
                <button className="collapsible">
                  2. Why should I buy a targeted email list?{" "}
                </button>
                <div className="content">
                  <p>
                    Buying a targeted email list is the cheapest form of
                    marketing, which can help your business generate more
                    income, increase your ROI, and find your niche for yourself
                    in the competitive markets.
                  </p>
                </div>
                <button className="collapsible">
                  3. Do companies still buy email lists?{" "}
                </button>
                <div className="content">
                  <p>
                    Yes, companies still purchase email lists. Sending marketing
                    emails and newsletters is a great way to generate brand
                    awareness and boost sales. If you want to generate more B2B
                    leads, then buying an email list will do just that.{" "}
                  </p>
                </div>
                <button className="collapsible">
                  4. Where can I Buy Email Lists?
                </button>
                <div className="content">
                  <p>
                    At Convantrix you receive the best list of qualified
                    contacts. Our data analysts ensure that there is no
                    duplicate content and all the information is 100% accurate.
                  </p>
                </div>
                <button className="collapsible">
                  5. Can I get an email list from Convantrix?
                </button>
                <div className="content">
                  <p>
                    Yes, you can buy an Email List from Convantrix in an easily
                    downloadable format.
                  </p>
                </div>
                <button className="collapsible">
                  6. Is Convantrix the best place to buy email lists?
                </button>
                <div className="content">
                  <p>
                    Yes, purchasing the Email List from Convantrix will help you
                    connect with clients all around the globe and develop
                    mutually beneficial business relations.
                  </p>
                </div>
                <button className="collapsible">
                  7. How are Convantrix different from other databases?
                </button>
                <div className="content">
                  <p>
                    At Convantrix, our data analysts and researcher ensure that
                    all the data are collected from reliable sources like
                    events, public records, direct meetings, public directories,
                    and much more.
                  </p>
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};
export default Home;
