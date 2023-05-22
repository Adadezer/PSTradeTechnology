import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { useEffect, useState, useContext } from "react";

import TradeContext from "../context/TradeContext";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import RequestAPI from "../utils/RequestAPI";

export default function SelectTeam(props: ISizeMandatory) {
  const [requestTeams, setRequestTeams] = useState<any[]>([]);
  const { country, league, season, team, setTeam } = useContext(TradeContext);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const result = await RequestAPI(
          "a9ba8b0d74bdb2c28b0804297a95643f",
          `https://v3.football.api-sports.io/players?id=276&season=2019"`
          // https://v3.football.api-sports.io/teams?country=Brazil&league=71&season=2010
        );
        setRequestTeams(result.data.response);
        console.log("requestTeams useEffect:", requestTeams);
      } catch (error) {
        console.error(error);
      }
    };

    getTeams();
  }, [country, league, season]);

  const handleTeam = (event: SelectChangeEvent) => {
    setTeam(event.target.value);
    console.log("requestTeams handle :", requestTeams);
  };

  return (
    <>
      <Grid item {...props}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Times</InputLabel>
          <Select value={team} label="Times" onChange={handleTeam}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {requestTeams.map((team, index) => (
              <MenuItem key={index} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione um Time</FormHelperText>
        </FormControl>
      </Grid>
    </>
  );
}
