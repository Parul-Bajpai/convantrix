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

import { login } from "../ApiServices/ApiService";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    let loginData = {
      email: email,
      password: password,
    };
    console.log("login compo", login(loginData));
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
                  label="Email"
                  variant="outlined"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  label="Password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
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
                    handleLogin();
                  }}
                >
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default Login;
