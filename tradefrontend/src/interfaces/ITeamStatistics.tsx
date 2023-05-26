export interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
}

export interface IStreak {
  wins: number;
  draws: number;
  loses: number;
}

export interface IGoals {
  total: number;
  home: number;
  away: number;
}

export interface IGoalMinute {
  total: number | null;
  percentage: string | null;
}

export interface IStat {
  total: number;
  home: number;
  away: number;
}

export interface IAverage {
  home: string;
  away: string;
  total: string;
}

export interface IMinute {
  "0-15": {
    total: number;
    percentage: string;
  };
  "16-30": {
    total: number;
    percentage: string;
  };
  "31-45": {
    total: number;
    percentage: string;
  };
  "46-60": {
    total: number;
    percentage: string;
  };
  "61-75": {
    total: number;
    percentage: string;
  };
  "76-90": {
    total: number;
    percentage: string;
  };
  "91-105": {
    total: number | null;
    percentage: string | null;
  };
  "106-120": {
    total: number | null;
    percentage: string | null;
  };
}

export interface IGoalsFor {
  total: IStat;
  average: IAverage;
  minute: IMinute;
}

export interface IGoalsAgainst {
  total: IStat;
  average: IAverage;
  minute: IMinute;
}

export interface IStreakGoals {
  wins: string;
  loses: string;
}

export interface IBiggestStreak {
  streak: IStreak;
  wins: IStreakGoals;
  loses: IStreakGoals;
  goals: {
    for: IGoals;
    against: IGoals;
  };
}

export interface ILineup {
  formation: string;
  played: number;
}

export interface ICards {
  total: number;
  percentage: string;
}

export interface IYellowCards {
  "0-15": ICards;
  "16-30": ICards;
  "31-45": ICards;
  "46-60": ICards;
  "61-75": ICards;
  "76-90": ICards;
  "91-105": ICards | null;
  "106-120": ICards | null;
}

export interface IRedCards {
  "0-15": ICards | null;
  "16-30": ICards | null;
  "31-45": ICards | null;
  "46-60": ICards | null;
  "61-75": ICards | null;
  "76-90": ICards | null;
  "91-105": ICards | null;
  "106-120": ICards | null;
}

export interface ICardStats {
  yellow: IYellowCards;
  red: IRedCards;
}

export interface IStatistics {
  league: ILeague;
  team: ITeam;
  form: string;
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  goals: {
    for: IGoalsFor;
    against: IGoalsAgainst;
  };
  biggest: IBiggestStreak;
  clean_sheet: {
    home: number;
    away: number;
    total: number;
  };
  failed_to_score: {
    home: number;
    away: number;
    total: number;
  };
  penalty: {
    scored: {
      total: number;
      percentage: string;
    };
    missed: {
      total: number;
      percentage: string;
    };
    total: number;
  };
  lineups: ILineup[];
  cards: ICardStats;
}
