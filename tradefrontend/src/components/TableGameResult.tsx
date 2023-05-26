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
import ISizeMandatory from "../interfaces/ISizeMandatory";
import ITeam from "../interfaces/ITeam";
import { IStatistics } from "../interfaces/ITeamStatistics";
import RequestAPI from "../utils/RequestAPI";

export default function CardFormation(props: ISizeMandatory) {
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

  function createData(
    played: number,
    wins: number,
    loses: number,
    draws: number
  ) {
    return { played, wins, loses, draws };
  }

  const rows = requestTeamStatistics.map((el) =>
    createData(
      el.fixtures.played.total,
      el.fixtures.wins.total,
      el.fixtures.loses.total,
      el.fixtures.draws.total
    )
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
              <TableCell>Jogos</TableCell>
              <TableCell align="right">Vitórias</TableCell>
              <TableCell align="right">Derrotas</TableCell>
              <TableCell align="right">Empates</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.played}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.played}
                </TableCell>
                <TableCell align="right">{row.wins}</TableCell>
                <TableCell align="right">{row.loses}</TableCell>
                <TableCell align="right">{row.draws}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
