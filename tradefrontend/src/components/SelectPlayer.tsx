import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useEffect, useState, useContext } from "react";

import TradeContext from "../context/TradeContext";
import IPlayer from "../interfaces/IPlayer";
import ISizeMandatory from "../interfaces/ISizeMandatory";
import ITeam from "../interfaces/ITeam";
import RequestAPI from "../utils/RequestAPI";

export default function SelectPlayer(props: ISizeMandatory) {
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

  function createData(name: string, age: number, nationality: string) {
    return { name, age, nationality };
  }

  const rows = requestPlayer.map((el) =>
    createData(el.player.name, el.player.age, el.player.nationality)
  );

  if (!team) {
    return null;
  }

  return (
    <Grid item {...props}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Idade</TableCell>
              <TableCell align="right">Nacionalidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.nationality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
