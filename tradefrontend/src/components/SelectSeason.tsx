import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { useEffect, useContext } from "react";

import TradeContext from "../context/TradeContext";
import type { IData, ISeason } from "../interfaces/ILeagues";
import ISizeMandatory from "../interfaces/ISizeMandatory";

export default function SelectSeasons(props: ISizeMandatory) {
  const {
    league,
    disabledSeason,
    season,
    setSeason,
    listLeagues,
    listSeasons,
    setListSeasons,
    setDisabledTeam,
  } = useContext(TradeContext);

  useEffect(() => {
    const selectedLeague = listLeagues.find(
      (item: IData) => item.league.name === league
    );

    if (selectedLeague) {
      setListSeasons(selectedLeague.seasons);
    } else {
      setListSeasons([]);
    }
  }, [league, listLeagues]);

  const handleSeason = (event: SelectChangeEvent) => {
    setSeason(event.target.value);
    setDisabledTeam(false);
  };

  return (
    <>
      <Grid item {...props}>
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled={disabledSeason}>
          <InputLabel>Temporada</InputLabel>
          <Select value={season} label="Temporada" onChange={handleSeason}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {listSeasons.map((season: ISeason, index: number) => (
              <MenuItem key={index} value={season.year}>
                {season.year}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione uma temporada</FormHelperText>
        </FormControl>
      </Grid>
    </>
  );
}
