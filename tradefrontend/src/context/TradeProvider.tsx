import { useState } from "react";

import { IData, ISeason } from "../interfaces/ILeagues";
import TradeContext from "./TradeContext";

export default function InputsProvider({ children }: any) {
  const [apiKey, setApiKey] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [league, setLeague] = useState<string>("");
  const [listLeagues, setListLeagues] = useState<IData[]>([]);
  const [season, setSeason] = useState<string>("");
  const [listSeasons, setListSeasons] = useState<ISeason[]>([]);
  const [disabledLeague, setDisabledLeague] = useState<boolean>(true);
  const [disabledSeason, setDisabledSeason] = useState<boolean>(true);
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
    season,
    setSeason,
    listSeasons,
    setListSeasons,
    disabledLeague,
    setDisabledLeague,
    disabledSeason,
    setDisabledSeason,
    disabledTeam,
    setDisabledTeam,
  };

  return (
    <TradeContext.Provider value={myContext}>{children}</TradeContext.Provider>
  );
}
