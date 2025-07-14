import type { ITournamentPlayed } from "../../NewTournament/models/ITournamentPlayed";

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    ranking: number;
    tournamentsPlayed: ITournamentPlayed[];
}
