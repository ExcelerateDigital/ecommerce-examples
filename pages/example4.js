import React, { useEffect, useState } from "react";
import Head from "next/head";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const [id, setId] = useState();

  useEffect(async () => {
    const response = await fetch("/api/data");
    const json = await response.json();
    setId(json.id);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Head>
        <title>Example </title>
      </Head>
      <AppBar />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1">
            Your order number is #{id}. We have emailed your order confirmation,
            and will send you an update when your order has shipped.
          </Typography>
        </Paper>
        <Footer />
      </main>
    </React.Fragment>
  );
}
