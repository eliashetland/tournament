import { useState } from "react";
import type { ITournamentPlayed } from "../NewTournament/models/ITournamentPlayed";
import type { IUser } from "./models/IUser";

export function useUsers() {
  const [users, setUsers] = useState<IUser[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  const save = (updated: IUser[]) => {
    localStorage.setItem("users", JSON.stringify(updated));
    setUsers(updated);
  };

  const addUser = (user: IUser) => {
    const updated = [...users, user];
    save(updated);
  };

  const removeUser = (id: string) => {
    const updated = users.filter((user) => user.id !== id);
    save(updated);
  };

  const addRankingPoints = (id: string, points: number) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, ranking: user.ranking + points } : user
    );
    save(updated);
  };

  const addTournamentPlayed = (id: string, tournament: ITournamentPlayed) => {
    const updated = users.map((user) =>
      user.id === id
        ? {
            ...user,
            tournamentsPlayed: [...user.tournamentsPlayed, tournament],
          }
        : user
    );
    save(updated);
  };

  return {
    users,
    addUser,
    removeUser,
    addRankingPoints,
    addTournamentPlayed,
  };
}
