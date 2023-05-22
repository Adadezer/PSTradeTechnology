interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface ICountry {
  name: string;
  code: string;
  flag: string;
}

interface ISeason {
  coverage: {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    injuries: boolean;
    odds: boolean;
    players: boolean;
    predictions: boolean;
    standings: boolean;
    top_assists: boolean;
    top_cards: boolean;
    top_scorers: boolean;
  };
  current: boolean;
  end: string;
  start: string;
  year: number;
}

interface IData {
  year: string | number | readonly string[] | undefined;
  league: ILeague;
  country: ICountry;
  seasons: ISeason[];
}

export type { ILeague, ICountry, ISeason, IData };
