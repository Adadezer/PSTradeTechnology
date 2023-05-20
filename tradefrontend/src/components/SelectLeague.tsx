import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { useEffect, useState, useContext } from "react";

import TradeContext from "../context/TradeContext";
import type { IData } from "../interfaces/ILeagues";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import RequestAPI from "../utils/RequestAPI";

export default function SelectLeague(props: ISizeMandatory) {
  const [league, setLeague] = useState("");
  const [listLeagues, setListLeagues] = useState<IData[]>([]);
  const { country, disabledLeague, setDisabledTeam } = useContext(TradeContext);

  useEffect(() => {
    const getLeagues = async () => {
      try {
        const result = await RequestAPI(
          "a9ba8b0d74bdb2c28b0804297a95643f",
          "leagues"
        );
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
    setDisabledTeam(false);
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
            {listLeagues.map((league, index) => (
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
