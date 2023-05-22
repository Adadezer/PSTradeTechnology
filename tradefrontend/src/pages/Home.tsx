import { Grid } from "@mui/material";

import SelectCountry from "../components/SelectCountry";
import SelectLeague from "../components/SelectLeague";
import SelectSeason from "../components/SelectSeason";

function Home() {
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
        <SelectSeason />
      </Grid>
    </>
  );
}

export default Home;
