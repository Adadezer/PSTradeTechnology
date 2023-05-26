import { Grid } from "@mui/material";

import CardFormation from "../components/CardFormation";
import CardPlayer from "../components/CardPlayer";
import SelectCountry from "../components/SelectCountry";
import SelectLeague from "../components/SelectLeague";
import SelectSeason from "../components/SelectSeason";
import SelectTeam from "../components/SelectTeam";
import TableGameResult from "../components/TableGameResult";

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
        <SelectTeam />
        <CardPlayer />
        <CardFormation />
        <TableGameResult />
      </Grid>
    </>
  );
}

export default Home;
