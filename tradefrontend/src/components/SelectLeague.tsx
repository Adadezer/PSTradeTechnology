import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { useEffect, useContext } from "react";

import TradeContext from "../context/TradeContext";
import type { IData } from "../interfaces/ILeagues";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import RequestAPI from "../utils/RequestAPI";

export default function SelectLeague(props: ISizeMandatory) {
  const {
    apiKey,
    country,
    league,
    setLeague,
    disabledLeague,
    setDisabledSeason,
    listLeagues,
    setListLeagues,
  } = useContext(TradeContext);

  useEffect(() => {
    const getLeagues = async () => {
      try {
        const result = await RequestAPI(`${apiKey}`, "leagues");
        setListLeagues(
          result.data.response.filter(
            (league: IData) => league.country.name === country
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    getLeagues();
  }, [country]);

  const handleLeague = (event: SelectChangeEvent) => {
    setLeague(event.target.value);
    setDisabledSeason(false);
  };

  return (
    <>
      <Grid item {...props}>
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled={disabledLeague}>
          <InputLabel>Liga</InputLabel>
          <Select value={league} label="Liga" onChange={handleLeague}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {listLeagues.map((league: IData, index: string) => (
              <MenuItem key={index} value={league.league.name}>
                {league.league.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione uma liga</FormHelperText>
        </FormControl>
      </Grid>
    </>
  );
}
