import type { ITeam } from "./ITeam";

export interface IMatch<T> {
    id: string;
    team1: ITeam;
    team2: ITeam;

    result: T;

}