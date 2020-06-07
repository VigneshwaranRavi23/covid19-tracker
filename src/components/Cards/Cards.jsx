import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Not fetched";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
          style={{ backgroundColor: "#FF0000" }}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ color: "white" }}
              gutterBottom
            >
              Infected
            </Typography>
            <Typography variant="h5" style={{ color: "white" }}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" style={{ color: "white" }}>
              Last Updated: {new Date(lastUpdate).toString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
          style={{ backgroundColor: "green" }}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ color: "white" }}
              gutterBottom
            >
              Recovered
            </Typography>
            <Typography variant="h5" style={{ color: "white" }}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" style={{ color: "white" }}>
              Last Updated: {new Date(lastUpdate).toString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
          style={{ backgroundColor: "blue	" }}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ color: "white" }}
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography variant="h5" style={{ color: "white" }}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" style={{ color: "white" }}>
              Last Updated: {new Date(lastUpdate).toString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
