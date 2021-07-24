import React from "react";
import HealthcareMailList from "./HealthcareMailList";

import OncologyEmailList from "./OncologyEmailList";
import RadiologistEmailList from "./RadiologistEmailList";
import NurseAnesthetistEmailList from "./NurseAnesthetistEmailList";

import PhysicianEmailList from "./PhysicianEmailList";
import DentistEmailList from "./DentistEmailList";
import DoctorsEmailList from "./DoctorsEmailList";
import ChiropractorEmailList from "./ChiropractorEmailList";
import DermatologistEmailList from "./DermatologistEmailList";
import PharmacistEmailList from "./PharmacistEmailList";
import OpthalmologistsEmailList from "./OpthalmologistsEmailList";
import CardiologistEmailList from "./CardiologistEmailList";

const RenderEmailList = () => {
switch (window.location.pathname) {
case "/health-care-email-list":
return <HealthcareMailList />;
  case "/physician-email-list":
    return <PhysicianEmailList />
  case "/dentists-email-lists":
    return <DentistEmailList />
  case "/doctors-email-list":
    return <DoctorsEmailList />
  case "/chiropractor-email-lists":
    return <ChiropractorEmailList />
    case "/oncology-email-list": 
      return <OncologyEmailList />
    case "/radiologists-email-list":
      return <RadiologistEmailList />
    case "/dermatologist-email-list":
      return <DermatologistEmailList /> 
    case "/pharmacist-email-list":
      return <PharmacistEmailList />  
    case "/certified-nurse-anesthetist-email-list": 
    return <NurseAnesthetistEmailList />
    case "/opthalmologists-email-list":
      return <OpthalmologistsEmailList />
    case "/cardiologist-email-list":
      return <CardiologistEmailList />

default:
break;
}
};

export default RenderEmailList;
