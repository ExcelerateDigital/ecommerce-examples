import React from "react";
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

  return (
    <React.Fragment>
      <CssBaseline />
      <Head>
        <title>Example </title>
      </Head>
      <AppBar />
      <main className={classes.layout}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
							window.ga = window.ga || function(){};
							ga('ecommerce:addItem', {
								'id': '1234',                     // Transaction ID. Required.
								'name': 'Fluffy Pink Bunnies',    // Product name. Required.
								'sku': 'DD23444',                 // SKU/code.
								'category': 'Party Toys',         // Category or variation.
								'price': '11.99',                 // Unit price.
								'quantity': '1'                   // Quantity.
							});
							ga('ecommerce:addItem', {
								'id': '5678',                     // Transaction ID. Required.
								'name': 'Normal Pink Bunnies',    // Product name. Required.
								'sku': 'FF23444',                 // SKU/code.
								'category': 'Party Toys',         // Category or variation.
								'price': '8.99',                 // Unit price.
								'quantity': '2'               // Quantity.
							});
							ga('ecommerce:addTransaction', {
								'id': '2000001',                     // Transaction ID. Required.
								'affiliation': 'Acme Clothing',   // Affiliation or store name.
								'revenue': '29.97',               // Grand Total.
								'shipping': '3',                  // Shipping.
								'tax': '1.29'                     // Tax.
							});
						`,
          }}
        />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1">
            Your order number is #2000001. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
        </Paper>
        <Footer />
      </main>
    </React.Fragment>
  );
}
