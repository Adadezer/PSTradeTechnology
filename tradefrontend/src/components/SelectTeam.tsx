import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { useEffect, useContext } from "react";

import TradeContext from "../context/TradeContext";
import { IData } from "../interfaces/ILeagues";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import ITeam from "../interfaces/ITeam";
import RequestAPI from "../utils/RequestAPI";

export default function SelectTeam(props: ISizeMandatory) {
  const {
    league,
    listLeagues,
    idLeague,
    setIdLeague,
    season,
    team,
    setTeam,
    disabledTeam,
    requestTeams,
    setRequestTeams,
  } = useContext(TradeContext);

  useEffect(() => {
    const selectedLeague = listLeagues.find(
      (item: IData) => item.league.name === league
    );

    if (selectedLeague) {
      setIdLeague(selectedLeague.league.id);
    }
    console.log("idLeague: ", idLeague);
    console.log("season: ", season);
    const getTeams = async () => {
      try {
        const result = await RequestAPI(
          "a9ba8b0d74bdb2c28b0804297a95643f",
          `teams?season=${season}&league=${idLeague}`
        );
        setRequestTeams(result.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedLeague && season) {
      getTeams();
    }
  }, [idLeague, league, listLeagues, season]);
  console.log("RTd: ", requestTeams);
  const handleTeam = (event: SelectChangeEvent) => {
    setTeam(event.target.value);
  };

  return (
    <>
      <Grid item {...props}>
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled={disabledTeam}>
          <InputLabel>Times</InputLabel>
          <Select value={team} label="Times" onChange={handleTeam}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {requestTeams.map((team: ITeam, index: string) => (
              <MenuItem key={index} value={team.team.name}>
                {team.team.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione um Time</FormHelperText>
        </FormControl>
      </Grid>
    </>
  );
}
