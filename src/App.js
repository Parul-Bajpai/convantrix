import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../src/screens/components/Home";
import AboutUs from "../src/screens/components/AboutUs/AboutUs";
import ContactUs from "../src/screens/components/ContactUs/ContactUs";

import FoodIndustry from "./screens/components/FoodIndustry/FoodIndustry";
import GasAndOil from "./screens/components/GasAndOil/GasAndOil";
import Manufacturing from "./screens/components/Manufacturing/Manufacturing";
import RealEstate from "./screens/components/RealEstate/RealEstate";
import WineIndustry from "./screens/components/WineIndustry/WineIndustry";

import TechnologyListContainer from "./screens/components/TechnologyList";
import HealthCareContainer from "./screens/components/HealthCare";
import IndustryContainer from "./screens/components/Industry";
import Navigation from "./screens/components/Navigation";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import AdminContainer from "./screens/components/Admin/AdminContainer";
import Login from "./screens/components/Login";
import ResetPassword from "./screens/components/ResetPassword";


import CLevelList from "./screens/components/CLevelList";
import TechnologyUser from "./screens/components/TechnologyUser/TechnologyUser";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/nav" component={Navigation} />
        <Route
          path={[
            "/health-care-email-list",
            "/oncology-email-list",
            "/radiologists-email-list",
            "/certified-nurse-anesthetist-email-list",
            "/physician-email-list",
            "/dentists-email-lists",
            "/doctors-email-list",
            "/chiropractor-email-lists",
            "/pharmacist-email-list",
            "/Dermatologist-email-list",
            "/opthalmologists-email-list",
            "/cardiologist-email-list",
          ]}
          component={HealthCareContainer}
        />
        <Route
          path={[
            "/industry-email-list",
            "/construction-industry-mailing-list",
            "/aviation-industry-email-list",
            "/automotive-mailing-lists",
          ]}
          component={IndustryContainer}
        />
        <Route
          path="/technology-users-list"
          component={TechnologyListContainer}
        />
        <Route exact path="/admin/:adminTabs" component={AdminContainer} />
        <Route path="/food-industy-list" component={FoodIndustry} />
        <Route path="/gas-and-oil-mailing-list" component={GasAndOil} />
        <Route path="/manufacturing-mailing-list" component={Manufacturing} />
        <Route path="/real-estate-mailing-list" component={RealEstate} />
        <Route path="/wine-industry-mailing-list" component={WineIndustry} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/login" component={Login} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/c-level-mailing-list" component={CLevelList} />
        <Route path="/technology-email-list" component={TechnologyUser} />
      </Switch>
    </Router>
  );
};

export default App;
