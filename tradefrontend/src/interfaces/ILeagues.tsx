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
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
  };
}

interface IData {
  league: ILeague;
  country: ICountry;
  seasons: ISeason[];
}

export type { ILeague, ICountry, ISeason, IData };
