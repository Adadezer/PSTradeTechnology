import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState, useContext } from "react";

import TradeContext from "../context/TradeContext";
import IPlayer from "../interfaces/IPlayer";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import ITeam from "../interfaces/ITeam";
import RequestAPI from "../utils/RequestAPI";

export default function CardPlayer(props: ISizeMandatory) {
  const [idTeam, setIdTeam] = useState<string>("");
  const [requestPlayer, setRequestPlayers] = useState<IPlayer[]>([]);
  const { idLeague, season, team, requestTeams } = useContext(TradeContext);

  useEffect(() => {
    const selectedTeam = requestTeams.find(
      (item: ITeam) => item.team.name === team
    );

    if (selectedTeam) {
      setIdTeam(selectedTeam.team.id);
    }
  }, [team, requestTeams]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const result = await RequestAPI(
          "a9ba8b0d74bdb2c28b0804297a95643f",
          `players?league=${idLeague}&season=${season}&team=${idTeam}`
        );
        setRequestPlayers(result.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    if (idTeam) {
      getPlayers();
    }
  }, [idLeague, season, idTeam]);

  if (!team) {
    return null;
  }

  return (
    <Grid item {...props}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {requestPlayer.map((el) => (
          <React.Fragment key={el.player.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={el.player.name} src={el.player.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", display: "inline" }}
                    >
                      Nome:
                    </Typography>{" "}
                    {el.player.name}
                  </>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ display: "block" }}
                    >
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Idade:
                      </Typography>{" "}
                      {el.player.age}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ display: "block" }}
                    >
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Nacionalidade:
                      </Typography>{" "}
                      {el.player.nationality}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Grid>
  );
}
