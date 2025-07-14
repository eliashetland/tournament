import type { IMatch } from "./IMatch";
import type { ITeam } from "./ITeam";
import type { IVolleyResult } from "./IVolleyResult";

export interface ITournament {
    id: string;
    name: string;
    date: Date;
    teams: ITeam[];
    matches: IMatch<IVolleyResult>[];

}