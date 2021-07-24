import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent } from "@material-ui/core";
import { createQuote } from "./ApiServices/ApiService";

const useStyles = makeStyles({
  root: {
    // position: "fixed"
  },
  card: {
    // position: "fixed",
  },
});

const GetAQuote = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [requirement, setRequirement] = useState("");
  const classes = useStyles();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleRequ = (e) => {
    setRequirement(e.target.value);
  };
  const submit = () => {
    console.log(name, email, phone, company, requirement);
    createQuote({ name, email, phone, company, requirement }).then((res) => {
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setRequirement("");
    });
  };
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                GET A QUOTE NOW
              </Typography>
              <p>
                Please send us your requirement below and we will get in touch
                with you shortly.
              </p>
              <form noValidate autoComplete="off">
                <TextField
                  value={name}
                  onChange={handleName}
                  label="Name"
                  required
                  fullWidth
                />
                <TextField
                  value={email}
                  onChange={handleEmail}
                  label="Email"
                  required
                  fullWidth
                />
                <TextField
                  value={phone}
                  onChange={handlePhone}
                  label="Phone"
                  required
                  fullWidth
                />
                <TextField
                  value={company}
                  onChange={handleCompany}
                  label="Company"
                  required
                  fullWidth
                />
                <TextField
                  value={requirement}
                  onChange={handleRequ}
                  label="Requirement"
                  required
                  fullWidth
                />
                {/* <TextField label="What's: 4+7 ?" required fullWidth /> */}
                <Button
                  style={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={submit}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default GetAQuote;
