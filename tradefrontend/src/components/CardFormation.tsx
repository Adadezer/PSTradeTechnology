import { Divider, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useEffect, useState, useContext } from "react";

import TradeContext from "../context/TradeContext";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import ITeam from "../interfaces/ITeam";
import { ILineup, IStatistics } from "../interfaces/ITeamStatistics";
import RequestAPI from "../utils/RequestAPI";

export default function CardPlayer(props: ISizeMandatory) {
  const [idTeam, setIdTeam] = useState<string>("");
  const [requestTeamStatistics, setRequestTeamStatistics] = useState<
    IStatistics[]
  >([]);
  const { idLeague, season, team, requestTeams } = useContext(TradeContext);

  useEffect(() => {
    const selectedTeam = requestTeams.find(
      (item: ITeam) => item.team.name === team
    );

    if (selectedTeam) {
      setIdTeam(selectedTeam.team.id);
    }
    console.log("selectedTeam: ", selectedTeam);
  }, [team, requestTeams]);

  console.log("season: ", season);
  console.log("idTeam: ", idTeam);
  console.log("idLeague: ", idLeague);
  useEffect(() => {
    const getTeamStatistics = async () => {
      try {
        const result = await RequestAPI(
          "a9ba8b0d74bdb2c28b0804297a95643f",
          `teams/statistics?season=${season}&team=${idTeam}&league=${idLeague}`
        );
        setRequestTeamStatistics([result.data.response]);
      } catch (error) {
        console.error(error);
      }
    };
    console.log("requestTeamStatistics1: ", requestTeamStatistics);
    if (idTeam) {
      getTeamStatistics();
    }
  }, [idLeague, season, idTeam]);

  if (!team) {
    return null;
  }
  console.log("requestTeamStatistics2: ", requestTeamStatistics);
  return (
    <Grid item {...props}>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        {requestTeamStatistics.map((el, index) => (
          <React.Fragment key={index}>
            {el.lineups.map((item: ILineup, subIndex: number) => (
              <>
                <ListItem key={`${index}-${subIndex}`}>
                  <ListItemText primary="Formação" secondary={item.formation} />
                  <ListItemText primary="Jogadas" secondary={item.played} />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Grid>
  );
}
