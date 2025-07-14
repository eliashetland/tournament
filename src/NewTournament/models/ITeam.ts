import type { IUser } from "../../UserRegistration/models/IUser";

export interface ITeam {
    id: string;
    players: IUser[];
}