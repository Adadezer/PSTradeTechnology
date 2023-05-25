import { useState } from "react";

import { IData, ISeason } from "../interfaces/ILeagues";
import ITeam from "../interfaces/ITeam";
import TradeContext from "./TradeContext";

export default function InputsProvider({ children }: any) {
  const [apiKey, setApiKey] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [league, setLeague] = useState<string>("");
  const [listLeagues, setListLeagues] = useState<IData[]>([]);
  const [idLeague, setIdLeague] = useState<string>();
  const [disabledLeague, setDisabledLeague] = useState<boolean>(true);
  const [season, setSeason] = useState<string>("");
  const [listSeasons, setListSeasons] = useState<ISeason[]>([]);
  const [disabledSeason, setDisabledSeason] = useState<boolean>(true);
  const [team, setTeam] = useState<string>("");
  const [requestTeams, setRequestTeams] = useState<ITeam[]>([]);
  const [disabledTeam, setDisabledTeam] = useState<boolean>(true);

  const myContext = {
    apiKey,
    setApiKey,
    country,
    setCountry,
    league,
    setLeague,
    listLeagues,
    setListLeagues,
    idLeague,
    setIdLeague,
    season,
    setSeason,
    listSeasons,
    setListSeasons,
    disabledLeague,
    setDisabledLeague,
    disabledSeason,
    team,
    setTeam,
    setDisabledSeason,
    disabledTeam,
    requestTeams,
    setRequestTeams,
    setDisabledTeam,
  };

  return (
    <TradeContext.Provider value={myContext}>{children}</TradeContext.Provider>
  );
}
