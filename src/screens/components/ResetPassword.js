import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { resetPassword } from "../ApiServices/ApiService";

const ResetPassword = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleResetPassword = () => {
    let resetData = {
      password: oldPassword,
      confirmPassword: newPassword  
    };
    if(oldPassword.trim()!==newPassword.trim()){
        alert("password,confirmpassword should be same")
    }else{
    resetPassword(resetData)
    }
   
    console.log("login compo", resetPassword(resetData));
  };
  return (
    <Grid container lg={12} xs={12}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: window.innerHeight,
          width: "100%",
        }}
      >
        <div
          style={{
            boxShadow: "1px 3px 3px #9E9E9E",
            borderRadius: 15,
            padding: 32,
            backgroundColor: "#fff",
            margin: 32,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography style={{ textAlign: "center" }} variant="h5">
                Convantrix
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div style={{}}>
                <TextField
                  style={{ marginBottom: 16, marginTop: 16 }}
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  placeholder="Enter Password"
                  onChange={(e) => setOldPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  style={{ marginBottom: 16, marginTop: 16 }}
                  fullWidth
                  type="password"
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter Confirm Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  style={{ marginTop: 32 }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleResetPassword();
                  }}
                >
                  Reset Password
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default ResetPassword;
