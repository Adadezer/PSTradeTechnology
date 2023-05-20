import { Grid } from "@mui/material";
// import React, { useContext } from "react";

import SelectCountry from "../components/SelectCountry";
import SelectLeague from "../components/SelectLeague";
// import TradeContext from "../context/TradeContext";

function Home() {
  // const { apiKey } = useContext(TradeContext);
  return (
    <>
      <h1>Home</h1>
      <Grid
        container
        component="form"
        spacing={1}
        direction="column"
        p={1}
        noValidate
        autoComplete="off"
        sx={{ overflow: "auto", maxHeight: "86vh" }}
      >
        <SelectCountry />
        <SelectLeague />
      </Grid>
    </>
  );
}

export default Home;
