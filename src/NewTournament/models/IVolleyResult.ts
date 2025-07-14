import type { IVolleySet } from "./IVolleySet";


export interface IVolleyResult {
  sets: IVolleySet[]; 
  winner: "team1" | "team2";
}